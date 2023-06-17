import { describe, expect, it } from 'vitest'
import listGifts from './challenge2'

describe('Help the elf list the gifts!', () => {
  it('should be a function', () => {
    expect(typeof listGifts).toBe('function')
  })

  it('should return an object', () => {
    const gifts = listGifts()
    expect(typeof gifts).toBe('object')
    expect(Array.isArray(gifts)).toBeFalsy()
  })

  it('should return an empty object if no gift have been passed', () => {
    expect(Object.keys(listGifts()).length).toBe(0)
    expect(Object.keys(listGifts('')).length).toBe(0)
    expect(Object.keys(listGifts(' ')).length).toBe(0)
    expect(Object.keys(listGifts('        ')).length).toBe(0)
  })

  it('should return one bicycle', () => {
    let gifts = listGifts('bicycle')

    expect(Object.keys(gifts).length).toBe(1)
    expect(gifts.bicycle).toBe(1)

    gifts = listGifts(' bicycle')

    expect(Object.keys(gifts).length).toBe(1)
    expect(gifts.bicycle).toBe(1)

    gifts = listGifts('bicycle ')

    expect(Object.keys(gifts).length).toBe(1)
    expect(gifts.bicycle).toBe(1)

    gifts = listGifts('    bicycle  ')

    expect(Object.keys(gifts).length).toBe(1)
    expect(gifts.bicycle).toBe(1)
  })

  it('should return one car', () => {
    let gifts = listGifts('car')

    expect(Object.keys(gifts).length).toBe(1)
    expect(gifts.car).toBe(1)

    gifts = listGifts(' car')

    expect(Object.keys(gifts).length).toBe(1)
    expect(gifts.car).toBe(1)

    gifts = listGifts('car ')

    expect(Object.keys(gifts).length).toBe(1)
    expect(gifts.car).toBe(1)

    gifts = listGifts('  car    ')

    expect(Object.keys(gifts).length).toBe(1)
    expect(gifts.car).toBe(1)
  })

  it('should return two bicycles', () => {
    let gifts = listGifts('bicycle bicycle')

    expect(Object.keys(gifts).length).toBe(1)
    expect(gifts.bicycle).toBe(2)

    gifts = listGifts('bicycle     bicycle')

    expect(Object.keys(gifts).length).toBe(1)
    expect(gifts.bicycle).toBe(2)
  })

  it('should return three cars', () => {
    let gifts = listGifts('car car car')

    expect(Object.keys(gifts).length).toBe(1)
    expect(gifts.car).toBe(3)

    gifts = listGifts('   car   car  car   ')

    expect(Object.keys(gifts).length).toBe(1)
    expect(gifts.car).toBe(3)
  })

  it('should return one car and one bicycle', () => {
    const gifts = listGifts('car bicycle')

    expect(Object.keys(gifts).length).toBe(2)
    expect(gifts.car).toBe(1)
    expect(gifts.bicycle).toBe(1)
  })

  it('should return two cars and one bicycle', () => {
    const gifts = listGifts('car bicycle car')

    expect(Object.keys(gifts).length).toBe(2)
    expect(gifts.car).toBe(2)
    expect(gifts.bicycle).toBe(1)
  })

  it('should return one car, one bicycle and one playstation', () => {
    const gifts = listGifts('car bicycle playstation')

    expect(Object.keys(gifts).length).toBe(3)
    expect(gifts.car).toBe(1)
    expect(gifts.bicycle).toBe(1)
    expect(gifts.playstation).toBe(1)
  })

  it('should not return any gift if there are all crossed out', () => {
    let gifts = listGifts('_car')

    expect(Object.keys(gifts).length).toBe(0)
    expect(gifts._car).toBeUndefined()
    expect(gifts.car).toBeUndefined()

    gifts = listGifts('_bicycle')

    expect(Object.keys(gifts).length).toBe(0)
    expect(gifts._bicycle).toBeUndefined()
    expect(gifts.bicycle).toBeUndefined()

    gifts = listGifts('_car _car _car')

    expect(Object.keys(gifts).length).toBe(0)
    expect(gifts._car).toBeUndefined()
    expect(gifts.car).toBeUndefined()

    gifts = listGifts('_cat  _playstation   _bicycle _playstation  ')

    expect(Object.keys(gifts).length).toBe(0)
    expect(gifts._car).toBeUndefined()
    expect(gifts.car).toBeUndefined()
    expect(gifts._cat).toBeUndefined()
    expect(gifts.cat).toBeUndefined()
    expect(gifts._playstation).toBeUndefined()
    expect(gifts.playstation).toBeUndefined()
  })

  it('should return all valid gifts and their count', () => {
    const gifts = listGifts('ball  car phone  playstation _pet ball _car ')

    expect(Object.keys(gifts).length).toBe(4)
    expect(gifts.ball).toBe(2)
    expect(gifts.car).toBe(1)
    expect(gifts.phone).toBe(1)
    expect(gifts.playstation).toBe(1)
    expect(gifts._pet).toBeUndefined()
    expect(gifts.pet).toBeUndefined()
    expect(gifts._car).toBeUndefined()
  })
})
