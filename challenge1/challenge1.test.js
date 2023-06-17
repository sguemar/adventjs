import { describe, expect, it } from 'vitest'
import countSheep from './challenge1'
import { allInvalidSheepList, allSheep, allValidSheepList, amelia, candy, charmin, cinderella, dolly, euge, fannie, noa } from '../fixtures/challenge1'

describe('Counting sheep to sleep', () => {
  it('should be a function', () => {
    expect(typeof countSheep).toBe('function')
  })

  it('should always return an array', () => {
    expect(Array.isArray(countSheep([euge]))).toBeTruthy()
    expect(Array.isArray(countSheep([noa]))).toBeTruthy()
    expect(Array.isArray(countSheep(allInvalidSheepList))).toBeTruthy()
    expect(Array.isArray(countSheep(allValidSheepList))).toBeTruthy()
    expect(Array.isArray(countSheep(allSheep))).toBeTruthy()
  })

  it('should return an empty array passing a red sheep with invalid name', () => {
    expect(countSheep([dolly]).length).toBe(0)
    expect(countSheep([amelia]).length).toBe(0)
  })

  it('should return an empty array passing a sheep with valid name but that is not red', () => {
    expect(countSheep([cinderella]).length).toBe(0)
    expect(countSheep([charmin]).length).toBe(0)
  })

  it('should return the only valid sheep passed', () => {
    let sheep = countSheep([noa])
    expect(sheep.length).toBe(1)
    expect(sheep[0]).toEqual(noa)

    sheep = countSheep([fannie])
    expect(sheep.length).toBe(1)
    expect(sheep[0]).toEqual(fannie)

    sheep = countSheep([candy])
    expect(sheep.length).toBe(1)
    expect(sheep[0]).toEqual(candy)
  })

  it('should return all sheep valid', () => {
    let sheep = countSheep(allInvalidSheepList)
    expect(sheep.length).toBe(0)

    sheep = countSheep(allValidSheepList)
    expect(sheep.length).toBe(3)
    expect(sheep).toEqual(allValidSheepList)

    sheep = countSheep(allSheep)
    expect(sheep.length).toBe(3)
    expect(sheep).toEqual(allValidSheepList)
  })
})
