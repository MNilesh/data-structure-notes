function DoublyLinkedList(value)
{
    let node = new Node(value);

    this.head = node;
    this.tail = node;
    this.length = 1;
}


function Node(value){
  this.previous = null;
  this.next = null;
  this.value = value;
}


DoublyLinkedList.prototype.insert = function(index, value)
{
  if(index > this.length || index < 0)
    return

  let node = new Node(value);

  if(index == 0)
  {
    //  o --> two --> 3 --> four --> five
  //0      1       2     3        4
  node.next = this.head;
  this.head = node;
  }

  else if (index == this.length) {
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
    console.log(this.tail);
  }

  this.length++;
}

DoublyLinkedList.prototype.display = function(order){

    if(order)
    {//1 ascending
      let pointer = this.head;
      while(pointer)
      {
        console.log(pointer.value);
        pointer = pointer.next;
      }
    }
    else{//0 desc
      let pointer = this.tail;
      while(pointer)
      {
        console.log(pointer.value);
        pointer = pointer.previous;
      }
    }
}

DoublyLinkedList.prototype.recursiveDisplay = function(pointer)
{
      if(pointer)
      {
        this.recursiveDisplay(pointer.next);
        console.log(pointer.value);

      }
}



let ll = new DoublyLinkedList('one');
ll.insert(1,'two');
ll.insert(2,'three');
ll.insert(3,'four');
ll.insert(4,'five');
// ll.insert(2,'midme');
console.log(ll);
ll.recursiveDisplay(ll.head);
