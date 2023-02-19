const instructorWithLongestName = function (instructors) {
  // Use reducer to find the longest name of instructors, and dot notation to extract length
  let longestLength = instructors.reduce((a, b) =>
    a.name.length > b.name.length ? a : b
  ).name.length

  // Filter instructors based off the longest length found in system
  return instructors.filter(
    (instructor) => longestLength <= instructor.name.length
  )
}

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
)
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
)
