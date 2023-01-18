
class Node {

    constructor(value) {

        this.value = value;
        this.next = null;
        this.previeus = null
    }

}

class DoublyLinkedList {
    constructor() {

        this.head = null;
        this.tail = null;
        this.size = 0
    }

    isEmpty(){
        return this.size===0
    }
    getSize (){
        return this.size;
    }

    //add front end

    prepend(value) {
        let newNode = new Node(value)

        if (this.isEmpty()) {

            this.head=newNode;
            this.tail=newNode
            
        }
        else{

            newNode.next=this.head;
            this.head.previeus=newNode
            this.head=newNode
        }
        this.size++;


    }

        //add last end

    append(value) {

        let newNode = new Node(value)

         if (this.isEmpty()) {

            this.head=newNode;
            this.tail=newNode
            
        }
        else{

            this.tail.next=newNode;
            newNode.previeus=this.tail
            this.tail=newNode

        }
        this.size++;


    }

    print(){
        if (this.isEmpty()) {

            console.log("list is empty!")
            
        }
        else{
            let current=this.head
            while (current) {
                console.log(current.value);
                current=current.next;   
            }
          
        }
    }

    reverse (){

        let previeus=null
        let current=this.head
        while(current){
            let next= current.next
            current.next=previeus
            previeus=current
            current=next
        }
        this.head=previeus
    }


}



let DoublyLinkedListObj= new DoublyLinkedList()

DoublyLinkedListObj.append(10)
DoublyLinkedListObj.append(20)
DoublyLinkedListObj.append(30)
DoublyLinkedListObj.append(40)
DoublyLinkedListObj.prepend(50)
DoublyLinkedListObj.reverse(50)





DoublyLinkedListObj.print()