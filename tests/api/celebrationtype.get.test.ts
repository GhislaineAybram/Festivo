/**
 * @file tests/api/celebrationtype.get.test.ts
 * @copyright Copyright (c) 2024-2025 Festivo. All rights reserved
 *
 * @description
 * This file contains unit tests for the route GET /api/celebrationtype
 */

import { describe, it, expect, vi } from 'vitest'
import type { H3Event } from 'h3'
import getCelebrationTypeHandler from '~/server/api/celebrationtype.get'
import { getCelebrationTypes } from '~/src'

vi.mock('~/src', () => ({
  getCelebrationTypes: vi.fn(),
}))

describe('GET /api/celebrationtype', () => {
  it('should return celebration types when found', async () => {
    const mockCelebrationTypes = [
      { celebrationTypeId: '1', category: 'Birthday', picture: 'birthday.jpg', createdAt: '2023-01-01T00:00:00Z' },
      { celebrationTypeId: '2', category: 'Anniversary', picture: 'anniversary.jpg', createdAt: '2023-01-01T00:00:00Z' },
    ]

    vi.mocked(getCelebrationTypes).mockResolvedValue(mockCelebrationTypes)

    const event = {} as H3Event
    const response = await getCelebrationTypeHandler(event)

    expect(response).toEqual(mockCelebrationTypes)
  })

  it('should return 404 if no celebration types found', async () => {
    vi.mocked(getCelebrationTypes).mockResolvedValue(null)

    const event = {} as H3Event

    await expect(getCelebrationTypeHandler(event)).rejects.toThrow('No celebration type found')
  })

  it('should return 500 on internal error', async () => {
    vi.mocked(getCelebrationTypes).mockImplementation(async () => {
      throw new Error('Database Error')
    })

    const event = {} as H3Event

    await expect(getCelebrationTypeHandler(event)).rejects.toThrow('Internal Server Error')
  })
})
