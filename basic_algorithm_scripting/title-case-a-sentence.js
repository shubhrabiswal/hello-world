function titleCase(str) {
  let wordset = str.split(" ");
  for(let i=0;i<wordset.length;i++){
    let w1 = wordset[i][0].toUpperCase()
    let w2 = wordset[i].substr(1,wordset[i].length).toLowerCase()
    let word = w1+w2
    wordset[i]=word
  }
  str = wordset.join(" ")
  // console.log(wordset.join(" "))
  return str;

}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");