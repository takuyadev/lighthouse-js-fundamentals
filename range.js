// start, end, or step being undefined
// start being greater than end
// step being 0, or negative
function range(start, end, step) {
  const result = []
  for (let i = start; i <= end; i += step) {
    result.push(i)
  }
  return result
}

console.log(range(0, 10, 2))
console.log(range(10, 30, 5))
console.log(range(-5, 2, 3))
