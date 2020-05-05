//Circular Queue.

function Queue(size){
    this.queue = new Array(size);
    this.front = this.rear = 0;

}

Queue.prototype.enqueue = function(value)
{
    if(((this.rear + 1) % this.queue.length) == this.front)
    {
        return 'Queue is full';
    }
    else
    {
      this.rear = (this.rear+1) % this.queue.length;
      this.queue[this.rear] = value;
    }
}



Queue.prototype.dequeue = function(){
    if(this.front == this.rear)
      return 'Queue Empty';

    this.front = (this.front + 1) % 7;
    delete this.queue[this.front];


}


Queue.prototype.isEmpty = function(value){
    if(this.rear== this.full)
    {
      return 'Queue empty';
    }
}


Queue.prototype.isFull = function(value){
  if((this.rear + 1 % this.queue.length ) == this.front )
  {
    return 'Queue is Full';
  }

}

Queue.prototype.first = function(value){

}

Queue.prototype.last = function(value){

}

var q = new Queue(10);

q.enqueue('r29');

q.enqueue('r26');
q.enqueue('r21');

q.dequeue();
q.enqueue('r29');

q.enqueue('r28');
q.enqueue('r254');
q.enqueue('r2965');

q.enqueue('r26rte');
q.enqueue('r2gr1');

q.enqueue('xxx');
q.enqueue('rrr');
console.log(q);
