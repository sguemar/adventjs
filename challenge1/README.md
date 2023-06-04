# Challenge 1: Counting sheep to sleep

Look at a list/array of sheep. Each sheep has a name and a color. Write a function that returns a list of all sheep with the color `rojo` and whose name contains both the letters `n` AND `a`, regardless of order, capitalization or spaces.

For example, if we have the following sheeps:

```javascript
const sheeps = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]
```

After running the function, it should return:

```javascript
const filteredSheeps = countSheeps(sheeps)

console.log(filteredSheeps)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```

Remember. The name must contain both the letters 'a' and 'n'. Do not count sheep that only have one of the letters, it must have both.