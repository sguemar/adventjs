# In Santa's workshop 🎅 the electric engine sleds are being prepared in order to make the perfect route for dropping off presents.

**The route starts at point 0 and from there it goes to the right in a straight line**

The Keanu Relfes 🧝 has prepared us a list of obstacles to avoid. The problem is that he has given us **the list of obstacles positions out of order**... 😅 although at least never **position 0 can have an obstacle**.

On top of that, the sled can only be set to jump a fixed number of positions...😱

We need a function that tells us the minimum jump length of the sled to go avoiding all obstacles on the route.

```JavaScript
const obstacles = [5, 3, 6, 7, 9]
getMinJump(obstacles) // -> 4

// J is jump, X is obstacle
/* This is how the representation would look like:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
J-----------J-----------J-------
*/

const obstacles = [2, 4, 6, 8, 10]
getMinJump(obstacles) // -> 7

/* This is how the representation would look like:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
J--------------------J---------

// Jump lengths:
// 1 would fell at 2
// 2 would fell at 2
// 3 would fell at 6
// 4 would fell at 4
// 5 would fell at 10
// 6 would fell at 6
// 7 is the ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
*/
```

The difficulty of the challenge is to think that we can only set the sled jump once and that we are looking for the minimum jump that would serve us to avoid all the obstacles.