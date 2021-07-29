function pairwise(arr, arg) {
  let op1 = []
  let val=[]
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j] == arg && op1.includes(i) == false && op1.includes(j) == false){
        // op1.push([i,j])
        op1.push(i)
        op1.push(j)
        val.push([arr[i],arr[j]])
      }
    }
  }
  console.log(op1)
  console.log(val)
  let ind_sum = 0
  // for(let S of op1){
  //   ind_sum += S[0]+S[1]
  // }
  for(let i of op1){
    ind_sum +=i
  }
  console.log(ind_sum)
  return ind_sum;
}
// pairwise([1, 1, 1], 2)
pairwise([1,4,2,3,0,5], 7);