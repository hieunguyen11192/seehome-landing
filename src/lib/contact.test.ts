import { describe, expect, it } from 'vitest'
import {
  callLabel,
  hasPhone,
  hasZalo,
  telHref,
  zaloHref,
  zaloLabel,
} from './contact'

describe('contact helpers', () => {
  it('treats blank phone/zalo as missing', () => {
    expect(hasPhone('')).toBe(false)
    expect(hasPhone('  ')).toBe(false)
    expect(hasZalo('')).toBe(false)
  })

  it('builds tel and zalo hrefs when present', () => {
    expect(hasPhone('0901234567')).toBe(true)
    expect(telHref('0901234567')).toBe('tel:0901234567')
    expect(zaloHref('https://zalo.me/0901234567')).toBe(
      'https://zalo.me/0901234567',
    )
  })

  it('falls back to #lien-he and cập nhật sớm labels when missing', () => {
    expect(telHref('')).toBe('#lien-he')
    expect(zaloHref('')).toBe('#lien-he')
    expect(callLabel('')).toContain('Cập nhật sớm')
    expect(zaloLabel('')).toContain('Cập nhật sớm')
    expect(callLabel('0901234567')).toBe('Gọi điện')
    expect(zaloLabel('https://zalo.me/1')).toBe('Zalo')
  })
})
