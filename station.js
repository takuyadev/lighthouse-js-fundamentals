stations = [
  ["A", 10, "school"],
  ["B", 9, "restaurant"],
  ["C", 21, "community centre"],
  ["D", 15, "school"],
  ["E", 50, "restaurant"],
  ["F", 20, "school"],
  ["G", 40, "community centre"],
  ["H", 50, "school"],
]

// Put code here
function chooseStations(arr) {
  return arr
    .filter((station) => {
      if (
        station[1] >= 20 &&
        (station[2] === "school" || station[2] === "community centre")
      ) {
        return station
      }
    })
    .map((station) => station[0])
}

console.log(chooseStations(stations))
