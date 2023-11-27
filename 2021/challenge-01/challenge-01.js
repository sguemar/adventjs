export default function countSheep (sheepList) {
  return sheepList.filter((sheep) => {
    const lowerCaseName = sheep.name.toLowerCase()
    return (
      sheep.color === 'rojo' &&
      lowerCaseName.includes('n') &&
      lowerCaseName.includes('a')
    )
  })
}
