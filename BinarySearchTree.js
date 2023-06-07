
class Node {
    constructor(data) {

        this.data = data;
        this.left = null
        this.right = null;

    }

}


class BinarySerachTree {

    constructor(data) {
        this.root = null;
    }

    //insert node

    insert(data) {

        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode

        }
        else {
            this.insertNode(this.root, newNode)

        }

    }

    //insert node
    insertNode(node, newNode) {


        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode

            }
            else {
                this.insertNode(node.left, newNode)
            }

        }
        else {

            if (node.right === null) {

                node.right = newNode

            }
            else {
                this.insertNode(node.right, newNode)
            }

        }
    }
    //remove element 
    remove(data) {

        this.root = this.removeData(this.root, data)

    }

    removeData(node, key) {

        if (node === null) {
            return null

        }
        else if (key < node.data) {

            node.left = this.removeData(node.left, key)
            return node

        }
        else if (key > node.data) {
            node.right = this.removeData(node.right.key)
            return node
        }
        else {

            if (node.left === null && node.right === null) {
                node = null
                return node

            }
            else if (node.left === null) {

                node = node.right
                return node
            }

            else if (node.right === null) {
                node = node.left
                return node
            }
        }

    }

    inorder(node) {

        if (node !== null) {

            this.inorder(node.left)
            console.log(node.data);
            this.inorder(node.right)
        }

    }


    preorder(node) {

        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left)
            this.preorder(node.right)
        }

    }

    postorder(node) {

        if (node !== null) {
            this.preorder(node.left)
            this.preorder(node.right)
            console.log(node.data);

        }

    }
    getRootNode(){
    return this.root
    }
}



const obj = new BinarySerachTree()

obj.insert(10)
obj.insert(20)
obj.insert(30)

console.log("in order ==>")
obj.inorder(obj.getRootNode())
console.log("pre order ==>")
obj.preorder(obj.getRootNode())
console.log("post order ==>")
obj.postorder(obj.getRootNode())

