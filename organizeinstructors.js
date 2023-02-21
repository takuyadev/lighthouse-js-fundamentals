const organizeInstructors = function (instructors) {
  // Put your solution here

  // Create intital value as empty object
  const initialValue = {}

  return instructors.reduce((total, current) => {
    // Destructure current instructor object
    const { course, name } = current

    // Check if course exists inside of total, if not create new boject
    if (!total.hasOwnProperty(course)) {
      return { ...total, [course]: [name] }
    }

    // If it does, spread current courses and return
    return { ...total, [course]: [...total[course], name] }
  }, initialValue)
}

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
)
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
)
