#################################################################
Write a push method that pushes an element to the top of the stack, a pop method that removes and returns the element on the top of the stack, a peek method that looks at the top element in the stack, an isEmpty method that checks if the stack is empty, and a clear method that removes all elements from the stack. Normally stacks don't have this, but we've added a print helper method that console logs the collection.
#################################################################
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
