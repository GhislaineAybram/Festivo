// format.ts
// aliasformat TODO
export const formatName = (name: string): string => {
  if (!name) return ''
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

// Date format
export const formatDate = (date: Date | null): string | null => {
  if (!date) return null
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
}

// Time format
export const formatTime = (time: Date | null): string | null => {
  if (!time) return null
  return time.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}
