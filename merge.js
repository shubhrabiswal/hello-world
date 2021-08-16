function merge(arr1,arr2){
    for(let ele of arr2){
        arr1.push(ele)
    }

    for(let i=0;i<arr1.length;i++){
        for(let j=i+1;j<arr1.length;j++){
            if(arr1[j] <arr1[i]){
                let temp = arr1[j]
                arr1[j] = arr1[i]
                arr1[i] = temp
            }
        }
    }
    return arr1
}

console.log(merge([2,3,4,5,6],[7,8,1]))
