// ### Given an array  of  integers and a number, , perform  left rotations on the array. 
// Return the updated array to be printed as a single line of space-separated integers.

function rotLeft(a, d) {
    for(let i=0;i<d;i++){
        let ar1=a.splice(1)
        ar1.push(a[0])
        a=ar1
    }
    return a
}

rotateLeft([1,2,3,4,5],4)
