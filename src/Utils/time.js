export function secondsToTime(e) {
  var h = Math.floor(e / 3600)
      .toString()
      .padStart(2, "0"),
    m = Math.floor((e % 3600) / 60)
      .toString()
      .padStart(2, "0"),
    s = Math.floor(e % 60)
      .toString()
      .padStart(2, "0")

  if (h !== "00") {
    return h + ":" + m + ":" + s
  } else {
    return m + ":" + s
  }
}
