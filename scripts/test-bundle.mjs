import { bundle } from '../src/utils/bundler.js'

const code = `import React from 'react'; console.log('bundle test');`;

;(async () => {
  try {
    const out = await bundle(code)
    console.log('Bundled length:', out.length)
  } catch (err) {
    console.error('Bundle error', err)
    process.exit(1)
  }
})()
