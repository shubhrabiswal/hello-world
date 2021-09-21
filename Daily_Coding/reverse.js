arr = [2,3,2,4,1]

function reversed(arr){
  var n = 0;
  console.log(n)
  if(arr.length%2 === 0){
    n = arr.length/2
  }else{
    n = (arr.length+1)/2
    }
  for(var i=0;i<=n-1;i++){
    var temp=arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp
  }  
  return arr
}

console.log(reversed(arr))
