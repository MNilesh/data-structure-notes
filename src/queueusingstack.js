//Queue using stack stack using LL.
function Node(value)
{
  this.value = value;
  this.next = null;
}

function Stack()
{
  this.top = null;
}


Stack.prototype.push = function(val)
{
  let node = new Node(val);
  node.next = this.top;
  this.top = node;
  // return this.
}

Stack.prototype.pop= function()
{
  //check for base condn if stack is empty. after checking then proceed.
    let pointer = this.top;
    this.top = this.top.next;
    pointer.next = null;

}


function SQueue()
{
    // this.front = this.rear = null;
    this.s1 = new Stack();//for inserting.
    this.s2 = new Stack();//for transferring and popping.
    this.length = 0;
}

SQueue.prototype.enSQueue = function(value)
{
    // if(this.s1.top == null && this.s2.top == null)
    // {
    //     this.s1.push(value);
    // }

    this.s1.push(value);
}



SQueue.prototype.deSQueue = function()
{
    if(this.s2.top == null)
    {
      if(this.s1.top == null)
      {
        return 'Queue is empty';
      }
      let p = this.s1.top;

          while(p){
            console.log(p);
            this.s2.push(p.value);
            this.s1.pop();
            p = this.s1.top;
          }

    }
    console.log(this.s1);
    console.log(this.s2);
    this.s2.pop();
}


SQueue.prototype.isEmpty = function(value){}


SQueue.prototype.isFull = function(){}

SQueue.prototype.first = function(){}

SQueue.prototype.last = function(){}

var q = new SQueue();

q.enSQueue('r29');

q.enSQueue('r26');
q.enSQueue('r21');
//
 q.deSQueue();
  q.deSQueue();
// q.enSQueue('r29');
//
// q.enSQueue('r28');
// q.enSQueue('r254');
// q.enSQueue('r2965');
//
// q.enSQueue('r26rte');
// q.enSQueue('r2gr1');
//
// q.enSQueue('xxx');
// q.enSQueue('rrr');
console.log(q);
