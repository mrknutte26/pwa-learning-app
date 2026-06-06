import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../Home'
import { MemoryRouter } from 'react-router-dom'
import { TUTORIALS } from '../../App'

test('Home renders tutorial list', () => {
  render(
    <MemoryRouter>
      <Home tutorials={TUTORIALS} />
    </MemoryRouter>
  )

  for (const t of TUTORIALS) {
    expect(screen.getByText(t.title)).toBeInTheDocument()
  }
})
