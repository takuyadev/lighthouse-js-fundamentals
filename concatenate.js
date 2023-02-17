function concat(arr1, arr2) {
  let result = [...arr1]
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i])
  }
  return result
}
console.log(concat([5, 10], [10]))
