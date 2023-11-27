# What should we learn at Platzi?

On the occasion of the most beautiful dates of the year, [Plazi has launched a very special promotion](https://platzi.com/precios/) because **education is a gift 🎁 forever**.

At Platzi they have more than 800 courses 📚 but, of course, our time is limited. So let's optimize our available time to **complete two courses using the maximum number of hours available**.

We have to create **a function that receives two parameters**. The first is the number of hours we have available ⏳ and the second is an array where each index is a course and the value the time it takes to complete.

**We are clear that we want to do two courses** so the function should return an array with the index of the two courses we are going to be able to complete with the time available provided and **using the maximum time available**. If we do not have time, we return `null`.

Let's take a look at some examples:

```JavaScript
learn(10, [2, 3, 8, 1, 4]) // [0, 2] -> with 10 hours available it is best to complete the courses at index 0 and 2.

learn(15, [2, 10, 4, 1]) // [1, 2] -> courses in [1, 2] are 14 hours, it is the best option.

learn(25, [10, 15, 20, 5]) // [0, 1] -> the courses [0, 1] and [2, 3] complete exactly with 25 hours but we always return the first one we find.

learn(8, [8, 2, 1]) // [1, 2] -> to do two courses, we cannot do the one with 8 hours, so we return the one with 1 and 2.

learn(8, [8, 2, 1, 4, 3]) // [3, 4] -> we use the maximum time available so [3, 4] uses 7 hours and the [1, 2] would only use 3 hours.

learn(4, [10, 14, 20]) // null -> we don't have time to do two courses

learn(5, [5, 5, 5]) // null -> we don't have time to do two courses
```

Looking at the whole Platzi thing, we also noticed that they have a special Christmas discount. Don't know what to give as a gift? Give the gift of knowledge 🎓.