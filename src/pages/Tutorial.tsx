import React, { useState } from 'react'
import { TutorialItem } from '../App'
import CodeSandbox from '../components/CodeSandbox'

export default function Tutorial({ tutorial, onBack }: { tutorial: TutorialItem; onBack: () => void }) {
  const [completed, setCompleted] = useState(false)
  return (
    <main className="container">
      <button onClick={onBack} className="back">← Tillbaka</button>
      <h2>{tutorial.title}</h2>
      <p>{tutorial.content}</p>

      <section>
        <h3>Interaktiv övning</h3>
        <CodeSandbox />
        <div style={{ marginTop: 12 }}>
          <button onClick={() => setCompleted(true)}>{completed ? 'Klar ✓' : 'Markera som klar'}</button>
        </div>
      </section>
    </main>
  )
}
