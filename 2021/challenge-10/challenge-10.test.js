import { describe, expect, it } from 'vitest'
import getCoins from './challenge-10'

describe('The change machine', () => {
  it('should be a function', () => {
    expect(typeof getCoins).toBe('function')
  })

  it('should return only one coin', () => {
    expect(getCoins(1)).toEqual([1, 0, 0, 0, 0, 0])
    expect(getCoins(2)).toEqual([0, 1, 0, 0, 0, 0])
    expect(getCoins(5)).toEqual([0, 0, 1, 0, 0, 0])
    expect(getCoins(10)).toEqual([0, 0, 0, 1, 0, 0])
    expect(getCoins(20)).toEqual([0, 0, 0, 0, 1, 0])
    expect(getCoins(50)).toEqual([0, 0, 0, 0, 0, 1])
  })

  it('should return one coin twice', () => {
    expect(getCoins(4)).toEqual([0, 2, 0, 0, 0, 0])
    expect(getCoins(40)).toEqual([0, 0, 0, 0, 2, 0])
    expect(getCoins(100)).toEqual([0, 0, 0, 0, 0, 2])
  })

  it('should return the minimum number of coins', () => {
    expect(getCoins(51)).toEqual([1, 0, 0, 0, 0, 1])
    expect(getCoins(3)).toEqual([1, 1, 0, 0, 0, 0])
    expect(getCoins(16)).toEqual([1, 0, 1, 1, 0, 0])
    expect(getCoins(78)).toEqual([1, 1, 1, 0, 1, 1])
    expect(getCoins(100)).toEqual([0, 0, 0, 0, 0, 2])
    expect(getCoins(111)).toEqual([1, 0, 0, 1, 0, 2])
    expect(getCoins(266)).toEqual([1, 0, 1, 1, 0, 5])
  })
})
