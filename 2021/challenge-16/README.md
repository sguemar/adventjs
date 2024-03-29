# Deciphering the numbers...

Lara Eloft has found some elves remains in a cave, near the Arctic Circle, 8 km north of Rovaniemi.

Now she finds herself deciphering mysterious letters containing information about numbers that can lead her to the next target. 

Lara has a document containing a series of numbers that can be used to decipher them:

```
Symbol        Value
  .             1
  ,             5
  :             10
  ;             50
  !             100
```

Lara has also noticed one thing. **Symbols are subtracted if they are immediately to the left of a larger one**. 😱

We have to create a function that passes us a string of text with symbols and we have to transform it to the correct number. Warning! If you find a symbol that we don't understand, we'd better return a `NaN`:

```JavaScript
decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN
```
