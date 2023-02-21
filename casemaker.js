const camelCase = function (input) {
  // Your code here
  return input
    .split(" ")
    .map((word, i) =>
      i === 0 ? word : word[0].toUpperCase() + word.slice(1, word.length)
    )
    .join("")
}

console.log(camelCase("this is a string"))
console.log(camelCase("loopy lighthouse"))
console.log(camelCase("supercalifragalisticexpialidocious"))
