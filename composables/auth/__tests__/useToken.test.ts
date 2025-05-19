/// <reference types="bun-types" />
import { describe, it, expect } from 'bun:test'
import { useToken } from '../useToken'
import type { CookieRef } from '#app'

// Extend globalThis
interface GlobalThis {
  useCookie: (name: string) => CookieRef<string | null>
}

// Create a simple mock implementation
const mockCookie = { value: 'test-token' } as CookieRef<string>
const mockUseCookie = (name: string) => {
  if (name !== 'token') throw new Error('Expected token cookie')
  return mockCookie
}

// Override the global useCookie
(globalThis as unknown as GlobalThis).useCookie = mockUseCookie

describe('useToken', () => {
  it('should return the token cookie', () => {
    const result = useToken()
    expect(result).toEqual(mockCookie)
    expect(result.value).toBe('test-token')
  })
}) 