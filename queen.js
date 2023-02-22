const whiteQueen = [4, 7]
const blackQueen = [7, 4]
const spaces = 8

const generateBoard = function (whiteQueen, blackQueen) {
  // Set board
  const board = []

  // Loop and push newly created arrays into board
  // Cannot use .from or .fill to chain new Arrays since they only copy by reference
  for (let i = 0; i < spaces; i++) {
    board.push(new Array(spaces).fill(0))
  }

  // Place the queens on the board
  board[whiteQueen[0]][whiteQueen[1]] = 1
  board[blackQueen[0]][blackQueen[1]] = 1

  // Return the final board
  return board
}

let generatedBoard = generateBoard(whiteQueen, blackQueen)

const queenThreat = function () {
  const [w_y, w_x] = whiteQueen
  const [b_y, b_x] = blackQueen

  // If White and black are on the same row
  if (w_y === b_y) {
    return true
  }

  // If White and Black are on the same column
  if (w_x === b_x) {
    return true
  }

  // If White and Black are in angled direction threat
  if (w_x === b_y && w_y === b_x) {
    return true
  }

  // If all threats are checked, it's false
  return false
}

console.log(generatedBoard)
console.log(queenThreat())
