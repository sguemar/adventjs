# The cryptocurrency craze

Investing in cryptocurrencies is almost a risky sport. The other day Bitmart was hacked and has caused the value of Bitcoin, and other currencies, to drop by 25%.

We are going to write a function that receives the price list of a cryptocurrency in a day and we should return the maximum profit we could make if we buy and sell the investment on the same day.

The price list is an array of numbers and represents time from left to right. So keep in mind that **you cannot buy at a price that is to the right of the sell and you cannot sell at a price that is to the left of the buy**.

For example:

```JavaScript
const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (buy to 18, sell to 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (buy to 10, sell to 70)
```

**If no profit can be made that day**, we have to return -1 to prevent us from doing something crazy:

```JavaScript
const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge) = // -> -1 (no profit possible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) = // -> -1 (no profit possible)
```