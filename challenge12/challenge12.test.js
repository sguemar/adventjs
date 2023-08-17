import { describe, expect, it } from 'vitest'
import getMinJump from './challenge12'

describe('The perfect route to drop off gifts', () => {
  it('should be a function', () => {
    expect(typeof getMinJump).toBe('function')
  })

  it('should avoid the obstacles', () => {
    expect(getMinJump([5, 3, 6, 7, 9])).toBe(4)
    expect(getMinJump([2, 4, 6, 8, 10])).toBe(7)
    expect(getMinJump([1, 2, 3, 5])).toBe(4)
    expect(getMinJump([9, 5, 1])).toBe(2)
    expect(getMinJump([3, 7, 5])).toBe(2)
    expect(getMinJump([14, 10, 8, 2, 3, 6])).toBe(9)
    expect(getMinJump([7, 15, 9, 8])).toBe(6)
  })
})
