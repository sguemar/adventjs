import { describe, expect, it } from 'vitest'
import countPackages from './challenge17'

describe('The madness of sending parcels this season', () => {
  it('should be a function', () => {
    expect(typeof countPackages).toBe('function')
  })

  it('should return the number of parcels that only one person can handle', () => {
    expect(countPackages([['lolivier', 8, []]], 'lolivier')).toBe(8)
    expect(countPackages([['camila', 5, []]], 'camila')).toBe(5)
    expect(countPackages([['jesuspoleo', 4, []]], 'jesuspoleo')).toBe(4)
  })

  it('should return the number of parcels the carrier and his direct subordinates can handle', () => {
    const carriers = [
      ['dapelu', 5, ['midu', 'jelowing']],
      ['midu', 2, []],
      ['jelowing', 2, []]
    ]

    expect(countPackages(carriers, 'dapelu')).toBe(9)
  })

  it('should return the number of parcels the carrier and all his direct and indirect subordinates can handle', () => {
    const carriers = [
      ['lolivier', 8, ['camila', 'jesuspoleo']],
      ['camila', 5, ['sergiomartinez', 'conchaasensio']],
      ['jesuspoleo', 4, []],
      ['sergiomartinez', 4, []],
      ['conchaasensio', 3, ['facundocapua', 'faviola']],
      ['facundocapua', 2, []],
      ['faviola', 1, []]
    ]

    expect(countPackages(carriers, 'camila')).toBe(15)
  })
})
