# Counting down the days to presents

With the excitement, we are already starting **to count the days of the calendar until December 25th** 📅.

To help with this, let's create a function that, by passing an instance of `Date`, tells us the number of days remaining.

Let's see some examples:

```JavaScript
const date1 = new Date('Dec 1, 2021')
daysToXmas(date1) // 24
const date2 = new Date('Dec 24, 2021 00:00:01')
daysToXmas(date2) // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
daysToXmas(date3) // 1
const date4 = new Date("December 20, 2021 03:24:00")
daysToXmas(date4) // 5
```

The result has to be **an integer** and, as you can see, even if there is one second left until the next day, it is understood that there is still one day left.

**But be careful!** We must also indicate if the date is the same day (we would return `0`) or if it is a future date (we would return the number of days in negative `-`)

```JavaScript
const date = new Date('Dec 25, 2021')
daysToXmas(date) // 0
const date1 = new Date('Dec 26, 2021')
daysToXmas(date1) // -1
const date2 = new Date('Dec 31, 2021')
daysToXmas(date2) // -6
const date3 = new Date('Jan 1, 2022 00:00:01')
daysToXmas(date3) // -7
const date4 = new Date('Jan 1, 2022 23:59:59')
daysToXmas(date4) // -7
```

By the way, the reference date to know if it is December 25th is `Dec 25, 2021`.