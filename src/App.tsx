import React from 'react'
import { Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Tutorial from './pages/Tutorial'

export type TutorialItem = {
  id: string
  title: string
  content: string
}

export const TUTORIALS: TutorialItem[] = [
  { id: 'intro', title: 'Introduktion till projektet', content: 'Välkommen! Detta är en interaktiv tutorial.' },
  { id: 'pwa-basics', title: 'PWA-grunder', content: 'PWA = installable, offline-capable web apps.' },
  { id: 'offline-first', title: 'Offline-first design', content: 'Designa för begränsad nätverksåtkomst.' },
]

function TutorialWrapper() {
  const { id } = useParams()
  const navigate = useNavigate()
  if (!id) return <Navigate to="/" replace />
  const t = TUTORIALS.find((x) => x.id === id)
  if (!t) return <Navigate to="/" replace />
  return <Tutorial tutorial={t} onBack={() => navigate('/')} />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home tutorials={TUTORIALS} />} />
      <Route path="/tutorial/:id" element={<TutorialWrapper />} />
    </Routes>
  )
}
