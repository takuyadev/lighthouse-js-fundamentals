const finalPosition = function (moves) {
  // Your code in here ...
  // x, y
  let result = [0, 0]
  for (let move of moves) {
    switch (move) {
      case "north":
        result[1]++
        break
      case "south":
        result[1]--
        break
      case "west":
        result[0]--
        break
      case "east":
        result[0]++
        break
    }
  }

  return result
}

const moves = ["north", "north", "west", "west", "north", "east", "north"]
console.log(finalPosition(moves))
