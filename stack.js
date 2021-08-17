// #################################################################
// Write a push method that pushes an element to the top of the stack, a pop method that removes and returns the element on the top of the stack, a peek method that looks at the top element in the stack, an isEmpty method that checks if the stack is empty, and a clear method that removes all elements from the stack. Normally stacks don't have this, but we've added a print helper method that console logs the collection.
// #################################################################
function Stack() {
  console.log(arguments)
  var collection = arguments[0]
  // var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.push = function(ele){
    collection.push(ele)
  }
  this.pop = function(){
    collection.pop()
  }
  this.peek = function(){
    var val = collection[collection.length-1]
    return val
  }
  this.isEmpty = function(){
    if(collection.length === 0){
      return true
    }else{
      return false
    }
  }
  this.clear = function(){
    collection.length = 0
  }
  // Only change code above this line
}

let st1 = new Stack(["a","b","c"])
st1.print()
st1.push("d")
st1.print()
st1.pop()
st1.print()
console.log(st1.peek())
console.log(st1.isEmpty())
st1.clear()
st1.print()


// ##########################
// QUEUE functions
// #######################
function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = function(ele){
    // console.log(collection)
    collection.push(ele)
    return collection
  }
  this.dequeue = function(){
    const e1 = collection.splice(0,1);
    return e1[0]
  }
  this.size = function(){
    return collection.length
  }
  this.isEmpty = function(){
    return collection.length === 0;
  }
  this.front = function(){
    return collection[0]
  }
  // Only change code above this line
}


// #############
// ### PriorityQueue Functions
// #################################
function PriorityQueue () {
  this.collection=[];
  // this.collection = arguments[0]
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function(ele){
    this.collection.push(ele)
    var temp
    for(let i=0;i<this.collection.length;i++){
      for(let j=0;j<this.collection.length-1;j++){
        if(this.collection[j][1]>this.collection[j+1][1]){
          temp = this.collection[j]
          this.collection[j] = this.collection[j+1]
          this.collection[j+1] = temp
        }
      }  
    }
    return this.collection
    }
  this.dequeue = function(){
      const e1 = this.collection.splice(0,1);
      return e1[0][0]
    }
  this.size = function(){
      return this.collection.length
    }
  this.front = function(){
    return this.collection[0][0]
    }
  this.isEmpty = function(){
    return this.collection.length === 0;
  }
  // Only change code above this line
}

// let pq1 = new PriorityQueue([['kitten', 2], ['dog', 2], ['rabbit', 2]])
// pq1.enqueue(['human', 1])
pq1.printCollection()
