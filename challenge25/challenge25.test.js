import { describe, expect, it } from 'vitest'
import canMouseEat from './challenge25'

describe('The last game and see you next year!', () => {
  it('should be a function', () => {
    expect(typeof canMouseEat).toBe('function')
  })

  it('should return false if the food is not to the right of the mouse and is passed right as move', () => {
    const room = [
      ['*', 'm', ' ']
    ]
    expect(canMouseEat('right', room)).toBe(false)
    const room2 = [
      ['*', ' ', 'm']
    ]
    expect(canMouseEat('right', room2)).toBe(false)
  })

  it('should return true if the food is to the right of the mouse and is passed right as move', () => {
    const room = [
      [' ', 'm', '*']
    ]
    expect(canMouseEat('right', room)).toBe(true)
  })

  it('should return false if the food is not to the left of the mouse and is passed left as move', () => {
    const room = [
      [' ', 'm', '*']
    ]
    expect(canMouseEat('left', room)).toBe(false)
    const room2 = [
      ['m', ' ', '*']
    ]
    expect(canMouseEat('left', room2)).toBe(false)
  })

  it('should return true if the food is to the left of the mouse and is passed left as move', () => {
    const room = [
      ['*', 'm', ' ']
    ]
    expect(canMouseEat('left', room)).toBe(true)
  })

  it('should return true if the food is on top of the mouse and is passed up as move', () => {
    const room = [
      ['*', ' ', ' '],
      ['m', ' ', ' ']
    ]
    expect(canMouseEat('up', room)).toBe(true)
  })

  it('should return false if the food is not on top of the mouse and is passed up as move', () => {
    const room = [
      [' ', 'm', '*']
    ]
    expect(canMouseEat('up', room)).toBe(false)

    const room2 = [
      ['*', ' ', ' '],
      [' ', 'm', ' ']
    ]
    expect(canMouseEat('up', room2)).toBe(false)
  })

  it('should return true if the food is under of the mouse and is passed down as move', () => {
    const room = [
      [' ', ' ', 'm'],
      [' ', ' ', '*']
    ]
    expect(canMouseEat('down', room)).toBe(true)
  })

  it('should return false if the food is not under of the mouse and is passed down as move', () => {
    const room = [
      ['*', 'm', ' ']
    ]
    expect(canMouseEat('down', room)).toBe(false)

    const room2 = [
      ['*', ' ', ' '],
      [' ', ' ', 'm']
    ]
    expect(canMouseEat('up', room2)).toBe(false)
  })
})
