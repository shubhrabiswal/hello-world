function findLongestWordLength(str) {
  let wordset = str.split(" ");
  let len =[]
  let temp1=0
  let ind;
  for(let word of wordset){
    // len[wordset.indexOf(word)] = word.length
    if(word.length>temp1){
      temp1=word.length
      ind = wordset.indexOf(word)
    }
  }
  return temp1
  console.log(wordset[ind])
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
