const multiplicationTable = function (maxValue) {
  // If max value is just one, then no need to run loop
  if (maxValue === 1) {
    return " 1\n"
  }

  // Initialize logger for return later
  let log = ""

  // Generate multiplication table with two for loop
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      // Add int to log if not end of max value
      // otherwise, add new line
      log += j >= maxValue ? "\n" : ` ${i * j}`
    }
  }

  return log
}

console.log(multiplicationTable(1))
console.log(multiplicationTable(5))
console.log(multiplicationTable(10))
