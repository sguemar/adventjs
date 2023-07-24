const OPEN_PARENTHESES = '('
const CLOSE_PARENTHESES = ')'

export const isValid = (letter) => {
  let openParenthesesCount = 0
  let closeParenthesesCount = 0
  let currentChar = ''

  for (let i = 0; i < letter.length; i++) {
    currentChar = letter[i]
    if (currentChar === OPEN_PARENTHESES) openParenthesesCount++
    if (currentChar === CLOSE_PARENTHESES) closeParenthesesCount++
  }

  return !((openParenthesesCount + closeParenthesesCount) % 2 === 1)
}
