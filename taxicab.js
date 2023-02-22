// Direction array can rotate direction by iterating over array
// We can use indexes to add and subtract to choose direction
// north = 0
// east = 1
// south = 2
// west = 3

const direction = ["north", "east", "south", "west"]

// Converts weird directions format to readable, iterable array with objects
const convertDirections = function (directions) {
  // Initialize converted array
  let result = []

  // Iterate to grab two values ("left", 5)
  // Convert array values into object
  for (let i = 0; i < directions.length; i += 2) {
    // Ex. {type: "left", amount: 3}
    result.push({ type: directions[i], amount: directions[i + 1] })
  }

  // Return converted array
  return result
}

const blocksAway = function (directions) {
  // Put your solution here

  // Current direction = 0 is also = north
  let currentDirection = 0

  // Initialize currentPosition of 0
  const currentPostition = { east: 0, north: 0 }

  // Grab more easier to read directions array for iteration
  const convertedDirections = convertDirections(directions)

  for (let direction of convertedDirections) {
    // Based on direction provided its heading, change currentDirection
    // If left, subtract from currentDirection (loop to 3 if already 0)
    if (direction.type === "left") {
      currentDirection = currentDirection !== 0 ? (currentDirection -= 1) : 3
    }

    // If right, add to currentDirection (loop to 0 if already 3)
    if (direction.type === "right") {
      currentDirection = currentDirection !== 3 ? (currentDirection += 1) : 0
    }

    // Based on current direction, update currentPosition
    // North and East === positive - South and West === negative
    switch (currentDirection) {
      case 0:
        currentPostition.north += direction.amount
        break
      case 1:
        currentPostition.east += direction.amount
        break
      case 2:
        currentPostition.north -= direction.amount
        break
      case 3:
        currentPostition.east -= direction.amount
        break
    }
  }

  return currentPostition
}
