export default function groupBy (collection, it) {
  return collection.reduce((acc, curr) => {
    const property = typeof it === 'function' ? it(curr) : curr[it]
    acc[property]
      ? acc[property].push(curr)
      : acc[property] = [curr]
    return acc
  }, {})
}
