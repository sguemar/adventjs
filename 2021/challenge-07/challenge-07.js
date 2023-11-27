export default function contains (store, product) {
  for (const item in store) {
    const value = store[item]
    if (value === product) return true
    if (typeof value === 'object' && contains(value, product)) return true
  }
  return false
}
