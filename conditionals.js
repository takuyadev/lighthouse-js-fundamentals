const raining = true
const cold = true

if (raining) {
  console.log("Don't forget your umbrella!")
}

if (!raining) {
  console.log("Leave your umbrella at home!")
}

if (cold) {
  console.log("Make sure you pick out a scarf!")
}

console.log("Now you're ready to go outside!")

// Second code ex.

const temperature = 4

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!")
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!")
} else {
  console.log("Short sleeves are fine.")
}

console.log("Now you're ready to go outside!")

// Third ex.

const isCitizen = true
const age = 26

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.")
}