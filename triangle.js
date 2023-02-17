function buildTriangle(length) {
  var line = ""
  for (var j = 1; j <= length; j++) {
    for (let i = 1; i <= j; i++) {
      line += "* "
    }
    line += "\n"
  }
  return line
}

console.log(buildTriangle(10))
