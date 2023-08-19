import { describe, expect, it } from 'vitest'
import checkSledJump from './challenge15'

describe('', () => {
  it('should be a function', () => {
    expect(typeof checkSledJump).toBe('function')
  })

  it('should return false if the sleigh only goes up', () => {
    expect(checkSledJump([1, 2, 3])).toBeFalsy()
    expect(checkSledJump([2, 3, 4, 5, 6])).toBeFalsy()
    expect(checkSledJump([2, 4, 6, 8, 10])).toBeFalsy()
    expect(checkSledJump([4, 10, 20, 44, 50])).toBeFalsy()
  })

  it('should return false if the sleigh goes up not strictly and goes down', () => {
    expect(checkSledJump([1, 2, 3, 3, 2, 1])).toBeFalsy()
    expect(checkSledJump([2, 3, 4, 4, 4, 5, 6, 2])).toBeFalsy()
    expect(checkSledJump([5, 5, 5, 6, 10, 11, 5, 3])).toBeFalsy()
    expect(checkSledJump([15, 20, 20, 21, 50, 50, 20, 6, 3])).toBeFalsy()
  })

  it('should return true if goes up and goes down strictly', () => {
    expect(checkSledJump([1, 2, 3, 2, 1])).toBeTruthy()
    expect(checkSledJump([0, 1, 0])).toBeTruthy()
    expect(checkSledJump([0, 3, 2, 1])).toBeTruthy()
    expect(checkSledJump([0, 1000, 1])).toBeTruthy()
    expect(checkSledJump([6, 7, 8, 9, 4, 3, 2, 1])).toBeTruthy()
  })
})
