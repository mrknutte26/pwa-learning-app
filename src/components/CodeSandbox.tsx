import React, { useEffect, useRef, useState } from 'react'
import Editor, { OnChange } from '@monaco-editor/react'

const DEFAULT_CODE = `// Prova att skriva JavaScript här\nconsole.log('Hello from sandbox')\n`;

export default function CodeSandbox() {
  const [code, setCode] = useState(DEFAULT_CODE)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const urlRef = useRef<string | null>(null)
  const [logs, setLogs] = useState<string[]>([])

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!e.data || e.data.source !== 'sandbox') return
      const text = (e.data.type === 'log' ? e.data.data.join(' ') : `[${e.data.type}] ${e.data.data.join(' ')}`)
      setLogs((s) => [...s, String(text)])
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  useEffect(() => {
    return () => {
      if (urlRef.current) {
        URL.revokeObjectURL(urlRef.current)
        urlRef.current = null
      }
    }
  }, [])

  const run = async () => {
    setLogs((s) => [...s, '--- Bundling ---'])
    try {
      const { bundle } = await import('../utils/bundler')
      const bundled = await bundle(code)
      const html = `<!doctype html><html><head><meta charset="utf-8"></head><body>
<script>
(function(){
  function send(type, data){
    try{ parent.postMessage({ source: 'sandbox', type: type, data: data }, '*') }catch(e){}
  }
  console.log = function(){ send('log', Array.from(arguments).map(function(a){ try{return JSON.stringify(a)}catch(e){return String(a)} })); }
  console.error = function(){ send('error', Array.from(arguments).map(function(a){ try{return JSON.stringify(a)}catch(e){return String(a)} })); }
  window.onerror = function(msg, url, line, col, err){ send('error', [msg + ' at ' + line + ':' + col]); }
})();
</script>
<script>
try{
${bundled}
}catch(e){ console.error(e && e.stack ? e.stack : String(e)) }
</script>
</body></html>`

      if (urlRef.current) {
        URL.revokeObjectURL(urlRef.current)
        urlRef.current = null
      }
      const blob = new Blob([html], { type: 'text/html' })
      const url = URL.createObjectURL(blob)
      urlRef.current = url
      if (iframeRef.current) iframeRef.current.src = url
      setLogs((s) => [...s, '--- Running ---'])
    } catch (err: any) {
      setLogs((s) => [...s, `[bundle error] ${String(err && err.message ? err.message : err)}`])
    }
  }

  const clearLogs = () => setLogs([])

  const handleChange: OnChange = (value) => {
    if (typeof value === 'string') setCode(value)
  }

  return (
    <div>
      <div style={{ border: '1px solid #e2e8f0', borderRadius: 6, overflow: 'hidden' }}>
        <Editor height="260px" defaultLanguage="javascript" value={code} onChange={handleChange} theme="vs-dark" />
      </div>
      <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
        <button onClick={run}>Kör</button>
        <button onClick={clearLogs}>Rensa loggar</button>
      </div>

      <div style={{ marginTop: 12 }}>
        <h4>Output</h4>
        <div style={{ background: '#0f172a', color: '#e6edf3', padding: 10, borderRadius: 6, minHeight: 80, fontFamily: 'monospace', fontSize: 13 }}>
          {logs.length === 0 ? <div style={{ color: '#94a3b8' }}>Inga loggar ännu</div> : logs.map((l, i) => <div key={i}>{l}</div>)}
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <h4>Sandbox</h4>
        <div style={{ marginBottom: 8 }}>
          <small style={{ color: '#64748b' }}>Tips: importera paket med import x from 'lodash' — bundlar via unpkg.</small>
        </div>
        <iframe ref={iframeRef} title="sandbox" style={{ width: '100%', height: 260, border: '1px solid #cbd5e1', borderRadius: 6 }} sandbox="allow-scripts"></iframe>
      </div>
    </div>
  )
}
