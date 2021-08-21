// Given an array of numbers, find the maximum sum of any contiguous subarray of the array. For example, given the array [34,-50,42,14,-5,86], the maximum sum would be 137, 
// since we would take elements 42,14,-5,86. Given the array [-5,-1,-8,-9], the maximum sum would be 0,since we would not take any elements.

function subarray_sum_max(arr){
    // let temp = arr[i]
    let temp=0
    let max_limit = -(Number.MIN_VALUE) // Number.MIN_VALUE gives the smallest positive numeric value representable in JavaScript.
    for(let i=0;i<arr.length;i++){
        temp = temp+arr[i]
        if(max_limit<temp){
            max_limit = temp
        }
        if(temp<0){
            temp = 0
        }
        
    }
    if(max_limit>0){
        return max_limit
    }else{
        return 0
    }
    
}

console.log(subarray_sum_max([34,-50,42,14,-5,86]));
console.log(subarray_sum_max([-5,-1,-8,-9]));
