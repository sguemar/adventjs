# It's time to put up the Christmas tree at home! 🎄

To do this we are creating a function that receives the tree height, which will be a positive integer from 1 to at most 100.

If we pass it the argument 5, it would paint this:

```
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```

We create a triangle of asterisks ```*``` with the height provided and, on the sides, we use the underscore ```_``` for spaces. It is very important that our tree always has the same length on each side.

All trees, no matter how small or large, have a trunk of two lines of ```#```.

Another example with a tree of height 3:

```
__*__
_***_
*****
__#__
__#__
```

Note that the tree is a string and you need the line breaks for each line to form the tree properly.



