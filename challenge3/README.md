# The Grinch wants to spoil Christmas!

The Grinch is opening the letters that were going to Santa Claus and leaving them in a mess. 😱

Letters are a string of text including presents and parentheses `()`.

To know if a letter is valid ✅, you must check that the parentheses close correctly and that they are not empty.

But, beware! Because the Grinch has left braces `{` and square brackets `[` inside the parentheses that makes them invalid. Luckily he has only left them in the middle of the parenthesis...

Examples:

```text
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
```

Create a function that, by passing the text of the letter, returns true if it is valid and false if it is not. And put an end to the Grinch's mischief!
