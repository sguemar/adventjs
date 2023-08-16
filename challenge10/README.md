# The change machine

To improve the productivity of the store where we work, we are going to create a small machine that calculates the minimum number of coins we must use to give change for a cash purchase.

The coins for change that you can use are these:

```
coins[0] = 1 cent
coins[1] = 2 cents
coins[2] = 5 cents
coins[3] = 10 cents
coins[4] = 20 cents
coins[5] = 50 cents
```

We have to create a function that receives the number of cents to return to the client and the function gives us an array with the **minimum combination of coins that we must use to get it**.

```JavaScript
getCoins(51) // [1, 0, 0, 0, 0, 1] -> one 1 cent coin and one 50 cent coin
getCoins(3) // [1, 1, 0, 0, 0, 0] -> one 1-cent coin and one 2-cent coin
getCoins(5) // [0, 0, 1, 0, 0, 0] -> one 5 cent coin
getCoins(16) // [1, 0, 1, 1, 0, 0] -> one 1 cent coin, one 5 cent coin and one 10 cent coin
getCoins(100) // [0, 0, 0, 0, 0, 2] -> two 50 cent coins
```

The difficulty of the challenge lies in knowing how to correctly use a structure that allows you to know the coins you have available to create the array with the return, since **you must always use as few coins as possible**. Good luck 👩‍💻👨‍💻!