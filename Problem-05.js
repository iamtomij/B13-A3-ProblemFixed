function analyzeText(str){
  if (typeof str !== "string" || str.trim()=== ""){
    return "Invalid"
  } let words = str.split(" ")
  let longWord = words[0]

  for (let word of words){
    if (word.length > longWord.length){
      longWord = word
    }
  }
  let token = str.split(" ").join("").length;
  return {longWord: longWord, token: token}
}

// console.log(analyzeText("I am a little honest person"))
// console.log(analyzeText(23452345))
// console.log(analyzeText("I am a student at PH_batch-B13"))