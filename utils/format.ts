// format.ts

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
