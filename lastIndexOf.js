function lastIndexOf(nums, value) {
  let result = -1
  nums.forEach((num, i) => {
    if (num === value) {
      result = i
    }
  })
  return result
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 4))
