const convertDaytoString = function (day) {
  switch (day) {
    case 1:
    case 21:
    case 31:
      return day + "st"
    case 2:
      return day + "nd"
    case 3:
      return day + "rd"
    default:
      return day + "th"
  }
}
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const talkingCalendar = (date) =>
  date
    .split("/")
    .map((day, i) =>
      i === 1
        ? month[Number(day) - 1]
        : i === 2
        ? convertDaytoString(Number(day))
        : day
    )
    .join(", ")

console.log(talkingCalendar("2000/2/02"))
console.log(talkingCalendar("2007/11/11"))
console.log(talkingCalendar("1987/08/24"))
