import { describe, expect, it } from 'vitest'
import createXmasTree from './challenge-04'

describe("It's time to put up the Christmas tree at home!", () => {
  it('should be a function', () => {
    expect(typeof createXmasTree).toBe('function')
  })

  it('should return only the trunk if the tree height is 0', () => {
    const trunk = `#
#`
    expect(createXmasTree(0)).toBe(trunk)
  })

  it('should return a tree of height 1', () => {
    const treeLevel1 = `*
#
#`
    expect(createXmasTree(1)).toBe(treeLevel1)
  })

  it('should return a tree of height 2', () => {
    const treeLevel2 = `_*_
***
_#_
_#_`
    expect(createXmasTree(2)).toBe(treeLevel2)
  })

  it('should return a tree of height 3', () => {
    const treeLevel3 = `__*__
_***_
*****
__#__
__#__`
    expect(createXmasTree(3)).toBe(treeLevel3)
  })

  it('should return a tree of height 4', () => {
    const treeLevel4 = `___*___
__***__
_*****_
*******
___#___
___#___`
    expect(createXmasTree(4)).toBe(treeLevel4)
  })

  it('should return a tree of height 5', () => {
    const treeLevel5 = `____*____
___***___
__*****__
_*******_
*********
____#____
____#____`
    expect(createXmasTree(5)).toBe(treeLevel5)
  })

  it('should return a tree of height 10', () => {
    const treeLevel10 = `_________*_________
________***________
_______*****_______
______*******______
_____*********_____
____***********____
___*************___
__***************__
_*****************_
*******************
_________#_________
_________#_________`
    expect(createXmasTree(10)).toBe(treeLevel10)
  })
})
