import { describe, expect, it } from 'vitest'
import fixFiles from './challenge18'

describe("Santa's operating system", () => {
  it('should be a function', () => {
    expect(typeof fixFiles).toBe('function')
  })

  it('should return the same file names if no one is repeated', () => {
    expect(fixFiles(['photo'])).toEqual(['photo'])
    expect(fixFiles(['file'])).toEqual(['file'])
    expect(fixFiles(['game'])).toEqual(['game'])
    expect(fixFiles(['photo', 'file', 'game'])).toEqual(['photo', 'file', 'game'])
  })

  it('should return the repeated file with (1) at the end', () => {
    expect(fixFiles(['photo', 'photo'])).toEqual(['photo', 'photo(1)'])
    expect(fixFiles(['file', 'file'])).toEqual(['file', 'file(1)'])
    expect(fixFiles(['game', 'game'])).toEqual(['game', 'game(1)'])
  })

  it('should return the repeated file with the correct number at the end', () => {
    expect(fixFiles(['photo', 'photo', 'photo'])).toEqual(['photo', 'photo(1)', 'photo(2)'])
    expect(fixFiles(['file', 'file', 'file'])).toEqual(['file', 'file(1)', 'file(2)'])
    expect(fixFiles(['game', 'game', 'game'])).toEqual(['game', 'game(1)', 'game(2)'])
    expect(fixFiles(['photo', 'postcard', 'photo', 'photo', 'video'])).toEqual(['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'])
    expect(fixFiles(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'])).toEqual(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)'])
  })
})
