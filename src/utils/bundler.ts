// Simple in-browser bundler using esbuild-wasm and unpkg for module resolution.
// This is intended for small experimental imports only.
import * as esbuild from 'esbuild-wasm'

let initialized = false

const unpkgPathPlugin = (inputCode: string) => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: any) {
      // Handle the entry file
      build.onResolve({ filter: /^index\.js$/ }, (args: any) => {
        return { path: 'index.js', namespace: 'a' }
      })

      // Handle relative paths in a module
      build.onResolve({ filter: /^\.\// }, (args: any) => {
        return {
          namespace: 'a',
          path: new URL(args.path, args.resolveDir + '/').href,
        }
      })

      // Handle main module resolution (bare imports)
      build.onResolve({ filter: /.*/ }, (args: any) => {
        return { namespace: 'a', path: `https://unpkg.com/${args.path}?module` }
      })
    },
  }
}

const fetchPlugin = (inputCode: string) => {
  return {
    name: 'fetch-plugin',
    setup(build: any) {
      // Load the entry file from memory
      build.onLoad({ filter: /^index\.js$/, namespace: 'a' }, () => {
        return { loader: 'jsx', contents: inputCode }
      })

      // CSS files -> inject as style tag
      build.onLoad({ filter: /\.css$/, namespace: 'a' }, async (args: any) => {
        const res = await fetch(args.path)
        const text = await res.text()
        const escaped = text.replace(/\n/g, '').replace(/"/g, '\\"').replace(/'/g, "\\'")
        const contents = `const style = document.createElement('style'); style.innerText = '${escaped}'; document.head.appendChild(style);`
        return { loader: 'jsx', contents, resolveDir: new URL('./', args.path).href }
      })

      // Generic handler for JS/TS/other files
      build.onLoad({ filter: /.*/, namespace: 'a' }, async (args: any) => {
        const res = await fetch(args.path)
        const text = await res.text()
        return { loader: 'jsx', contents: text, resolveDir: new URL('./', args.path).href }
      })
    },
  }
}

export async function bundle(inputCode: string) {
  if (!initialized) {
    // Use a specific version of the wasm file hosted on unpkg
    await esbuild.initialize({ wasmURL: 'https://unpkg.com/esbuild-wasm@0.17.19/esbuild.wasm', worker: true })
    initialized = true
  }

  const result = await esbuild.build({
    entryPoints: ['index.js'],
    bundle: true,
    write: false,
    plugins: [unpkgPathPlugin(inputCode), fetchPlugin(inputCode)],
    define: { 'process.env.NODE_ENV': '"production"' },
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    format: 'iife',
  })

  return result.outputFiles[0].text
}
