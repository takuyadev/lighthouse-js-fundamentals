const checkAir = function (samples, threshold) {
  // Find how many samples are polluted in the samples
  const totalPollution = samples.reduce(
    (total, current) => (current === "dirty" ? ++total : total),
    0
  )

  // If pollution percentage is higher than the threshold limits, return polluted.
  return totalPollution / samples.length > threshold ? "Polluted" : "Clean"
}
