function squareDigits(num){
  var myInt = num.toString();
  // console.log(myInt);
  // console.log(Array.from('818'))
  var intArr = Array.from(myInt);
  // console.log(intArr);
  var final=''
  for(let i=0;i<intArr.length;i++){
    var temp = intArr[i]*intArr[i];
    final += temp;
  }
  // console.log(final);
  return final;
}
squareDigits(818)
// console.log();
