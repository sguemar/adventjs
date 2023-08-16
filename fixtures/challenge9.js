export const vehicles = [
  {
    brand: 'Ferrari',
    wheels: 4,
    color: 'Red'
  },
  {
    brand: 'Mercedes Benz',
    wheels: 4,
    color: 'Gray'
  },
  {
    brand: 'Seat',
    wheels: 4,
    color: 'Red'
  },
  {
    brand: 'Ferrari',
    wheels: 4,
    color: 'Yellow'
  },
  {
    brand: 'Mercedes Benz',
    wheels: 4,
    color: 'Red'
  }
]

export const vehiclesGroupedByColor = {
  Red: [
    {
      brand: 'Ferrari',
      wheels: 4,
      color: 'Red'
    },
    {
      brand: 'Seat',
      wheels: 4,
      color: 'Red'
    },
    {
      brand: 'Mercedes Benz',
      wheels: 4,
      color: 'Red'
    }
  ],
  Gray: [{
    brand: 'Mercedes Benz',
    wheels: 4,
    color: 'Gray'
  }],
  Yellow: [{
    brand: 'Ferrari',
    wheels: 4,
    color: 'Yellow'
  }]
}

export const vehiclesGroupedByBrand = {
  Ferrari: [
    {
      brand: 'Ferrari',
      wheels: 4,
      color: 'Red'
    },
    {
      brand: 'Ferrari',
      wheels: 4,
      color: 'Yellow'
    }
  ],
  'Mercedes Benz': [
    {
      brand: 'Mercedes Benz',
      wheels: 4,
      color: 'Gray'
    },
    {
      brand: 'Mercedes Benz',
      wheels: 4,
      color: 'Red'
    }
  ],
  Seat: [{
    brand: 'Seat',
    wheels: 4,
    color: 'Red'
  }]
}

export const books = [
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Architecture', rating: 8 },
  { title: 'Clean Code', rating: 9 }
]

export const booksGroupedByRating = {
  8: [{ title: 'JavaScript: The Good Parts', rating: 8 }, { title: 'Clean Architecture', rating: 8 }],
  9: [{ title: 'Clean Code', rating: 9 }],
  10: [{ title: 'Aprendiendo Git', rating: 10 }]
}
