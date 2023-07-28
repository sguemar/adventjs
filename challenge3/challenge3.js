const OPEN_PARENTHESES = '('
const CLOSE_PARENTHESES = ')'
const OPEN_BRACKET = '['
const OPEN_BRACE = '{'

export default function isValid (letter) {
  if (letter.includes('()')) return false

  let parenthesesCount = 0
  let currentChar = ''

  for (let i = 0; i < letter.length; i++) {
    currentChar = letter[i]
    if (currentChar === OPEN_BRACE) return false
    if (currentChar === OPEN_BRACKET) return false
    if (currentChar === OPEN_PARENTHESES) parenthesesCount++
    if (currentChar === CLOSE_PARENTHESES) parenthesesCount--
    if (parenthesesCount < 0) return false
  }

  return parenthesesCount === 0
}
