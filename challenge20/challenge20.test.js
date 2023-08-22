import { describe, expect, it } from 'vitest'
import pangram from './challenge20'

describe('A pangram letter? What!', () => {
  it('should be a function', () => {
    expect(typeof pangram).toBe('function')
  })

  it('should return false if the letter is not a pangram', () => {
    expect(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')).toBeFalsy()
    expect(pangram('Esta es mi carta para Papá Noel')).toBeFalsy()
    expect(pangram('Esta oración no tiene todas la letras del alfabeto')).toBeFalsy()
  })

  it('should return true if the letter is a pangram', () => {
    expect(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')).toBeTruthy()
    expect(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')).toBeTruthy()
    expect(pangram('Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol.')).toBeTruthy()
  })
})
