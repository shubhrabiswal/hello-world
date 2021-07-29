function permAlone(str) {
  let ans = 0
  function permut(string) {
  if (string.length < 2) return string; // This is our break condition

  var permutations = []; // This array will hold our permutations
  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    // Cause we don't want any duplicates:
    // if (string.indexOf(char) != i) // if char was used already
    //   continue; // skip it this time

    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

    for (var subPermutation of permut(remainingString))
      permutations.push(char + subPermutation)
  }
  return permutations;
}
  let permutation = permut(str)
  console.log(permutation)
  let op = []
  for(let ele of permutation){
    let count = 0;
    for(let i=0;i<ele.length-1;i++){
      if(i==0){
         if(ele[0]==ele[1]){
           count++
         }      
      }
      if(ele[i] == ele[i+1]){
        count++
      }
    }
    if(count == 0){
      op.push(ele)
    }
  }
  console.log(op)
  ans = op.length
  console.log(ans)
  return ans;
}

permAlone('aab');