export default function checkSledJump (heights) {
  let highestPointReached = false

  for (let i = 1; i < heights.length; i++) {
    const prevHeight = heights[i - 1]
    const currentHeight = heights[i]
    if (highestPointReached && prevHeight <= currentHeight) return false
    else {
      if (prevHeight === currentHeight) return false
      if (prevHeight > currentHeight) highestPointReached = true
    }
  }

  return highestPointReached
}
