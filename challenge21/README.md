# The route with gifts

The routes for Santa's sleigh are being prepared 🎅. We have warehouses all over the world so Santa can pick up the gifts and deliver them to the final destination. 🎁

We need to know if the routes we are creating make sense or if Santa is going to have to drop presents along the way. 🥺

For that we are going to create a function that receives two parameters:

- A number with the **maximum capacity of presents in the sleigh**.
- The trip which is an array of arrays. Each subarray contains three numbers representing:
  - `trip[0]` = number of gifts to be transported
  - `trip[1]` = pick-up point for the gifts
  - `trip[2]` = drop-off point of the gifts

The route always goes from left to right (Santa will never go backwards), but... keep in mind that in the middle of the route he may have to pick up presents when he already has some on him!

The best thing to do is to see an example:

```JavaScript
canCarry(4, [[2, 5, 8], [3, 6, 10]]) // false
// At point 5 it picks up 2 gifts...
// In point 6 it collects 3 gifts...
// From point 6 to 8 it would have 5 gifts in total....
// And its capacity is 4... so it couldn't!

canCarry(3, [[1, 1, 5], [2, 2, 10]]) // true
// At point 1 it picks up 1 gift....
// At point 2 pick up 2 gifts....
// At point 5 it delivers 1 gift...
// At point 10 deliver 2 gifts...
// Yes you can! Never exceeded the maximum load of 3 gifts

canCarry(3, [[2, 1, 5],[3, 5, 7]]) // true -> never exceeds maximum capacity
canCarry(4, [[2, 3, 8],[2, 5, 7]]) // true -> from point 5 to 7 carries 4 gifts and does not exceed maximum capacity

canCarry(1, [[2, 3, 3, 8]]) // false -> could not even make the first trip
canCarry(2, [[1, 2, 4], [2, 3, 8]]) // false -> from point 3 to 4 exceeds the maximum capacity because it would carry 3 gifts
```

What is difficult, and important, is that you understand that Santa Claus **is delivering and collecting gifts and that sometimes that can cause him to exceed the maximum load**.

