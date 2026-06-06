import React from 'react'
import type { TutorialItem } from '../App'
import { useNavigate } from 'react-router-dom'

export default function Home({ tutorials }: { tutorials: TutorialItem[] }) {
  const navigate = useNavigate()

  return (
    <main className="container">
      <header>
        <h1>PWA Learning App</h1>
        <p>Välj en tutorial för att börja lära interaktivt.</p>
      </header>
      <section>
        <ul>
          {tutorials.map((t) => (
            <li key={t.id}>
              <button className="link-button" onClick={() => navigate(`/tutorial/${t.id}`)}>
                {t.title}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
