const urlEncode = function (text) {
  let result = ""
  for (let char of text.trim()) {
    result += char === " " ? "%20" : char && char
  }
  return result
}

console.log(urlEncode("Lighthouse Labs"))
console.log(urlEncode(" Lighthouse Labs "))
console.log(urlEncode("blue is greener than purple for sure"))
