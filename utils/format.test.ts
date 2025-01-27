// format.test.ts
import { describe, expect, it } from 'vitest'

describe('validatePassword', () => {
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'register.error.length': '12 caractères',
      'register.error.lowercase': 'une lettre minuscule',
      'register.error.uppercase': 'une lettre majuscule',
      'register.error.number': 'un chiffre',
      'register.error.symbol': 'un symbole',
      'register.error.sentence': 'Le mot de passe doit contenir au moins',
    }
    return translations[key] || key
  }

  it('should return valid for a strong password', () => {
    const result = validatePassword('StrongP@ssword123', t)
    expect(result.isValid).toBe(true)
    expect(result.errorMessage).toBe('')
  })

  it('should return invalid if the password is too short', () => {
    const result = validatePassword('Short1!', t)
    expect(result.isValid).toBe(false)
    expect(result.errorMessage).toBe(
      'Le mot de passe doit contenir au moins 12 caractères.',
    )
  })

  it('should return invalid if the password has no lowercase letter', () => {
    const result = validatePassword('PASSWORD123!', t)
    expect(result.isValid).toBe(false)
    expect(result.errorMessage).toBe(
      'Le mot de passe doit contenir au moins une lettre minuscule.',
    )
  })

  it('should return invalid if the password has no uppercase letter', () => {
    const result = validatePassword('password123!', t)
    expect(result.isValid).toBe(false)
    expect(result.errorMessage).toBe(
      'Le mot de passe doit contenir au moins une lettre majuscule.',
    )
  })

  it('should return invalid if the password has no number', () => {
    const result = validatePassword('Passwoooord!', t)
    expect(result.isValid).toBe(false)
    expect(result.errorMessage).toBe(
      'Le mot de passe doit contenir au moins un chiffre.',
    )
  })

  it('should return invalid if the password has no symbol', () => {
    const result = validatePassword('Passwoord123', t)
    expect(result.isValid).toBe(false)
    expect(result.errorMessage).toBe(
      'Le mot de passe doit contenir au moins un symbole.',
    )
  })

  it('should return all errors for a completely invalid password', () => {
    const result = validatePassword('short', t)
    expect(result.isValid).toBe(false)
    expect(result.errorMessage).toBe(
      'Le mot de passe doit contenir au moins 12 caractères, une lettre majuscule, un chiffre, un symbole.',
    )
  })

  it('should return multiple errors in a single sentence', () => {
    const result = validatePassword('PASSWORD', t)
    expect(result.isValid).toBe(false)
    expect(result.errorMessage).toBe(
      'Le mot de passe doit contenir au moins 12 caractères, une lettre minuscule, un chiffre, un symbole.',
    )
  })
})

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
