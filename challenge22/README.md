# How many ornaments does the tree need?

Ow! Christmas is coming and we haven't decorated the tree yet. 🎄😱

We need a function that by passing a binary tree tells us the number of decorations we need. For this we have an object that would be the representation of the tree and that tells us at each level the number of branches to decorate.

The best thing to do is to see an example:

```JavaScript
// we have the tree as an object
const tree = {
  value: 1, // the root node is always one, because it is the star ⭐
  left: {
    value: 2, // the left node needs two decorations
    left: null, // it has no more branches
    right: null // it has no more branches
  },
  right: {
    value: 3, // the right node needs three decorations
    left: null, // it has no more branches
    right: null // it has no more branches
  }
}

/* Graphically it would look like this:
    1
  /   \
 2     3

1 + 2 + 3 = 6
*/

countDecorations(tree) // 6

const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}

/*
        1
      /   \
     5     6
    /     / \
   7     5   1
  /
 3
*/

countDecorations(bigTree) // 28
```

By the way, Bellf Gates has told me this kind of exercise is very common in job interviews for programmers, did you know that?