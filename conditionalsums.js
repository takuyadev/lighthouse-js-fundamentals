const checkParity = (value, condition) => {
  switch (condition) {
    // If condition is even then check value for even
    case "even":
      return value % 2 === 0 ? value : 0

    // If condition is odd then check value for odd
    case "odd":
      return value % 2 !== 0 ? value : 0
  }
}

const conditionalSum = (values, condition) =>
  // Use reducer to iterate array and total all values in arary together
  values.reduce((total, value) => checkParity(value, condition) + total, 0)

console.log(conditionalSum([1, 2, 3, 4, 5], "even"))
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"))
console.log(conditionalSum([13, 88, 12, 44, 99], "even"))
console.log(conditionalSum([], "odd"))
