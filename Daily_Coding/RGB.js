// Given an array of strictly the characters 'R','G','B', segregate values of array so that all Rs come first, the Gs come second and the Bs come last.
// for inp--> ['G','B','R','R','B','R','G'], output should be ['R','R','R','G','G','B','B']
//

function RGB_sort(arr){
    let temp
    for(let i=0;i<arr.length;i++){
        temp = arr[i]
        let j = i-1;
        while((j>-1) && temp.charCodeAt()>arr[j].charCodeAt()){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = temp
    }
    return arr
}

console.log(RGB_sort(['G','B','R','R','B','R','G']))
