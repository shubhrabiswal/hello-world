function bouncer(arr) {
  let output=[]
  for(let ele of arr){
    if(Boolean(ele)==true){
      output.push(ele)
    }
  }
  return output;
}

bouncer([7, "ate", "", false, 9]);