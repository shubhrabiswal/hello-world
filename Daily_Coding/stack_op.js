//Implement a stack that has push(val), pop(), max() operations
// Each method should run in constant time

function Stack() {
    // console.log(arguments)
    let stack = arguments[0]
   
    this.add = function(ele){
      stack.push(ele)
    }

    this.remove = function(){
        if(stack.length == 0){
            return null
        }else{
            stack.pop()
        }
    }
    this.max = function(){
        if(stack.length == 0){
            return null
        }else{
            let max_val = stack.reduce(function(a, b) { 
                return Math.max(a, b);
            }, 0);
            return max_val
        }

    }
    this.show = function(){
        console.log(stack)
    }
  }
  
let st1 = new Stack([1,2,3])
st1.show()
st1.add(4)
st1.show()
st1.remove()
st1.show()
// st1.max()
// st1.show()
console.log(st1.max())