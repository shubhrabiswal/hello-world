// Imagine you have array of integer from 1 to 100 , the numbers are randomly ordered
// , one number from 1 to 100 is missing , Please write the code for finding the missing
// number

/* find_missing(arr) returns the missing number from the array*/

function find_missing(arr){
    let n = arr.length+1
    arr= arr.sort(function(a,b){
        return a-b
    })

    for(let i=1;i<=n;i++){
        if(i != arr[i-1]){
            return i
        }
    }
}

/* random_array(n) function generates an array of 
 *  99 unique numbers from 1 to 100, while 1 number is missing
*/
function random_array(n){
    let arr1 = []
    while(arr1.length<n-1){
        let num =Math.floor(Math.random() * n )+ 1
        if(arr1.includes(num) == false ){
            arr1.push(num)
        }
    }
    return arr1
}
let arr = random_array(100)
console.log(arr,arr.length)
console.log(find_missing(arr))
// let arr = [1, 2, 7, 9, 3, 4, 5, 8, 10];
