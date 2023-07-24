const OPEN_PARENTHESES = '('
const CLOSE_PARENTHESES = ')'

export const isValid = (letter) => {
  let parenthesesCount = 0
  let currentChar = ''

  for (let i = 0; i < letter.length; i++) {
    currentChar = letter[i]
    if (currentChar === OPEN_PARENTHESES) parenthesesCount++
    if (currentChar === CLOSE_PARENTHESES) parenthesesCount--
    if (parenthesesCount < 0) return false
  }

  return parenthesesCount === 0
}
