const merge = (arr1, arr2) =>
  arr1.concat(arr2).sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6])
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8])
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6])
