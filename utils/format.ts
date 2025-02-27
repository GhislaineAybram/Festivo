/**
 * @file utils/format.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved.
 *
 * @description
 * This file contains utility functions for user input validation (password, alias),
 * and date/time formatting.
 */

/**
 * Validates a password against security criteria.
 * @param {string} password - The password to validate.
 * @param {(key: string) => string} t - Translation function.
 * @returns {{ isValidPassword: boolean, errorMessagePassword: string }}
 * - `isValidPassword`: true if the password is valid, false otherwise.
 * - `errorMessagePassword`: Detailed error message if the password is invalid.
 */
export const validatePassword = (password: string, t: (key: string) => string): { isValidPassword: boolean, errorMessagePassword: string } => {
  const errors: string[] = []
  const minLength = 12

  if (password.length < minLength) {
    errors.push(t('register.error.password-length'))
  }
  if (!/[a-z]/.test(password)) {
    errors.push(t('register.error.lowercase'))
  }
  if (!/[A-Z]/.test(password)) {
    errors.push(t('register.error.uppercase'))
  }
  if (!/\d/.test(password)) {
    errors.push(t('register.error.number'))
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push(t('register.error.symbol'))
  }

  return {
    isValidPassword: errors.length === 0,
    errorMessagePassword: errors.length
      ? `${t('register.error.password-sentence')} ${errors.join(', ')}.`
      : '',
  }
}

/**
 * Validates a user alias against predefined criteria.
 * @param {string} alias - The alias to validate.
 * @param {(key: string) => string} t - Translation function.
 * @returns {{ isValidAlias: boolean, errorMessageAlias: string }}
 * - `isValidAlias`: true if the alias is valid, false otherwise.
 * - `errorMessageAlias`: Detailed error message if the alias is invalid.
 */
export const validateAlias = (alias: string, t: (key: string) => string): { isValidAlias: boolean, errorMessageAlias: string } => {
  const errors: string[] = []

  if (alias.length < 3 || alias.length > 20) {
    errors.push(t('register.error.alias-length'))
  }
  const validPattern = /^[\p{L}\p{N}._-]+$/u
  if (!validPattern.test(alias)) {
    errors.push(t('register.error.composition'))
  }
  if (/^[._-]|[._-]$/.test(alias)) {
    errors.push(t('register.error.extremity'))
  }
  if (alias.includes(' ')) {
    errors.push(t('register.error.space'))
  }

  return {
    isValidAlias: errors.length === 0,
    errorMessageAlias: errors.length
      ? `${t('register.error.alias-sentence')} ${errors.join(', ')}.`
      : '',
  }
}

/**
 * Formats a date into `YYYY-MM-DD` format.
 * @param {Date | null} date - The date to format.
 * @returns {string | null} - The formatted date or `null` if invalid.
 */
export const formatDate = (date: Date | null): string | null => {
  if (!date) return null
  const validDate = new Date(date)
  return `${validDate.getFullYear()}-${(validDate.getMonth() + 1).toString().padStart(2, '0')}-${validDate.getDate().toString().padStart(2, '0')}`
}

/**
 * Formats a time into `HH:mm:ss` format based on the specified time zone.
 * @param {Date | null} time - The time to format.
 * @param {string} [timeZone='Europe/Paris'] - The time zone to use.
 * @returns {string | null} - The formatted time or `null` if invalid.
 */
export const formatTime = (time: Date | null): string | null => {
  if (!time) return null
  return time.toLocaleTimeString('fr-FR', {
    timeZone: 'Europe/Paris', // Fuseau horaire explicitement défini
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}
