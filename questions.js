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

##############################################
### Javascript Program to Check if a number is Positive, Negative, or Zero
##############################################
function check_num(num){
  if(num>0){
  return "the number is positive"
}else if(num == 0){
  return "the number is 0"
}
else{
  return "the number is negative"
}
}

console.log(check_num(-10))

##############################################
### JavaScript Program to Check Prime Number
##############################################
function check_prime(num){
  let count=0;
  for(let i=1;i<=num;i++){
    if(num%i==0){
      count++
    }
  }
  if(count==2){
    return "prime"
  }else{
    return "not a prime"
  }
}

console.log(check_prime(5))
###############################################

##############################################
### // program to find the ASCII value of a character
##############################################

// take input from the user
const string = prompt('Enter a character: ');

// convert into ASCII value
const result = string.charCodeAt(0);

console.log(`The ASCII value is: ${result}`);
###############################################
#### String Plaindrome
###############################################
function palindrome(str1){
  let str_new = '';
  for(let i=str1.length-1;i>=0;i--){
    str_new += str1[i]
  }
  if(str1 == str_new){
    return "palindrome"
  }else{
    return "not a palindrome"
  }
}
console.log(palindrome("empme"));
##############################################

##############################################
### Check vowels in a string
##############################################
function count_vowels(str1){
  let vowels = ['a','e','i','o','u','A','E','I','O','U'];
//   const count = str.match(/[aeiou]/gi).length; --> copied
  let count = 0;
  for(let letter of str1){
    for(let v of vowels){
      if(letter == v){
        console.log(letter)
        count ++
      }
    }
  }
  
  console.log("total vowels " + count)
}

console.log(count_vowels("emdApiOEme"));

##############################################

#############################
// program to format numbers as currency string
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

formatter.format(2500);
########################


