// format.ts

// Password format verification
export const validatePassword = (password: string, t: (key: string) => string): { isValid: boolean, errorMessage: string } => {
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
    isValid: errors.length === 0,
    errorMessage: errors.length
      ? `${t('register.error.password-sentence')} ${errors.join(', ')}.`
      : '',
  }
}

// Alias format verification
export const validateAlias = (alias: string, t: (key: string) => string): { isValid: boolean, errorMessage: string } => {
  const errors: string[] = []

  if (alias.length < 3 || alias.length > 20) {
    errors.push(t('register.error.alias-length'))
  }
  const validPattern = /^[a-zA-Z0-9._-]+$/
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
    isValid: errors.length === 0,
    errorMessage: errors.length
      ? `${t('register.error.alias-sentence')} ${errors.join(', ')}.`
      : '',
  }
}

// Date format
export const formatDate = (date: Date | null): string | null => {
  if (!date) return null
  const validDate = new Date(date)
  return `${validDate.getFullYear()}-${(validDate.getMonth() + 1).toString().padStart(2, '0')}-${validDate.getDate().toString().padStart(2, '0')}`
}

// Time format
export const formatTime = (time: Date | null): string | null => {
  if (!time) return null
  return time.toLocaleTimeString('fr-FR', {
    timeZone: 'Europe/Paris', // Fuseau horaire explicitement défini
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}
