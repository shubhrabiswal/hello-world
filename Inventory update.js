//##############################################
//### Inventory Update ###      ////////////////need to check the code---------TypeError: Cannot read property '1' of undefined
//Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). 
//If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
//##############################################
function updateInventory(arr1, arr2) {
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            // console.log(arr1[i][1])
            if(arr2[j][1]!==arr1[i][1]){
                arr1.push(arr2[i])

            }else{
              arr1[0]=arr1[0]+arr2[0]
            } 
        }
    }
    // console.log(arr1[0][1])
    console.log(arr1.length)
    return arr1;
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];
var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
updateInventory(curInv, newInv);
// console.log(updateInventory(curInv, newInv));
