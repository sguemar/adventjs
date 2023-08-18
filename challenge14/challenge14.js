export default function missingReindeer (ids) {
  ids.sort((a, b) => a - b)
  const maxId = ids[ids.length - 1]
  for (let i = 0; i <= maxId; i++) {
    if (i !== ids[i]) return i
  }
  return maxId + 1
}
