import { describe, expect, it } from 'vitest'
import { isValid } from './challenge3'

describe('The Grinch wants to spoil Christmas!', () => {
  it('should be a function', () => {
    expect(typeof isValid).toBe('function')
  })

  it('should return true with letters without symbols', () => {
    const letter = 'bike car playstation'

    expect(isValid(letter)).toBeTruthy()
  })

  it('should return false with letters with odd parentheses', () => {
    expect(isValid('bike (car playstation')).toBeFalsy()
    expect(isValid('bike car playstation)')).toBeFalsy()
    expect(isValid('(bike) car (playstation')).toBeFalsy()
  })
})
