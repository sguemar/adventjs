export default function listGifts (letter) {
  if (!letter) return {}

  letter = letter.trim().replace(/\s+/g, ' ')
  if (letter.length === 0) return {}

  const gifts = {}
  const words = letter
    .split(' ')
    .filter(word => !word.startsWith('_'))

  words.forEach(word => {
    gifts[word] = gifts[word]
      ? gifts[word] + 1
      : 1
  })

  return gifts
}
