const calculateRectangleArea = (length, width) => {
  let result = undefined

  if (length > 0 && width > 0) {
    result = length * width
  }

  return result
}
const calculateTriangleArea = (base, height) => {
  let result = undefined

  if (base > 0 && height > 0) {
    result = (base * height) / 2
  }

  return result
}
const calculateCircleArea = (radius) => {
  let result = undefined

  if (radius > 0) {
    result = Math.PI * Math.pow(radius, 2)
  }

  return result
}

console.log(calculateCircleArea(-1))
