import { describe, expect, it } from 'vitest'
import canReconfigure from './challenge-23'

describe('Can you reconfigure factories to keep creating gifts?', () => {
  it('should be a function', () => {
    expect(typeof canReconfigure).toBe('function')
  })

  it('should return false if the gifts do not have the same length', () => {
    expect(canReconfigure('AA', 'BBB')).toBe(false)
    expect(canReconfigure('C', 'AA')).toBe(false)
    expect(canReconfigure('ABC', 'BAEC')).toBe(false)
    expect(canReconfigure('ABC', 'B')).toBe(false)
    expect(canReconfigure('BHXGH', 'ADJ')).toBe(false)
    expect(canReconfigure('ONXE', 'CZ')).toBe(false)
  })

  it('should return false if the gifts provided has different number of unique letters', () => {
    expect(canReconfigure('CON', 'JUU')).toBe(false)
    expect(canReconfigure('MMM', 'MID')).toBe(false)
  })

  it('should return false if strings has different order of transformations', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })

  it('should return true if the transformation can be done', () => {
    expect(canReconfigure('XBOX', 'XOBX')).toBe(true)
    expect(canReconfigure('BAL', 'LIB')).toBe(true)
  })
})
