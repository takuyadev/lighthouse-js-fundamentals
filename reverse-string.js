// Reverse string provided in paramter
function reverseString(string) {
  // Initialize string
  let result = ""

  // Since string is technically an array, we can iterate with i
  for (let i = string.length - 1; i >= 0; i--) {
    // For every loop, add current selected char to result
    result += string[i]
  }

  // Return final result
  return result
}

console.log(reverseString("Hello"))
