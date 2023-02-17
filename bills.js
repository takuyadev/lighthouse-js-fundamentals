numbers = numbers.map((number) => {
  return number.map((num) => {
    return num % 2 === 0 ? "even" : "odd"
  })
})
