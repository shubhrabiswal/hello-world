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
##############################################################
### Program to check if a string starts with another string
##############################################################
function check(str1, start){
  let i=0
  while(i<start.length){
    if(start[i]==str1[i]){
      i +=1
    }else{
      return str1+" does not start with "+start
    }
  }
  return str1+" starts with " + start
}

console.log(check("hellloooooo kklskjj","hello"))
########################################################################################################
########################################################################################################
### Program to check if an array contains a specified value
########################################################################################################

function check_value(arr,val){
  for(let ele of arr){
    if(ele == val){
      return val+" is present in the array"
    }
  }
}
console.log(check_value(["op","pq","sb","kl","hu"],"sb"))
################################################################################################################

########################################################################################################
### Program to remove item from an array
########################################################################################################
function remove(arr,val){
  let new_ar = []
  for(let i=0;i<arr.length;i++){
    if(arr[i] !== val){
      new_ar.push(arr[i])
    }
  }
  return new_ar
}

console.log(remove([2,3,4,5,6],4))

########################################################################################################

########################################################################################################
### Program to remove duplicates from an array
########################################################################################################
function remove_duplicate(arr){
  let result = [];
  let count = 0;
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[i] == arr[j]){
        // console.log(arr[j])
        count += 1;
        
      }
    }
    // console.log("count for "+ arr[i]+ " is "+count)
    if(count == 1){
      // console.log(arr[i])
      result.push(arr[i])
    }
    count = 0
    // console.log(arr[i])
  }
  return result
}

console.log(remove_duplicate([2,3,4,4,5,6]));

########################################################################################################
### Program to merger two arrays and remove duplicates 
########################################################################################################
function remove_duplicate(arr,arr2){
  for(let ele of arr2){
    arr.push(ele)
  }
  let result = [];
  let count = 0;
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[i] == arr[j]){
        count += 1;
        
      }
    }
    if(count == 1){
      result.push(arr[i])
    }
    count = 0
  }
  return result
}

console.log(remove_duplicate([2,3,4,4,5,6],[6,7]))

###########################################
### Empty an array
##############################################
function empty_arr(arr){
  arr = [];
  return arr;
}

console.log(empty_arr([2,3,4,4,5,6]))

##########################################################

###########################################
### Program to check if a variable is undefined or null
##############################################

function checkVariable(variable) {

    if(variable == null) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}

let newVariable;

checkVariable(5);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);
##########################################################

##########################################################
### Program to check if a variable is of function type
##########################################################

function testVariable(variable) {
      
    if(variable instanceof Function) {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}

const count = true;
const x = function() {
    console.log('hello')
};

testVariable(count);
testVariable(x);
########################################################################################################
### Program to check if a number is a float or integer value
########################################################################################################

function checkNumber(x) {

    // check if the passed value is a number
    if(typeof x == 'number' && !isNaN(x)){
    
        // check if it is integer
        if (Number.isInteger(x)) {
            console.log(`${x} is integer.`);
        }
        else {
            console.log(`${x} is a float value.`);
        }
    
    } else {
        console.log(`${x} is not a number`);
    }
}

checkNumber('hello');
checkNumber(44);
checkNumber(3.4);
checkNumber(-3.4);
checkNumber(NaN);
########################################################################################################

########################################################################################################
### Program to pass a function as a parameter
########################################################################################################
function greet() {
    return 'Hello';
}
// passing function greet() as a parameter
function name(user, func)
{
    // accessing passed function
    const message = func();
    console.log(`${message} ${user}`);
}

name('John', greet);
name('Jack', greet);
name('Sara', greet);
########################################################################################################
########################################################################################################
### Program to split array into smaller chunks using built in functions
########################################################################################################
function splitIntoChunk(arr, chunk) {

    for (i=0; i < arr.length; i += chunk) {

        let tempArray;
        tempArray = arr.slice(i, i + chunk);
        console.log(tempArray);
    }

}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;
splitIntoChunk(array, chunk);
########################################################################################################
### Program to split array into smaller chunks without using built in functions
########################################################################################################
// program to split array into smaller chunks

function splitIntoChunk(arr, chunk) {
    let small = [];
    let i =0
    while (i < arr.length) {
       small.push(arr[i]);
        if (small.length == chunk){
          console.log(small);
          small = [];
        }
      i++; 
    }

}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;
splitIntoChunk(array, chunk);
########################################################################################################

