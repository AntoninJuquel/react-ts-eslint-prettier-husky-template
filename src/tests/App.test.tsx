import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../views'

test('renders Hello world !', () => {
  render(<App />)
  const hello = screen.getByText(/Hello world !/i)
  expect(hello).toBeInTheDocument()
})
