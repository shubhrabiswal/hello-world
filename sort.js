### SELECTION sort

function selectionSort(array) {
  // Only change code below this line
  for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
      if(array[j] > array[j+1]){
        var temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
  }
  console.log(array)
  return array;
  // Only change code above this line
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);


### Bubble Sort 

function bubbleSort(array) {
  // Only change code below this line
  for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length-i-1;j++){
      if(array[j] > array[j+1]){
        var temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
      console.log(array)
    }
    
  }
  console.log(array)
  return array;
  // Only change code above this line
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);


### INSERTION SORT

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curr;
  }
  console.log(array)
  return array;
  // Only change code above this line
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
____________________________________________________________________________________________________________
function insertionSort(array) {
  // Only change code below this line
  var ele = array[0]
  for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
      if(array[j] < array[i]){
        var temp = array[j]
        array[j] =array[i]
        array[i] =temp
      }
      console.log(array)
    }
  }
  console.log(array)
  return array;
  // Only change code above this line
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
____________________________________________________________________________________________________________
