//Determine how "out of order" an array A is by counting the number of inversions it has. 
//A[i] & A[j] form an inversion if A[i] > A[j] but i<j.

function out_of_order(arr){
    let inv = 0
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] > arr[j] && i<j){
                inv++
            }
        }
    }

    return inv
}

console.log(out_of_order([2,4,1,3,5]))
console.log(out_of_order([5,4,3,2,1]))
console.log(out_of_order([1,2,3,4,5]))

