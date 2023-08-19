export default function decodeNumber (symbols) {
  const SYMBOLS_VALUES = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  }

  const firstSymbolValue = SYMBOLS_VALUES[symbols.charAt(0)]
  if (!firstSymbolValue) return NaN

  let number = 0
  for (let i = 0; i < symbols.length - 1; i++) {
    const nextSymbolValue = SYMBOLS_VALUES[symbols.charAt(i + 1)]
    if (!nextSymbolValue) return NaN
    const currentSymbolValue = SYMBOLS_VALUES[symbols.charAt(i)]
    nextSymbolValue <= currentSymbolValue
      ? number += currentSymbolValue
      : number -= currentSymbolValue
  }

  const lastSymbolValue = SYMBOLS_VALUES[symbols.charAt(symbols.length - 1)]
  return number + lastSymbolValue
}
