import { describe, expect, it } from 'vitest'
import shouldBuyFidelity from './challenge11'

describe('', () => {
  it('should be a function', () => {
    expect(typeof shouldBuyFidelity).toBe('function')
  })

  it('should return false if the fidelity card is not worthwhile', () => {
    expect(shouldBuyFidelity(1)).toBeFalsy()
    expect(shouldBuyFidelity(2)).toBeFalsy()
    expect(shouldBuyFidelity(5)).toBeFalsy()
    expect(shouldBuyFidelity(10)).toBeFalsy()
    expect(shouldBuyFidelity(20)).toBeFalsy()
    expect(shouldBuyFidelity(23)).toBeFalsy()
  })

  it('should return true if the fidelity card is worthwhile', () => {
    expect(shouldBuyFidelity(24)).toBeTruthy()
    expect(shouldBuyFidelity(50)).toBeTruthy()
    expect(shouldBuyFidelity(100)).toBeTruthy()
    expect(shouldBuyFidelity(112)).toBeTruthy()
    expect(shouldBuyFidelity(365)).toBeTruthy()
  })
})
