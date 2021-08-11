// ##### Reverse the word in a sentence

function word_rev(str1){
  let word=''
  let ar1 =[]
  for(let val of str1){
    if(val == ' '){
      // console.log(word)
      ar1.push(word)
      word =''
    }
    else{
      word += val
    }
    
  }
  ar1.push(word)
  // console.log(ar1)
  let str2 = ''
  for(let i=ar1.length-1;i>=0;i--){
    str2 = str2+ar1[i]+" "
  }
  return str2
}

console.log(word_rev("my name is shubhra"));
