//Given an array of integers & a number k where 1<=k<=length of the array.
//Compute the maximum value of each sub array of length k 
//array=[10,5,2,7,8,7] , k=3, we should get [10,7,8,8] Since
//      10=max(10,5,2)
//      7=max(5,2,7)
//      8=max(2,7,8)
//      8=max(7,8,7)

function get_Subarray_Max(arr,k){
	let op = []
	let subarr = []
	for(let i=0;i<=arr.length-k;i++){
		let temp = arr[i]
		for(let j=1;j<k;j++){
			if(temp<arr[i+j]){
				temp = arr[i+j]
			}
		}
		op.push(temp)
		console.log(temp)
	}
	return op
}

console.log(get_Subarray_Max([10,5,2,7,8,7],3))
