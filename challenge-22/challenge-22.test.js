import { describe, expect, it } from 'vitest'
import countDecorations from './challenge-22'
import { asymmetricTreeWith17Decorations, asymmetricTreeWith28Decorations, threeLevelTreeWith17Decorations, threeLevelTreeWith40Decorations } from '../fixtures/challenge-22'

describe('How many ornaments does the tree need?', () => {
  it('should be a function', () => {
    expect(typeof countDecorations).toBe('function')
  })

  it('should return the number of decorations of a one level tree', () => {
    const oneLevelTree = { value: 1, left: null, right: null }
    expect(countDecorations(oneLevelTree)).toBe(1)
  })

  it('should return the number of decorations of a two level tree', () => {
    expect(countDecorations({
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null }
    })).toBe(6)
    expect(countDecorations({
      value: 1,
      left: { value: 1, left: null, right: null },
      right: { value: 1, left: null, right: null }
    })).toBe(3)
    expect(countDecorations({
      value: 1,
      left: { value: 5, left: null, right: null },
      right: { value: 4, left: null, right: null }
    })).toBe(10)
  })

  it('should return the number of decorations of a three level tree', () => {
    expect(countDecorations(threeLevelTreeWith17Decorations)).toBe(17)
    expect(countDecorations(threeLevelTreeWith40Decorations)).toBe(40)
  })

  it('should return the number of decorations of an asymmetric tree', () => {
    expect(countDecorations(asymmetricTreeWith28Decorations)).toBe(28)
    expect(countDecorations(asymmetricTreeWith17Decorations)).toBe(17)
  })
})
