export default function getMinJump (obstacles) {
  const maxPosition = Math.max(...obstacles)
  let sledPosition = 0
  for (let jump = 1; jump <= maxPosition; jump++) {
    sledPosition += jump
    while (sledPosition <= maxPosition) {
      if (obstacles.some(obstacle => obstacle === sledPosition)) break
      sledPosition += jump
    }
    if (sledPosition > maxPosition) return jump
    sledPosition = 0
  }
  return maxPosition + 1
}
