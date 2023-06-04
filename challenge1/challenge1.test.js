import { describe, expect, it } from 'vitest'
import countSheeps from './challenge1'
import { allInvalidSheepList, allSheeps, allValidSheepList, amelia, candy, charmin, cinderella, dolly, euge, fannie, noa } from '../fixtures/challenge1'

describe('Counting sheep to sleep', () => {
  it('should be a function', () => {
    expect(typeof countSheeps).toBe('function')
  })

  it('should always return an array', () => {
    expect(Array.isArray(countSheeps([euge]))).toBeTruthy()
    expect(Array.isArray(countSheeps([noa]))).toBeTruthy()
    expect(Array.isArray(countSheeps(allInvalidSheepList))).toBeTruthy()
    expect(Array.isArray(countSheeps(allValidSheepList))).toBeTruthy()
    expect(Array.isArray(countSheeps(allSheeps))).toBeTruthy()
  })

  it('should return an empty array passing a red sheep with invalid name', () => {
    expect(countSheeps([dolly]).length).toBe(0)
    expect(countSheeps([amelia]).length).toBe(0)
  })

  it('should return an empty array passing a sheep with valid name but that is not red', () => {
    expect(countSheeps([cinderella]).length).toBe(0)
    expect(countSheeps([charmin]).length).toBe(0)
  })

  it('should return the only valid sheep passed', () => {
    let sheeps = countSheeps([noa])
    expect(sheeps.length).toBe(1)
    expect(sheeps[0]).toEqual(noa)

    sheeps = countSheeps([fannie])
    expect(sheeps.length).toBe(1)
    expect(sheeps[0]).toEqual(fannie)

    sheeps = countSheeps([candy])
    expect(sheeps.length).toBe(1)
    expect(sheeps[0]).toEqual(candy)
  })

  it('should return all sheep valid', () => {
    let sheeps = countSheeps(allInvalidSheepList)
    expect(sheeps.length).toBe(0)

    sheeps = countSheeps(allValidSheepList)
    expect(sheeps.length).toBe(3)
    expect(sheeps).toEqual(allValidSheepList)

    sheeps = countSheeps(allSheeps)
    expect(sheeps.length).toBe(3)
    expect(sheeps).toEqual(allValidSheepList)
  })
})
