function factorialize(num) {
  let fact =1;
  if(num==0 || num==1){
    return 1;
  }else{
    for(let i=1;i<=num;i++){
      fact *=i
    }
    return fact
  }

  return num;
}

factorialize(5);
