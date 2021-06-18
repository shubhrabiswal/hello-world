#### Quadratic equations

function quad(a,b,c){
  let disc = b*b - 4*a*c;
  let res;
  let root1,root2;
  if(disc == 0){
    root1 = -b/(2*a);
    root2 = -b/(2*a);
  }
  if(disc>0){
    root1 = (-b + Math.sqrt(disc))/2*a;
    root2 = (-b - Math.sqrt(disc))/2*a;
  }
  console.log(root1,root2)
}

quad(1,6,5);


