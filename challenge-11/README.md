# Is the movie theater fidelity card worth?

This December there are super interesting movies at the movie theater... and I have to optimize how I spend my money.

My favorite movie theater has two possibilities:

- Single-use ticket: It cost 12$ for each movie.
- Fidelity card: It costs $250 but each time you go **you pay only 75% of the ticket price**. The best part is that it accumulates! And each time you go, you pay 75% of the ticket price you paid last time.

Example of each when buying 3 tickets and the price you would pay in total:

```
// Regular ticket: $12 * 3 = $36
// Fidelity card: $250 + ($12 * 0,75) + ($12 * 0,75 * 0,75) + ($12 * 0,75 * 0,75 * 0,75) = $270,8125
```

I need a function that, when I pass it the times I'm going to the movie theater, tells me if the fidelity card is worth buying or not.

```JavaScript
shouldBuyFidelity(1) // false -> It's better to buy one-use tickets
shouldBuyFidelity(100) // true -> It's better to buy the fidelity card
```

The difficulty of the challenge lies in finding a simple formula that tells us the cumulative discounted price for the fidelity card. 😜