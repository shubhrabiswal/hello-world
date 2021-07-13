function truncateString(str, num) {
  if(str.length>num){
    let output = str.substr(0,num)+"...";
    console.log(output)
    return output
  }else
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
