import { describe, expect, it } from 'vitest'
import decodeNumber from './challenge-16'

describe('Deciphering the numbers...', () => {
  it('should be a function', () => {
    expect(typeof decodeNumber).toBe('function')
  })

  it('should return the correct deciphered number', () => {
    expect(decodeNumber('...')).toBe(3)
    expect(decodeNumber('.,')).toBe(4)
    expect(decodeNumber(',.')).toBe(6)
    expect(decodeNumber(',...')).toBe(8)
    expect(decodeNumber('.........!')).toBe(107)
    expect(decodeNumber('.;')).toBe(49)
    expect(decodeNumber('..,')).toBe(5)
    expect(decodeNumber('..,!')).toBe(95)
    expect(decodeNumber('.;!')).toBe(49)
    expect(decodeNumber('.,:;!')).toBe(34)
    expect(decodeNumber('!!!')).toBe(300)
    expect(decodeNumber(';!')).toBe(50)
    expect(decodeNumber(';!!')).toBe(150)
  })

  it('should return NaN if there is an unknown symbol', () => {
    expect(decodeNumber(';.W')).toBe(NaN)
    expect(decodeNumber(';a.')).toBe(NaN)
    expect(decodeNumber(';P::.')).toBe(NaN)
  })
})
