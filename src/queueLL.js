//QueueLL.
function Node(value)
{
  this.value = value;
  this.next = null;
}


function QueueLL()
{
    // if(value == '' || value == undefined)
    // {
    //   throw new Error('Value is required');
    // }
  //  let node = new Node(value);
    this.front = this.rear = null;
    this.length = 0;
}

QueueLL.prototype.enQueueLL = function(value)
{
    let node = new Node(value);
    if(node == null)
    {
      return 'QueueLL Full';
    }
    if(this.front == null)
    {
      this.rear = this.front= node;
    }
    else{
      this.rear.next= node;
      this.rear = node;
    }
    this.length++;

}



QueueLL.prototype.deQueueLL = function()
{
    let pointer = this.front;
    this.front = pointer.next;
    this.length--;
}


QueueLL.prototype.isEmpty = function(value){
  if(!this.front)
  {
    console.log('Queue is empty');
  }
}


QueueLL.prototype.isFull = function(){}

QueueLL.prototype.first = function(){
    console.log(this.front.value);
}

QueueLL.prototype.last = function(){
console.log(this.rear.value);
}

var q = new QueueLL();

q.enQueueLL('r29');

q.enQueueLL('r26');
q.enQueueLL('r21');
//
q.deQueueLL();
// q.enQueueLL('r29');
//
// q.enQueueLL('r28');
// q.enQueueLL('r254');
// q.enQueueLL('r2965');
//
// q.enQueueLL('r26rte');
// q.enQueueLL('r2gr1');
//
// q.enQueueLL('xxx');
// q.enQueueLL('rrr');
console.log(q);
