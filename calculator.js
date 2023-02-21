const dollar = [
  { name: "twentyDollar", amount: 2000 },
  { name: "tenDollar", amount: 1000 },
  { name: "fiveDollar", amount: 500 },
  { name: "twoDollar", amount: 200 },
  { name: "oneDollar", amount: 100 },
  { name: "quarter", amount: 25 },
  { name: "dime", amount: 10 },
  { name: "penny", amount: 1 },
]

const calculateChange = function (total, cash) {
  // Your code here
  let totalDiff = cash - total
  let result = {}

  // If total difference is 0, then return blank object
  if (totalDiff < 0) {
    return result
  }

  // For loop selects current type of bill
  for (let i = 0; i < dollar.length; i++) {
    // Counts how many currently selected bills are required
    let billCount = 0
    let { amount } = dollar[i]

    // If current difference is bigger than selected bill, then count bills
    while (totalDiff - amount >= 0) {
      totalDiff -= amount
      billCount++
    }

    // If bill count is 0 after loop, then don't add bills to result
    if (billCount !== 0) {
      result = { ...result, [dollar[i].name]: billCount }
    }
  }

  return result
}

console.log(calculateChange(1787, 100000))
console.log(calculateChange(2623, 4000))
console.log(calculateChange(501, 1000))
