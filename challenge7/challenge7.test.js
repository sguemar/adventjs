import { describe, expect, it } from 'vitest'
import contains from './challenge7'

describe('Searching in the warehouse', () => {
  it('should be a function', () => {
    expect(typeof contains).toBe('function')
  })

  it('should not find anything in an empty warehouse', () => {
    const warehouse = {}

    expect(contains(warehouse, 'pants')).toBe(false)
    expect(contains(warehouse, 'coca-cola')).toBe(false)
    expect(contains(warehouse, 'sprite')).toBe(false)
  })

  it('should find an object on the first level of the warehouse', () => {
    const warehouse = {
      object1: 'T-shirt',
      object2: 'coca-cola',
      object3: 'remote control'
    }

    expect(contains(warehouse, 'T-shirt')).toBe(true)
    expect(contains(warehouse, 'coca-cola')).toBe(true)
    expect(contains(warehouse, 'remote control')).toBe(true)
  })

  it('should not find an object that is not in the warehouse', () => {
    const warehouse = {
      object1: 'T-shirt',
      object2: 'coca-cola',
      object3: 'remote control'
    }

    expect(contains(warehouse, 'Blue Socks')).toBe(false)
    expect(contains(warehouse, 'Carpet')).toBe(false)
    expect(contains(warehouse, 'Umbrella')).toBe(false)
  })

  it('should find an object on the second level of the warehouse', () => {
    const warehouse = {
      object1: 'T-shirt',
      sodas: {
        soda1: 'Coca-Cola',
        soda2: 'Pepsi',
        soda3: 'Sprite'
      },
      object2: 'remote control'
    }

    expect(contains(warehouse, 'Coca-Cola')).toBe(true)
    expect(contains(warehouse, 'Pepsi')).toBe(true)
    expect(contains(warehouse, 'Sprite')).toBe(true)
  })

  it('should find an object at any level of the warehouse', () => {
    const warehouse = {
      shelves1: {
        drawer1: {
          product1: 'Coca-Cola',
          product2: 'Sprite',
          product3: 'Sprite'
        },
        drawer2: {
          hole1: {
            object1: 'Rocket toy',
            object2: 'Glasses'
          },
          hole2: {
            object3: 'Toothbrush',
            object4: 'Comb'
          }
        }
      },
      shelves2: {
        drawer1: 'empty',
        drawer2: {
          product1: 'pants',
          product2: 'T-shirt'
        }
      }
    }

    expect(contains(warehouse, 'T-shirt')).toBe(true)
    expect(contains(warehouse, 'Sprite')).toBe(true)
    expect(contains(warehouse, 'Toothbrush')).toBe(true)
    expect(contains(warehouse, 'Glasses')).toBe(true)
  })
})
