export default function canMouseEat (direction, room) {
  const MOUSE = 'm'
  const FOOD = '*'

  const MOVES = {
    right: (i, j) => room[i][j + 1],
    left: (i, j) => room[i][j - 1],
    up: (i, j) => room[i - 1]?.[j],
    down: (i, j) => room[i + 1]?.[j]
  }

  for (let i = 0; i < room.length; i++) {
    for (let j = 0; j < room[i].length; j++) {
      if (room[i][j] !== MOUSE) continue
      return MOVES[direction](i, j) === FOOD
    }
  }
}
