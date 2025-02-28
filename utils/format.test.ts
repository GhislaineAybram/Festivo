/**
 * @file utils/format.test.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * This file contains unit tests for the format utility functions
 * (password, alias, date, and time formatting).
 */

import { describe, expect, it, vi } from 'vitest'

describe('validateAlias', () => {
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'register.error.alias-length': 'doit être compris entre 3 et 20 caractères',
      'register.error.composition': 'ne peut contenir que des lettres, chiffres, points, tirets et underscores',
      'register.error.extremity': 'ne peut pas commencer ou se terminer par un caractère spécial (._-)',
      'register.error.space': 'ne peut pas contenir d\'espaces',
      'register.error.alias-sentence': 'Le pseudo',
    }
    return translations[key] || key
  }
  it('should return valid when alias is correct', () => {
    const result = validateAlias('validAlias', t)
    expect(result.isValidAlias).toBe(true)
    expect(result.errorMessageAlias).toBe('')
  })

  it('should return invalid if alias is too short', () => {
    const result = validateAlias('ab', t)
    expect(result.isValidAlias).toBe(false)
    expect(result.errorMessageAlias).toBe('Le pseudo doit être compris entre 3 et 20 caractères.')
  })

  it('should return invalid if alias is too long', () => {
    const result = validateAlias('aaaaaaaaaaaaaaaaaaaaaaaa', t)
    expect(result.isValidAlias).toBe(false)
    expect(result.errorMessageAlias).toBe('Le pseudo doit être compris entre 3 et 20 caractères.')
  })

  it('should return invalid if alias contains invalid characters', () => {
    const result = validateAlias('invalid@alias', t)
    expect(result.isValidAlias).toBe(false)
    expect(result.errorMessageAlias).toBe('Le pseudo ne peut contenir que des lettres, chiffres, points, tirets et underscores.')
  })

  it('should return invalid if alias starts with a special character', () => {
    const result = validateAlias('_alias', t)
    expect(result.isValidAlias).toBe(false)
    expect(result.errorMessageAlias).toBe('Le pseudo ne peut pas commencer ou se terminer par un caractère spécial (._-).')
  })

  it('should return invalid if alias ends with a special character', () => {
    const result = validateAlias('alias_', t)
    expect(result.isValidAlias).toBe(false)
    expect(result.errorMessageAlias).toBe('Le pseudo ne peut pas commencer ou se terminer par un caractère spécial (._-).')
  })

  it('should return invalid if alias contains spaces', () => {
    const result = validateAlias('alias with spaces', t)
    expect(result.isValidAlias).toBe(false)
    expect(result.errorMessageAlias).toBe(`Le pseudo ne peut contenir que des lettres, chiffres, points, tirets et underscores, ne peut pas contenir d'espaces.`)
  })

  it('should return multiple error messages when multiple rules are violated', () => {
    const result = validateAlias('_alias with spaces$', t)
    expect(result.isValidAlias).toBe(false)
    expect(result.errorMessageAlias).toBe(`Le pseudo ne peut contenir que des lettres, chiffres, points, tirets et underscores, ne peut pas commencer ou se terminer par un caractère spécial (._-), ne peut pas contenir d'espaces.`)
  })
})

describe('validatePassword', () => {
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'register.error.password-length': '12 caractères',
      'register.error.lowercase': 'une lettre minuscule',
      'register.error.uppercase': 'une lettre majuscule',
      'register.error.number': 'un chiffre',
      'register.error.symbol': 'un symbole',
      'register.error.password-sentence': 'Le mot de passe doit contenir au moins',
    }
    return translations[key] || key
  }

  it('should return valid for a strong password', () => {
    const result = validatePassword('StrongP@ssword123', t)
    expect(result.isValidPassword).toBe(true)
    expect(result.errorMessagePassword).toBe('')
  })

  it('should return invalid if the password is too short', () => {
    const result = validatePassword('Short1!', t)
    expect(result.isValidPassword).toBe(false)
    expect(result.errorMessagePassword).toBe(
      'Le mot de passe doit contenir au moins 12 caractères.',
    )
  })

  it('should return invalid if the password has no lowercase letter', () => {
    const result = validatePassword('PASSWORD123!', t)
    expect(result.isValidPassword).toBe(false)
    expect(result.errorMessagePassword).toBe(
      'Le mot de passe doit contenir au moins une lettre minuscule.',
    )
  })

  it('should return invalid if the password has no uppercase letter', () => {
    const result = validatePassword('password123!', t)
    expect(result.isValidPassword).toBe(false)
    expect(result.errorMessagePassword).toBe(
      'Le mot de passe doit contenir au moins une lettre majuscule.',
    )
  })

  it('should return invalid if the password has no number', () => {
    const result = validatePassword('Passwoooord!', t)
    expect(result.isValidPassword).toBe(false)
    expect(result.errorMessagePassword).toBe(
      'Le mot de passe doit contenir au moins un chiffre.',
    )
  })

  it('should return invalid if the password has no symbol', () => {
    const result = validatePassword('Passwoord123', t)
    expect(result.isValidPassword).toBe(false)
    expect(result.errorMessagePassword).toBe(
      'Le mot de passe doit contenir au moins un symbole.',
    )
  })

  it('should return all errors for a completely invalid password', () => {
    const result = validatePassword('short', t)
    expect(result.isValidPassword).toBe(false)
    expect(result.errorMessagePassword).toBe(
      'Le mot de passe doit contenir au moins 12 caractères, une lettre majuscule, un chiffre, un symbole.',
    )
  })

  it('should return multiple errors in a single sentence', () => {
    const result = validatePassword('PASSWORD', t)
    expect(result.isValidPassword).toBe(false)
    expect(result.errorMessagePassword).toBe(
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

describe('showError', () => {
  it('should set and clear the error message after 3 seconds', () => {
    const errorMsg = ref('')

    vi.useFakeTimers()
    showError(errorMsg, 'Test error')
    expect(errorMsg.value).toBe('Test error')

    vi.advanceTimersByTime(3000)
    expect(errorMsg.value).toBe('')

    vi.useRealTimers()
  })
})
