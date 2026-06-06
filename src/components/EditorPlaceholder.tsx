import React from 'react'

export default function EditorPlaceholder() {
  return (
    <div className="editor-placeholder">
      <p>Editor / sandbox kommer här. Byt ut mot Monaco/CodeMirror för riktig kod-körning.</p>
      <div className="editor-box">// Din interaktiva kodmiljö</div>
    </div>
  )
}
