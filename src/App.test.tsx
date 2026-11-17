import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'
import { site } from './data/site'

describe('App', () => {
  it('renders core sections and brand', () => {
    render(<App />)
    expect(screen.getAllByText(site.brandName).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      site.headline,
    )
    expect(document.getElementById('dich-vu')).toBeTruthy()
    expect(document.getElementById('cong-trinh')).toBeTruthy()
    expect(document.getElementById('lien-he')).toBeTruthy()
  })
})
