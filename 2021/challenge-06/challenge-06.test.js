import { describe, expect, it } from 'vitest'
import sumPairs from './challenge-06'

describe('Finishing off the final exams', () => {
  it('should be a function', () => {
    expect(typeof sumPairs).toBe('function')
  })

  it('should return null if no pairs add up the expected result', () => {
    expect(sumPairs([1, 2, 3, 4], 11)).toBeNull()
    expect(sumPairs([10, 2, 45, 7], 3)).toBeNull()
    expect(sumPairs([55, 56, 57, 58], 6)).toBeNull()
  })

  it('should return the only pair that add up the expected result', () => {
    expect(sumPairs([1, 2, 3, 4], 3)).toStrictEqual([1, 2])
    expect(sumPairs([1, 2, 3], 5)).toStrictEqual([2, 3])
    expect(sumPairs([1, 2, 3, 4], 7)).toStrictEqual([3, 4])
    expect(sumPairs([1, 2, 3, 4, 5], 9)).toStrictEqual([4, 5])
  })

  it('should return the first pair (the leftmost one) that add up the expected result', () => {
    expect(sumPairs([1, 2, 3, 4], 5)).toStrictEqual([1, 4])
    expect(sumPairs([3, 8, 7, 1, 9], 10)).toStrictEqual([3, 7])
    expect(sumPairs([2, 2, 3, 1], 4)).toStrictEqual([2, 2])
    expect(sumPairs([6, 7, 1, 2], 8)).toStrictEqual([6, 2])
  })
})
