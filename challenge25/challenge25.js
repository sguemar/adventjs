export default function canMouseEat (direction, room) {
  for (let i = 0; i < room.length; i++) {
    for (let j = 0; j < room[i].length; j++) {
      if (direction === 'right') {
        if (room[i][j] === 'm' && room[i][j + 1] === '*') return true
      }
      if (direction === 'left') {
        if (room[i][j] === 'm' && room[i][j - 1] === '*') return true
      }
      if (direction === 'up') {
        if (room[i][j] === 'm' && room[i - 1]?.[j] === '*') return true
      }
      if (direction === 'down') {
        if (room[i][j] === 'm' && room[i + 1]?.[j] === '*') return true
      }
    }
  }
  return false
}
