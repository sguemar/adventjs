import { describe, expect, it } from 'vitest'
import canCarry from './challenge21'

describe('The route with gifts', () => {
  it('should be a function', () => {
    expect(typeof canCarry).toBe('function')
  })

  it('should return false if the sleigh capacity is too low to make any trips', () => {
    expect(canCarry(2, [[3, 2, 5]])).toBeFalsy()
    expect(canCarry(3, [[4, 1, 4], [6, 2, 5]])).toBeFalsy()
    expect(canCarry(1, [[2, 1, 2], [2, 3, 4], [3, 6, 9]])).toBeFalsy()
  })

  it('should return false if the sleigh capacity is exceeded in the middle of the trip', () => {
    expect(canCarry(3, [[2, 2, 5], [2, 3, 9]])).toBeFalsy()
    expect(canCarry(5, [[1, 1, 4], [1, 3, 4], [4, 3, 5]])).toBeFalsy()
    expect(canCarry(4, [[4, 1, 2], [3, 3, 6], [2, 5, 7]])).toBeFalsy()
  })

  it('should return true if the sleigh capacity is never exceeded during the trip', () => {
    expect(canCarry(3, [[1, 1, 5], [2, 2, 10]])).toBeTruthy()
    expect(canCarry(3, [[2, 1, 5], [3, 5, 7]])).toBeTruthy()
    expect(canCarry(4, [[2, 3, 8], [2, 5, 7]])).toBeTruthy()
    expect(canCarry(4, [[2, 1, 10], [1, 2, 10], [1, 3, 4], [1, 4, 5], [1, 6, 9], [4, 11, 13]])).toBeTruthy()
  })
})
