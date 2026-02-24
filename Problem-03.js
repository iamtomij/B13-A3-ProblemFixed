function finalScore(omr) {
  if (Array.isArray(omr)) {
    return "Invalid"
  }
  if (omr.right + omr.wrong + omr.skip !== 100) {
    return "Invalid"
  }
  let score = omr.right - (omr.wrong * 0.5);
  return Math.round(score)
}

console.log(finalScore({right:67, wrong: 23, skip:10}))
// console.log(finalScore({right:80, wrong:47, skip:0}))