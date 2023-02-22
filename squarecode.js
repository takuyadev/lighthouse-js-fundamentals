const squareCode = function (message) {
  // Put your solution here

  // Initialize result to be returned
  const result = []

  // Initialize split version of organized string
  const arr = []

  //Combine all words into one single word that is lowercased
  const filteredMsg = message.split(" ").join("").toLowerCase()

  // Find the amount of columns it has
  const colCount = Math.ceil(Math.sqrt(filteredMsg.length))

  // Create a split version of the filtered message into columns
  for (let i = 0; i < filteredMsg.length; i += colCount) {
    arr.push(filteredMsg.substr(i, colCount))
  }

  // Uses newly split array to add into algorithm
  for (let i = 0; i < colCount; i++) {
    // Initialize loop counts and values to be pushed
    let row = ""
    const lastRow = arr[arr.length - 1].length

    // Last row determines when the array count is getting shorter
    // If the current iterations are in the last few rows,
    // reduce the amount of times it will loop to account for undefined indexes
    const rowCount = i < lastRow ? arr.length : arr.length - 1

    // Set new row to be pushed into results
    for (let j = 0; j < rowCount; j++) {
      row += arr[j][i]
    }

    // Push to results
    result.push(row)
  }

  // Return the final result of the previous for loop
  return result
}

console.log(squareCode("chill out"))
console.log(squareCode("feed the dog"))
console.log(squareCode("have a nice day"))
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
)
