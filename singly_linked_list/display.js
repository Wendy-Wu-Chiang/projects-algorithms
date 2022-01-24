class SLLNode{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
class SLL {
    constructor(){
        this.head = null;
    }
    addFront(value){
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    display(){
        var listString = "";
        if (this.head ==  null){
            return "Empty list";
        }
        listString += this.head.value;
        var runner = this.head.next;
        while(runner != null){
            listString += "," + runner.value;
            runner = runner.next;
        }
        return listString;

    }
}
var mySLL = new SLL();
mySLL.addFront(7);
mySLL.addFront(7);
mySLL.display();
console.log(mySLL.display());