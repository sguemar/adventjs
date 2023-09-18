export default function canMouseEat (direction, room) {
  for (let i = 0; i < room.length; i++) {
    for (let j = 0; j < room[i].length; j++) {
      if (room[i][j] !== 'm') continue
      if (direction === 'right') {
        if (room[i][j + 1] === '*') return true
      }
      if (direction === 'left') {
        if (room[i][j - 1] === '*') return true
      }
      if (direction === 'up') {
        if (room[i - 1]?.[j] === '*') return true
      }
      if (direction === 'down') {
        if (room[i + 1]?.[j] === '*') return true
      }
    }
  }
  return false
}
