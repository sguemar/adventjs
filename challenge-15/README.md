# The perfect jump

We are making the final adjustments to Santa's sleigh!

As you know, the sleigh can fly and we are adjusting the engine so that it makes the best possible parabolas. For this, the jump must always be upwards and, from the highest point, it must always go downwards...

Our trusted mechanic, Kiko Belfs, who has a great Tesla, has explained to us that the jumps can be seen as arrays... and that we only have to make sure that **the numbers go up and down correctly**. He also warns us that we will only pass **arrays of, at least, three positions**.

He has passed us some examples of what our function should look like and some results:

```JavaScript
checkSledJump([1, 2, 3, 2, 1]) // true: raises and lowers strictly.
checkSledJump([0, 1, 0]) // -> true: raises and lowers strictly.
checkSledJump([0, 3, 2, 1]) // -> true: raises and lowers strictly.
checkSledJump([0, 1000, 1]) // -> true: raises and lowers strictly.

checkSledJump([2, 4, 4, 6, 2]) // false: it doesn't go up strictly
checkSledJump([1, 2, 3]) // false: it only goes up
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: it goes up and down and up... it is not valid!
```

The important thing: go through the array from left to right to see that the ascent is always strict, detect the highest point and then see that the descent is strict downwards...