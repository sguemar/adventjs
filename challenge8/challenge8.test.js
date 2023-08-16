import { describe, it, expect } from 'vitest'
import maxProfit from './challenge8'

describe('The cryptocurrency craze', () => {
  it('should be a function', () => {
    expect(typeof maxProfit).toBe('function')
  })

  it('should return -1 if no profit possible', () => {
    expect(maxProfit([0])).toBe(-1)
    expect(maxProfit([9, 7, 5, 4, 3, 2, 1])).toBe(-1)
    expect(maxProfit([10, 6, 3, 2, 0])).toBe(-1)
    expect(maxProfit([4, 4, 4, 4, 4])).toBe(-1)
  })

  it('should return the maximum profit possible', () => {
    expect(maxProfit([3, 5, 7, 1, 10])).toBe(9)
    expect(maxProfit([42, 45, 3, 4, 6])).toBe(3)
    expect(maxProfit([1, 2, 3, 4, 5, 70])).toBe(69)
    expect(maxProfit([89, 23, 24, 67, 23, 23])).toBe(44)
  })
})
