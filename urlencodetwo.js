const urlDecode = function (text) {
  // Put your solution here
  let result = {}

  //Iterate through text with using the newly split array
  for (const query of text.split("&")) {
    // Split the query, so [0] is the key and [1] is the value
    const [key, value] = query.split("=")

    // Update result with adding the new key and value (replace %20 with " ")
    result = { ...result, [key]: value.replace("%20", " ") }
  }
  return result
}

console.log(urlDecode("duck=rubber"))
console.log(urlDecode("bootcamp=Lighthouse%20Labs"))
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"))
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather)
