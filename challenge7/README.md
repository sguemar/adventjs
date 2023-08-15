# Searching in the warehouse

My friend Dani is working in a store and with the arrival of Christmas he has the warehouse in a mess and he can not find anything.

We are going to create a `contains` function that receives two parameters: an object that defines the store and the product we are looking for.

The function must return a boolean indicates if the string is found as a value at some level of the object. Let's see some examples:

```JavaScript
const warehouse = {
  'shelves1': {
    'drawer1': {
      'product1': 'coca-cola',
      'product2': 'fanta',
      'product3': 'sprite'
    }
  },
  'shelves2': {
    'drawer1': 'empty',
    'drawer2': {
      'product1': 'pants',
      'product2': 'T-shirt' // <- It's here!
    }
  }
}
            
contains(warehouse, 'T-shirt') // true

const otherWarehouse = {
  'trunk': {
    'bottom': {
      'object': 'cd-rom',
      'other-object': 'diskette',
      'other-thing': 'remote control'
    }
  }
}
  
contains(otherWarehouse, 'gameboy') // false
```

Note that the store is huge. It has different warehouses and, as you have seen in the examples, each one can have different organizations. **The important thing to look for is that the product is in the warehouses**.
