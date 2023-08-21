export default function learn (time, courses) {
  let coursesIndexes = null
  let maxCoursesDuration = 0

  for (let i = 0; i < courses.length - 1; i++) {
    if (courses[i] >= time) continue
    for (let j = i + 1; j < courses.length; j++) {
      if (courses[j] >= time) continue
      const coursesDuration = courses[i] + courses[j]
      if (coursesDuration === time) return [i, j]
      else if (coursesDuration > maxCoursesDuration) {
        coursesIndexes = [i, j]
        maxCoursesDuration = coursesDuration
      }
    }
  }

  return coursesIndexes
}
