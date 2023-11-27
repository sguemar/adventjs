export default function missingReindeer (ids) {
  if (ids.length === 1) return 1 - ids[0]
  ids.sort((a, b) => a - b)

  let missingIds = [...ids]
  while (missingIds.length > 2) {
    const half = Math.floor(missingIds.length / 2)
    missingIds[half] - missingIds[0] === half
      ? missingIds = missingIds.slice(half)
      : missingIds = missingIds.slice(0, half)
  }

  const maxId = missingIds[1]
  const minId = missingIds[0]
  return maxId - minId === 1 ? maxId + 1 : minId + 1
}
