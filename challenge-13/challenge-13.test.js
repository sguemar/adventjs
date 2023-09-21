import { describe, expect, it } from 'vitest'
import wrapGifts from './challenge-13'

describe('Wrap gifts with asterisks', () => {
  it('should be a function', () => {
    expect(typeof wrapGifts).toBe('function')
  })

  it('should return an empty array if no gifts passed by params', () => {
    expect(wrapGifts([])).toEqual([])
  })

  it('should wrap gifts with length 1', () => {
    expect(wrapGifts(['📷', '⚽️'])).toEqual(['****', '*📷*', '*⚽️*', '****'])
    expect(wrapGifts(['🚗', '☂️', '🛹'])).toEqual(['****', '*🚗*', '*☂️*', '*🛹*', '****'])
    expect(wrapGifts(['🧸'])).toEqual(['****', '*🧸*', '****'])
  })

  it('should wrap gifts with length 2', () => {
    expect(wrapGifts(['🏈🎸', '🎮🧸'])).toEqual(['******', '*🏈🎸*', '*🎮🧸*', '******'])
  })

  it('should wrap gifts with length 3', () => {
    expect(wrapGifts(['🏈📷🎸', '⚽️🎮🧸'])).toEqual(['********', '*🏈📷🎸*', '*⚽️🎮🧸*', '********'])
  })
})
