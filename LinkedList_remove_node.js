class LinkedList{
	constructor(head=null){
		this.head=head
	}
	
}

class ListNode{
	constructor(data){
		this.data = data
		this.next = null
	}
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(6);
node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);
console.log("list,,,,,,",list)
// console.log(list.head.next.data)

function size(list) {
    let count = 0; 
    let node = list.head;
	// console.log("head.....",node)
    while ("node",node) {
        count++;
        node = node.next
    }
    return count;
}

function remove(node){
	// console.log("nn",node)
	// console.log()
	if(node.next == null){
		node.head = null
		console.log("node",node)
	}else{
		console.log("here",node)
	 	this.head=node.next
		console.log("after",node)
		
	 }
}

console.log("list",list)
remove(node2)
console.log("list............\n",list,"\n...........................")
console.log("list",size(list))



