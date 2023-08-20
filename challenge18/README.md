# Santa's operating system

Evelyn Belefzin 👩‍💻 is working on an operating system to be used in Santa's workshop 🎅.

She has noticed that in the workshop nobody pays attention to file names and sometimes they try to save the same file more than once... so it is important that **we manage duplicate names well**.

We have to create **a function that when passing us an array of filenames** we return an array with the same number of elements but where the names that were repeated are appended at the end `(k)` where _k_ would be the number of times it was found repeated.

The best thing to do is to look at an example:

```JavaScript
const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) = ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// be careful that elves already had files with (1)... and they can be repeated!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
```

By the way, they told us that they are Agile and use Scrum. That's why they want to know how long it's going to take to know when they'll be able to use it. That there is a rush. 😝 So [get on Discord and tell us about it](https://discord.com/invite/midudev).