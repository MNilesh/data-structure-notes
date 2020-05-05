function CircularDoublyLinkedList(value)
{
    let node = new Node(value);
    this.head = node;
    this.head.previous = this.head;
    this.head.next = this.head;
    this.tail = this.head;
    this.length = 1;
}


function Node(value){
  this.previous = null;
  this.next = null;
  this.value = value;
}


CircularDoublyLinkedList.prototype.insert = function(index, value)
{
  //Default case.
    if(index < 0 || index > this.length)
      return;
    let node = new Node(value);
    if(index == this.length || index == 0)
    {
        this.tail.next = node;
        node.previous = this.tail;
        node.next = this.head;
        this.head.previous = node;
        this.tail = node;
    }
    else{

      pointer = this.head;
      //  o --> two --> 3 --> four --> five
      //0      1       2     3        4
      for (let i = 1; i < index; i++) {
          pointer = pointer.next;
      }

      node.previous = pointer;
      node.next = pointer.next;
      pointer.next.previous = node;
      pointer.next = node;
      // node.previous = pointer;

    }

    this.length++;
}

CircularDoublyLinkedList.prototype.display = function(order){
}

CircularDoublyLinkedList.prototype.recursiveDisplay = function(pointer)
{}



let ll = new CircularDoublyLinkedList('one');
ll.insert(1,'two');
ll.insert(2,'three');
ll.insert(3,'four');
ll.insert(4,'five');
ll.insert(2,'midme');
console.log(ll);
