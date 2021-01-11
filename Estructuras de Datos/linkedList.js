//Francisco Arturo Licón Colón.
//Estructura de datos lista ligada simple.

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.size = 0;
        this.head = null;
    }

    add(value){
        let size= this.size;
        let currentNode = this.head;
        let newNode = new Node(value);

        if(!currentNode){
            this.head = newNode;
            this.size++;
            return newNode;
        }
        
        while(currentNode.next){
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
        this.size++;
        return newNode;
    }

    search(value){
        let currentNode = this.head;
        let message = {notFound:'No se encuentra el valor'};
        if(!currentNode){
            return message.notFound;
        }
        while(currentNode.next){
            if(currentNode.data === value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        if(currentNode.data === value){
            return currentNode;
        }
        return message.notFound;
    }

    remove(value){
        let currentNode = this.head;
        let prevNode = null;
        let message = {notFound: 'No se encontro el valor a eliminar', delete:'Se ha eliminado correctament'};
        if(currentNode.data === value){
            this.head = currentNode.next;
            this.size--;
            return message.delete;
        } else {
            while(currentNode.next){
                prevNode = currentNode;
                currentNode = currentNode.next;
                if(currentNode.data === value){
                    prevNode.next = currentNode.next;
                    this.size--;
                    return message.delete;
                }
            }
        }
        return message.notFound; 
    }

}

linkedList = new SinglyLinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.remove(1);
linkedList.search(2);