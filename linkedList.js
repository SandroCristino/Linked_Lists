class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add node to end 
    append(value) {
        const node = new Node(value);
        if (this.head == null) this.head = node;
        else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    //Add node to start
    prepend(value) {
        const node = new Node(value);
        if (this.head == null) this.head = node;
        else {
            node.next = this.head;
            this.head = node
        }
        this.size++;
    }

 

    //Return the first node in the list
    getHead() {
        if (this.head == null) return null;
        return this.head.value;
    }

    //Return the last node in the list
    getTail() {
        if (this.head == null) return null;
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            return current.value
        
    }

    //Return node at given index
    at(index) {
        if (index < 0 || index > this.size - 1) throw new Error('Index out of range');
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next
            }
            return current.value;
        
    }

    //Removes last node from list
    pop() {
        if (this.head == null) return null;

        let current = this.head;
        let previous = null;
        while (current.next != null) {
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        this.size--;
        
    }

    //Returns true if value is in the list
    contains(value) {
        if (this.head == null) return null;
        let current = this.head;
        while (current.next != null) {
            if (current.value == value) return true;
            current = current.next;
        }
        
        return false
    }

    //Return index of value or null if not found
    find(value) {
        if (this.head == null) return null;
        let index = 0;
        let current = this.head;
        while (current.next != null) {
            if (current.value == value) return index;
            index++;
            current = current.next;
            
        }
    
        return null;
    }

    //Print it to string
    toString() {
        let string = '';
        if (this.head != null) {
            let current = this.head;
            while (current != null) {
                string += `( ${current.value} ) -> `;
                current = current.next;
            }
        }
        return string + 'null'
    }

    //Insert a value into specific index
    insertAt(value, index) {
        const node = new Node(value)
        if (index > this.size || index < 0) throw new Error('Index out of range')

        if (index == 0) {
            node.next = this.head;
            this.head = node;
            this.size++;
        }

        let current = this.head;
        let previous = null;
        for (let i = 0; i <= index; i++) {
            previous = current;
            current = current.next;
            if (i == index - 1) {
                node.next = current;
                previous.next = node
                this.size++;
                break;
            }
            
        }
    }

    //Remove the node at given index
    removeAt(index) {
        if (index > this.size - 1 || index < 0) throw new Error('Index out of range');

        if (index == 0) {
            this.head = this.head.next
            this.size--;
            return;
        }

        let current = this.head;
        let previous = null;
        for (let i = 0; i <= index - 1; i++) {
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        this.size--;
    }
}

const list = new LinkedList;

list.append(3);
list.append(4);
list.prepend(2);
console.log(list.pop())
console.log(list.toString())