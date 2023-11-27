export default function createXmasTree (height) {
  const WOOD = '#'
  if (height === 0) return `${WOOD}\n${WOOD}`

  const LEAF = '*'
  if (height === 1) return `${LEAF}\n${WOOD}\n${WOOD}`

  const SPACE = '_'
  const maxWidth = (height * 2) - 1
  let sideSpaces = SPACE.repeat(maxWidth / 2)
  let tree = `${sideSpaces}${WOOD}${sideSpaces}\n${sideSpaces}${WOOD}${sideSpaces}`
  let leafs = LEAF.repeat(maxWidth)

  sideSpaces = ''
  for (let level = height; level > 0; level--) {
    tree = `${sideSpaces}${leafs}${sideSpaces}\n${tree}`
    leafs = leafs.slice(0, leafs.length - 2)
    sideSpaces += SPACE
  }

  return tree
}
