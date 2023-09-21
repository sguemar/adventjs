# Can you reconfigure factories to keep creating gifts?

We're in Santa's factory 🎅 creating gifts like there's no tomorrow.

We thought we weren't going to make it but **Jelf Bezos** has come up with a genius idea to take advantage of the machines and optimize gift creation to the max. 🎁

The machine configuration is a **string**. We can reconfigure it to make another gift and, to do that, we can change each character to another one.

But **it has limitations** 🥲: when replacing the character the order must be maintained, the same character cannot be assigned to two different letters (but itself) and, of course, the length of the string must be the same.

We need **a function that tells us if we can reconfigure a machine so that it can go from one gift to another according to the above rules**. The best thing to do is to see an example:

```JavaScript
const from = 'BAL'
const to   = 'LIB'
const canReconfigure(from, to) // true
/* the transformation would look like this:
B -> L
A -> I
L -> B
*/

const from = 'CON'
const to   = 'JUU'
const canReconfigure(from, to) // false
/* the transformation cannot be done:
C -> J
O -> U
N -> FAIL
*/

const from = 'XBOX'
const to   = 'XXBO'
const canReconfigure(from, to) // false
/* the transformation cannot be done:
X -> X
B -> X (FAIL, does not keep the transformation order and the B cannot be assigned to the X that was already assigned to another one) 
O -> B
X -> O (FAIL, the X cannot be assigned to the O that was already assigned to the X)
*/

const from = 'XBOX'
const to   = 'XOBX'
const canReconfigure(from, to) // true

const from = 'MMM'
const to   = 'MID'
cons canReconfigure(from, to) // false
/* the transformation cannot be done:
M -> M (OK, assigns the same character to itself)
M -> I (FAIL, assigns the same character to two different letters)
M -> D (FAIL, assigns the same character to two different letters)
*/

const from = 'AA'
const to   = 'MID'
cons canReconfigure(from, to) // false -> it does not have the same length
```