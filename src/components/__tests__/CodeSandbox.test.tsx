import React from 'react'
import { render, screen } from '@testing-library/react'

// Mock Monaco editor to avoid webworker issues in tests
vi.mock('@monaco-editor/react', async () => {
  const React = await vi.importActual('react')
  return {
    default: (props: any) => React.createElement('textarea', { 'data-testid': 'mock-editor', defaultValue: props.value })
  }
})

// Mock bundler to avoid loading esbuild-wasm in the test environment
vi.mock('../../utils/bundler', () => ({
  bundle: async (code: string) => `console.log(\"[mock bundle]\")\n${code}`
}))

import CodeSandbox from '../CodeSandbox'

test('CodeSandbox shows editor and controls', () => {
  render(<CodeSandbox />)
  expect(screen.getByTestId('mock-editor')).toBeInTheDocument()
  expect(screen.getByText('Kör')).toBeInTheDocument()
  expect(screen.getByText('Rensa loggar')).toBeInTheDocument()
})
