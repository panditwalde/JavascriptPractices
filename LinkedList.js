class Node {

    constructor(value) {

        this.value = value
        this.next = null
    }
}



class LinkedList {

    constructor() {

        this.head = null;
        this.tail = null;
        this.size = 0
    }

    isEmpty() {

        return this.size === 0
    }

    getSize() {

        return this.size
    }


    prepend(value) {
        let node = new Node(value);

        if (this.isEmpty()) {
            this.head=node
            this.tail=node
            
        }
        else{
            node.next=node;
            this.head=node

        }

        this.size++;
    }


    append(value) {
        let node = new Node(value);

        if (this.isEmpty()) {
            this.head=node
            this.tail=node
            
        }
        else{
            this.tail.next=node
            this.tail=node

        }
        this.size++;
    }


    print() {

        if (this.isEmpty) {
            console.log("empty list");
            
        }
        else {

            let current = this.head
        while (current) {

            console.log(current.value)
            current = current.next

        }

            
        }

        
    }
}




let LinkedListObj = new LinkedList();


LinkedListObj.prepend(10)
LinkedListObj.prepend(20)


LinkedListObj.print()

LinkedListObj.append(30)

LinkedListObj.print()




