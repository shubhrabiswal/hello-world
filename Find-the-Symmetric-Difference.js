### Find the Symmetric Difference

//The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. 
// For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. 
// So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. 
// Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

###solution

function sym(args1,args2) {
  // console.log(args2)
  var args = []
  
  for(let i=0;i<args1.length;i++){
    if(args2.includes(args1[i]) == false) {
        args.push(args1[i])
      }
  }
  for(let j=0;j<args2.length;j++){
      if(args1.includes(args2[j]) == false){
        args.push(args2[j])
      }
    }
  console.log(args)
  return args;
}
sym([1, 2, 3], [5, 2, 1, 4]);//find the symmetric differences between the two sets


