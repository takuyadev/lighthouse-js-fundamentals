const numberOfVowels = function (data) {
  // Init return variable that increments if condition returns true
  let total = 0

  // Since strings are arrays of chars, we can iterate with for let loop
  for (let char of data) {
    // If current char is a vowel, increment total
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      total++
    }
  }

  // Return total
  return total
}

console.log(numberOfVowels("orange"))
console.log(numberOfVowels("lighthouse labs"))
console.log(numberOfVowels("aeiou"))
