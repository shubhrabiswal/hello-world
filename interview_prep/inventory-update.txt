function updateInventory(arr1, arr2) {
    
    for(let subar2 of arr2){
        let temp = subar2[1]
        let amount = subar2[0]
        let count = arr1.length
        for(let subar1 of arr1 ){
            if(temp == subar1[1]){
                subar1[0] += amount 
            }else{
                count--
            }
        }
        if(count == 0){
            arr1.push(subar2)
        }
    }
    arr1 = arr1.sort(function(a, b) {
    if(a[1] < b[1]) { return -1; }
    if(a[1] > b[1]) { return 1; }
    return 0;
})
    console.log(arr1)
    return arr1;
}
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
// Example inventory lists
// var curInv = [
//     [21, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [5, "Microphone"]
// ];

// var newInv = [
//     [2, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [67, "Bowling Ball"],
//     [7, "Toothpaste"]
// ];

// updateInventory(curInv, newInv);