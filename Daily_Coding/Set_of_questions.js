// Verify a prime number
function prime(num){
  count=1
  for(let i=2;i<=num;i++){
    if(num % i == 0){
      count = count+1
      if(count >2){
        return "not a prime"
      }
    }
  }
  if(count ==2){
    return "prime"
  }
}

// console.log(prime(4))

// Find all prime factors of a number

function all_primes(n){
   var factors = [], 
      divisor = 2;
  while(n>2){
    if(n % divisor == 0){
       factors.push(divisor); 
       n= n/ divisor;
    }
    else{
      divisor++;
    }     
  }
  return factors;
}

// console.log(all_primes(12))

// Get nth Fibonacci number

function fibonacci(n){
  let ar=[]
  if(n==1){
    return 0
  }
  if (n==2){
    return 1
  }
  ar.push(0)
  ar.push(1)
  while (ar.length>=2 && ar.length<n){
    ar.push(ar[ar.length-1]+ar[ar.length-2])
  }
  return ar[ar.length-1]
}

//console.log(fibonacci(5))

// Find the greatest common divisor of two numbers

function GCF(n1,n2){
  var divisor = 2;
  var gcf = 1
  
  if(n1< 2 || n2<2 ){
    return 1
  }

  while(n1 >= divisor && n2 >= divisor){
    if(n1%divisor ==0 && n2%divisor==0){
      gcf = divisor
    }
    divisor +=1
  }
  return gcf
}

// console.log(GCF(2,5))


// Remove duplicate members from an array
function remove_duplicates(ar1){
  let res =[]
  for(let i of ar1){
    if(res.includes(i) == false){
      res.push(i)
    }
  }
  return res
}

// console.log(remove_duplicates([2,3,5,6,3,2]))

// Merge two sorted array

function merge_arrs(ar1,ar2){
  for(let i of ar2){
      if(ar1.includes(i) == false){
        ar1.push(i)
      }
  }
  // console.log(ar1)
  for (let i=0;i<ar1.length;i++){
    for (let j=0;j<ar1.length;j++){
      if(ar1[j] > ar1[i]){
        var temp=ar1[i]
        ar1[i] = ar1[j]
        ar1[j] = temp
      }
    }
    
  }
  return ar1
}

// console.log(merge_arrs([1,2,3,5],[2,1,4]))

// Swap two numbers without using a temp variable

function swap(n1,n2){
  n1 = n1+n2
  n2 = n1-n2
  n1 = n1-n2
  console.log(n1,n2)
}

// console.log(swap(5,4))
// Reverse a string in JavaScript

function rev_str(str1){
  let ar1 = str1.split('')
  console.log(ar1)
  let res =''
  for (let i=ar1.length-1;i>=0;i--){
    res = res+ar1[i]
  }
  return res
}

// console.log(rev_str("hello str"))

// Reverse words in a sentence

function rev_words(str1){
  let ar1 = str1.split(' ')
  console.log(ar1)
  let res =''
  for (let i=ar1.length-1;i>-1;i--){
     res = res+' '+ar1[i] 
  }
  return res
}

// console.log(rev_words("hello str"))

// Reverse words in place


function rev_words_inplace(str1){
  let ar1 = str1.split(' ')
  console.log(ar1)
  let res=''
  for (let i=0;i<ar1.length;i++){
    let w =''
     for(let j=ar1[i].length-1;j>-1;j--){
       w = w+ar1[i][j]
     }
     res = res+' '+w
  }
  return res
}

// console.log(rev_words_inplace("hello str"))

// Find the first non repeating char in a string?

function non_repeat(str1){
  let ar1=str1.split('')
  for(let i=0;i<ar1.length;i++){
    let count=0
    for(let j=0;j<ar1.length;j++){
      if(ar1[i] == ar1[j]){
        count++
      }
    }
    if(count == 1){
      return ar1[i]
    }
  }
}
// console.log(non_repeat("hsheeloeebllwll"))

// Remove duplicate characters from a string
function remove_duplicates_str(ar1){
  let res = []
  for(let i of ar1){
    if(res.includes(i) == false){
      res.push(i)
    }
  }
  return res.join('')
}

// console.log(remove_duplicates_str("hello"))


// Verify a word as palindrome?

function palindrome(word){
  let ar1=word.split('')
  let res = []
  
  for(let i=word.length-1;i>-1;i--){
    res.push(word[i])
  }
  let rev = res.join('')
  if(word == rev){
    return "pallindrome"
  }else{
    return "not pallindrome"
  }
  
}

// console.log(palindrome("hellolleh"))
// Generate random between 5 to 7 by using defined function.

function gen_random(num1,num2){
  let n1,n2,res = 0 
  if(num1>num2){
    n1 = num1
    n2= num2
  }else{
    n1=num2
    n2=num1
  }
  while(res>=0){
    res= Math.floor((Math.random()*(n1-n2+1))+n1)
    if(res>=n2 && res<=n1){
      return res
    }
  }
}

// console.log(gen_random(5,7))
// Find missing number from unsorted array of integers.
function missing(arr){
  let arr_size = arr.length+1
  let sum = 0
  let missed
  let exp_sum= arr_size*(arr_size+1)/2
  for (let i=0;i<arr.length;i++){
    sum =sum+arr[i]
  }
  missed = exp_sum - sum
  // console.log(missed,exp_sum,sum)
  return missed
}

// console.log(missing([6,1,4,2,3]))
// Check whether any two numbers in an array sums to a given number?

function check_sum(arr,exp){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j] == exp){
        return true
      }
    }
  }
}

// console.log(check_sum([2,3,4,1,3,6,4,7],10))

// Find the largest sum of any two elements?
function largest_sum(arr){
  let exp = 0
  let v1,v2
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j] > exp){
        exp = arr[i]+arr[j]
        v1 = arr[i]
        v2 = arr[j]
      }
    }
  }
  return exp
}

// console.log(largest_sum([2,3,4,1,3,6,4,7]))

// Total number of zeros from 1 upto n?
function total_zeros(n){
  let tot = 0
  for(let i=0;i<=n;i++){
    let num = i
    while(num>0){
      let rem = Math.floor(num%10)
      num = Math.floor(num/10)
      if(rem == 0){
        // console.log(i)
        tot++
      }
    }
  }
  return tot
}

// console.log(total_zeros(100))

// Match substring of a sting?

function substr1(str1,sub){

  for(let i=0;i<str1.length;i++){
    let w = ''
    for(let j=0;j<sub.length;j++){
      w = w+str1[i+j]
    }

    if(w == sub){
      return i  ///returns the starting index
    }
  }

}

// console.log(substr1("mnabsssabnm","ab"))

// Create all permutation of a string

// function permuntation(str1){

// }

// console.log(permutation(str1))
