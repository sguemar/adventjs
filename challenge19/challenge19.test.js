import { describe, expect, it } from 'vitest'
import learn from './challenge19'

describe('What should we learn at Platzi?', () => {
  it('should be a function', () => {
    expect(typeof learn).toBe('function')
  })

  it("should return null if we don't have enough time available", () => {
    expect(learn(4, [10, 14, 20])).toBeNull()
    expect(learn(5, [5, 5, 5])).toBeNull()
  })

  it('should return the indexes of the only two possible courses', () => {
    expect(learn(10, [1, 9, 20, 22, 15, 11])).toEqual([0, 1])
    expect(learn(5, [6, 10, 2, 50, 20, 3])).toEqual([2, 5])
    expect(learn(7, [3, 9, 4, 7, 7, 7])).toEqual([0, 2])
  })

  it('should return the course indexes even if they do not add up to the time available', () => {
    expect(learn(15, [2, 10, 4, 1])).toEqual([1, 2])
    expect(learn(8, [8, 2, 1])).toEqual([1, 2])
    expect(learn(3, [1, 1, 5])).toEqual([0, 1])
    expect(learn(9, [43, 23, 6, 3, 99])).toEqual([2, 3])
  })

  it('should return the indexes of the first two courses that sum the maximum time', () => {
    expect(learn(25, [10, 15, 20, 5])).toEqual([0, 1])
    expect(learn(10, [85, 5, 5, 3, 7])).toEqual([1, 2])
    expect(learn(5, [6, 6, 5, 2, 3, 9, 10, 1, 4])).toEqual([3, 4])
  })
})
