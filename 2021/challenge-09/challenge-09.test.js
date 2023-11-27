import { describe, it, expect } from 'vitest'
import groupBy from './challenge-09'
import { books, booksGroupedByRating, vehicles, vehiclesGroupedByBrand, vehiclesGroupedByColor } from '../fixtures/challenge-09'

describe('Automatically grouping things together', () => {
  it('should be a function', () => {
    expect(typeof groupBy).toBe('function')
  })

  it('should group by length', () => {
    expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({ 3: ['one', 'two'], 5: ['three'] })
    expect(groupBy(['car', 'glasses', 'rocket'], 'length')).toEqual({ 3: ['car'], 6: ['rocket'], 7: ['glasses'] })
    expect(groupBy(['car', 'sun', 'book', 'truck'], 'length')).toEqual({ 3: ['car', 'sun'], 4: ['book'], 5: ['truck'] })
  })

  it('should group by an object property', () => {
    expect(groupBy([{ age: 23 }, { age: 24 }], 'age')).toEqual({ 23: [{ age: 23 }], 24: [{ age: 24 }] })
    expect(groupBy(vehicles, 'color')).toEqual(vehiclesGroupedByColor)
    expect(groupBy(vehicles, 'brand')).toEqual(vehiclesGroupedByBrand)
    expect(groupBy(books, 'rating')).toEqual(booksGroupedByRating)
  })

  it('should group by a function passed by params', () => {
    expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 6: [6.1, 6.3], 4: [4.2] })
    expect(groupBy(
      [1397639141184, 1363223700000],
      timestamp => new Date(timestamp).getFullYear()
    )).toEqual({ 2013: [1363223700000], 2014: [1397639141184] })
  })
})
