const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
]

const metric = "redness"

const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let highestScore = 0

  for (let vegetable of vegetables) {
    if (vegetable[metric] > highestScore) {
      highestScore = vegetable[metric]
    }
  }

  return highestScore
}

console.log(judgeVegetable(vegetables, "redness"))
