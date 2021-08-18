// Given an array of strictly the characters 'R','G','B', segregate values of array so that all Rs come first, the Gs come second and the Bs come last.
// for inp--> ['G','B','R','R','B','R','G'], output should be ['R','R','R','G','G','B','B']
//

function RGB_sort(arr){
    let temp;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i].charCodeAt() < arr[j].charCodeAt()){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(RGB_sort(['G','B','R','R','B','R','G']))
