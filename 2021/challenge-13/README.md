# Wrap gifts with asterisks

There are too many gifts 🎁! And wrapping them is crazy....

Let's create a function that by passing it an array of gifts, it returns another array but where all the gifts have been wrapped with asterisks both on the top and on the sides.

You only have to keep in mind a few things ✌️:

- If the array is empty, return an empty array
- Gifts are emojis 🎁... so keep that in mind when counting their length...
- Luckily, each array position always has the same length...

```JavaScript
wrapGifts(["📷", "⚽️"])
/* Result:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Result:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Result:
[ '****',
  '*📷*',
  '****'
]
*/
```