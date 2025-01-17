// format.test.ts
import { describe, expect, it } from 'vitest'

describe('formatDate', () => {
  it('should format a valid date correctly', () => {
    const date = new Date('2025-01-17T12:34:56Z')
    const result = formatDate(date)
    expect(result).toBe('2025-01-17')
  })

  it('should return null for null input', () => {
    const result = formatDate(null)
    expect(result).toBeNull()
  })

  it('should handle invalid date objects gracefully', () => {
    const date = new Date('invalid-date')
    const result = formatDate(date)
    expect(result).toBe('NaN-NaN-NaN')
  })
})

describe('formatTime', () => {
  it('should format a valid time correctly', () => {
    const time = new Date('2025-01-17T12:34:56Z')
    const result = formatTime(time)
    expect(result).toBe('13:34:56') // Converti en heure locale (France)
  })

  it('should return null for null input', () => {
    const result = formatTime(null)
    expect(result).toBeNull()
  })
})
