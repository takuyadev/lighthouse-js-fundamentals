const sumLargestNumbers = function (data) {
  // Use array destructuring to use Math.max to find first largest number
  const firstNum = Math.max(...data)

  // Filter array based on the largest num provided in the previous math.max
  const filteredNum = data.filter((num) => num !== firstNum)

  // Find second num by using newly filtered array
  const secondNum = Math.max(...filteredNum)

  // Return the sum of first and second largest num
  return firstNum + secondNum
}
