function frankenSplice(arr1, arr2, n) {
  let arr2_copy = arr2.slice()

  let last_part = arr2_copy.splice(n)
  for(let ele of arr1){
    arr2_copy.push(ele)
  }
  for(let ele of last_part){
    arr2_copy.push(ele)
  }
  // console.log(arr2_copy)
  return arr2_copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);