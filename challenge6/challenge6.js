export default function sumPairs (numbers, result) {
  let firstNumber
  for (let i = 0; i < numbers.length - 1; i++) {
    firstNumber = numbers[i]
    for (let j = i + 1; j < numbers.length; j++) {
      const secondNumber = numbers[j]
      if (firstNumber + secondNumber === result) return [firstNumber, secondNumber]
    }
  }
  return null
}
