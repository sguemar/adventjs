export default function canReconfigure (from, to) {
  if (from.length !== to.length) return false
  if (new Set(from).size !== new Set(to).size) return false

  const transformations = {}

  for (let index = 0; index < from.length; index++) {
    const fromChar = from[index]
    const toChar = to[index]
    const transformationChar = transformations[fromChar]
    if (transformationChar && transformationChar !== toChar) return false
    transformations[fromChar] = toChar
  }

  return true
}
