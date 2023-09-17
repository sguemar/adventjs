import { describe, expect, it } from 'vitest'
import checkIsSameTree from './challenge24'

describe('Can you reconfigure factories to keep creating gifts?', () => {
  it('should be a function', () => {
    expect(typeof checkIsSameTree).toBe('function')
  })

  it('should return false if root value is different on both trees of level 1', () => {
    const treeA = { value: 1 }
    const treeB = { value: 2 }

    expect(checkIsSameTree(treeA, treeB)).toBe(false)
  })

  it('should return true if root value is the same on both trees of level 1', () => {
    const treeA = { value: 1 }
    const treeB = { value: 1 }

    expect(checkIsSameTree(treeA, treeB)).toBe(true)
  })

  it('should return false if some branch value is different', () => {
    const treeA = { value: 1, left: { value: 2 } }
    const treeB = { value: 1, left: { value: 3 } }

    expect(checkIsSameTree(treeA, treeB)).toBe(false)

    const treeC = { value: 5, right: { value: 15 } }
    const treeD = { value: 5, right: { value: 3 } }

    expect(checkIsSameTree(treeC, treeD)).toBe(false)

    const treeE = { value: 4, left: { value: 2 }, right: { value: 42 } }
    const treeF = { value: 4, left: { value: 2 }, right: { value: 87 } }

    expect(checkIsSameTree(treeE, treeF)).toBe(false)
  })

  it('should return false if trees are asymmetrical', () => {
    const treeA = { value: 1, left: { value: 2 } }
    const treeB = { value: 1 }

    expect(checkIsSameTree(treeA, treeB)).toBe(false)

    const treeC = { value: 5, left: { value: 15, left: { value: 2 } } }
    const treeD = { value: 5, right: { value: 3 } }

    expect(checkIsSameTree(treeC, treeD)).toBe(false)

    const treeE = { value: 1, left: { value: 2 }, right: { value: 3, right: { value: 5 } } }
    const treeF = { value: 1, left: { value: 2 }, right: { value: 3 } }

    expect(checkIsSameTree(treeE, treeF)).toBe(false)
  })
})
