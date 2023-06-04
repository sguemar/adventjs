export default function countSheeps (sheeps) {
  return sheeps.filter((sheep) => {
    const lowerCaseName = sheep.name.toLowerCase()
    return (
      sheep.color === 'rojo' &&
      lowerCaseName.includes('n') &&
      lowerCaseName.includes('a')
    )
  })
}
