function confirmEnding(str, target) {
  let ind = str.length-target.length
  if(str.substr(ind,target.length)==target){
    return true
  }else return false
  return str;
}

confirmEnding("Bastian", "n");
