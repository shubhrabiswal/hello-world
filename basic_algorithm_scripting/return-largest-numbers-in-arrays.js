function largestOfFour(arr) {
  let output=[];
  for(let subarr of arr){
    let temp = subarr[0]
    for(let num of subarr){
      if(num>temp){
        temp=num
      }
    }
    output.push(temp)
  }
  // console.log(output)
  return output;
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
