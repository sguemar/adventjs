export default function wrapGifts (gifts) {
  if (gifts.length === 0) return gifts
  const WRAPPER = '*'
  const wrappedGifts = gifts.map(gift => `${WRAPPER}${gift}${WRAPPER}`)
  const lid = WRAPPER.repeat(gifts[0].length + 2)
  return [lid, ...wrappedGifts, lid]
}
