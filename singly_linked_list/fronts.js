class SLLNode{ // ssl node class
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SLL{ //sll class itself
    constructor(){ 
        this.head = null; 
    }

    addFront(value){
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    removeFront(){
        if (this.head == null){
            return this.head
        }
        var removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return this.head;
    }

    front(){
        if (this.head ==null){
            return null;
        }
        else{
            return this.head.value;
        }
    }
}
var mySLL = new SLL();
// mySLL.addFront(1);
// mySLL.addFront(2);
// mySLL.addFront(9);
console.log(mySLL.front());
// console.log(mySLL);
// mySLL.removeFront();
// console.log(mySLL);

