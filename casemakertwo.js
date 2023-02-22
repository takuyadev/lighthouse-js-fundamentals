const vowels = ["a", "e", "i", "o", "u"]


// Set up casing functions
const toCamelCase = function (sentence) {
  return sentence
    .split(" ")
    .map((word, i) => (i === 0 ? word : word[0].toUpperCase() + word.substr(1)))
    .join("")
}

const toPascalCase = function (sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join("")
}

const toSnakeCase = function (sentence) {
  return sentence.split(" ").join("_")
}

const toKebabCase = function (sentence) {
  return sentence.split(" ").join("-")
}

const toTitleCase = function (sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ")
}

const captalizeVowels = function (sentence) {
  let result = ""
  for (let char of sentence) {
    if (vowels.includes(char)) {
      result += char.toUpperCase()
    } else {
      result += char
    }
  }
  return result
}

const captalizeConsonants = function (sentence) {
  let result = ""
  for (let char of sentence) {
    if (!vowels.includes(char)) {
      result += char.toUpperCase()
    } else {
      result += char
    }
  }
  return result
}

// Check what type is applied, and apply casing to result
const makeCase = function (input, type) {
  result = input

  if (type.includes("camel")) {
    result = toCamelCase(result)
  }
  if (type.includes("pascal")) {
    result = toPascalCase(result)
  }
  if (type.includes("title")) {
    result = toTitleCase(result)
  }
  if (type.includes("kebab")) {
    result = toKebabCase(result)
  }
  if (type.includes("snake")) {
    result = toSnakeCase(result)
  }
  if (type.includes("vowel")) {
    result = captalizeVowels(result)
  }
  if (type.includes("consonant")) {
    result = captalizeConsonants(result)
  }
  if (type.includes("upper")) {
    result = result.toUpperCase()
  }
  if (type.includes("lower")) {
    result = result.toLowerCase()
  }

  return result
}

console.log(makeCase("this is a string", "camel"))
console.log(makeCase("this is a string", "pascal"))
console.log(makeCase("this is a string", "snake"))
console.log(makeCase("this is a string", "kebab"))
console.log(makeCase("this is a string", "title"))
console.log(makeCase("this is a string", "vowel"))
console.log(makeCase("this is a string", "consonant"))
console.log(makeCase("this is a string", ["upper", "snake"]))
