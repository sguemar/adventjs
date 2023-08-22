export default function pangram (letter) {
  const ALPHABET_LETTERS = 'abcdefghijklmnopqrstuvwyz'.split('')
  const normalizedLetter = letter.toLowerCase().normalize('NFD').split('')

  return ALPHABET_LETTERS
    .every(char => normalizedLetter.includes(char)) && letter.includes('ñ')
}
