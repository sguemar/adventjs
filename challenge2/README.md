# Challenge 2: Help the elf list the gifts!

You have received a letter ✉️ with all the gifts you must prepare. The issue is that it is a text string and it is very difficult to read 😱. It's a good thing they've separated each gift by space! (although be careful, because as they are children,maybe they have put more spaces than necessary).

On top of that, we noticed that some words come with an underscore `_` in front of the word, for example `_playstation`, which means that *it is crossed out and it does not have to be counted*.

Transform the text to an object containing the name of each gift and the number of times it appears. For example, if we have the following text:

```javascript
const letter = 'bicycle car ball _playstation bicycle car plush'
```

Executing the method should return the following:

```javascript
const gifts = listGifts(letter)

console.log(gifts)

/*
{
  bicycle: 2,
  car: 2,
  ball: 1,
  plush: 1
}
*/
```

Be careful with counting blanks!