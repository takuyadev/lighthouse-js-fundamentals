let prompt = require("prompt-sync")()

// Count the number of attempts taken
let attempt = 0

// Standard random number generator
const randomNumber = Math.floor(Math.random() * 100) + 1

// Initially answer is null
let answer = null

while (answer !== randomNumber) {
  // Prompt user in CLI for an answer
  answer = Number(prompt("Guess a number: "))

  // Check if answer is NaN
  if (isNaN(answer)) {
    console.log("Not a number! Try Again!")
  } else {
    
    // Simple bigger or smaller check
    if (answer > randomNumber) {
      console.log("Too High!")
    } else {
      console.log("Too Low!")
    }

    // Increment attempt only if it is a number
    attempt++
  }
}

// Pluralize only after 1 attempt
console.log(`You got it! You took ${attempt} attempt${attempt !== 1 && "s"}.`)
