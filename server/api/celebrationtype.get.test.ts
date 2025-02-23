// server/api/celebrationtype.get.test.ts

import { describe, it, expect, vi } from 'vitest'
import type { H3Event } from 'h3'
import celebrationTypeHandler from './celebrationtype.get'
import type { CelebrationType } from '@/types'

// Mock de la fonction getCelebrationTypes
vi.mock('~/src', () => ({
  getCelebrationTypes: vi.fn(),
}))

describe('GET /api/celebrationtype', () => {
  it('devrait retourner tous les types de célébration', async () => {
    const mockCelebrationTypes: CelebrationType[] = [
      { celebrationTypeId: '1', category: 'Birthday', picture: 'birthday.jpg', createdAt: '2023-01-01T00:00:00Z' },
      { celebrationTypeId: '2', category: 'Anniversary', picture: 'anniversary.jpg', createdAt: '2023-01-01T00:00:00Z' },
    ]

    // Utilisation de vi.spyOn pour espionner la fonction getCelebrationTypes
    const spy = vi.spyOn(await import('@/src'), 'getCelebrationTypes').mockResolvedValue(mockCelebrationTypes)

    const event = {} as H3Event // Mock minimal d'événement
    const response = await celebrationTypeHandler(event)

    expect(response).toEqual(mockCelebrationTypes)
    expect(spy).toHaveBeenCalled()
  })

  it('devrait retourner une erreur 404 si aucun type de célébration n\'est trouvé', async () => {
    const spy = vi.spyOn(await import('@/src'), 'getCelebrationTypes').mockResolvedValue(null)

    const event = {} as H3Event // Mock minimal d'événement
    const response = await celebrationTypeHandler(event)

    expect(response).toEqual({
      statusCode: 404,
      body: { error: 'No celebration_type found' },
    })
    expect(spy).toHaveBeenCalled()
  })

  it('devrait retourner une erreur 500 en cas d\'erreur interne', async () => {
    const spy = vi.spyOn(await import('@/src'), 'getCelebrationTypes').mockRejectedValue(new Error('Database error'))

    const event = {} as H3Event // Mock minimal d'événement
    const response = await celebrationTypeHandler(event)

    expect(response).toEqual({
      statusCode: 500,
      body: { error: 'Failed to fetch celebration_type' },
    })
    expect(spy).toHaveBeenCalled()
  })
})
