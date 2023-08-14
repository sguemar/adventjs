export default function daysToXmas (date) {
  const xmasDate = new Date('Dec 25, 2021')
  date.setHours(0, 0, 0, 0)

  return (xmasDate - date) / 1000 / 60 / 60 / 24
}
