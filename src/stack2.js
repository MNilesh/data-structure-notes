function Node(value)
{
  this.value = value;
  this.next = null;
}


function Stack(){
    this.top = null;
}


Stack.prototype.push = function(val)
{
  let node = new Node(val);
  node.next = this.top;
  this.top = node;

}

Stack.prototype.pop= function()
{
  //check for base condn if stack is empty. after checking then proceed.
    let pointer = this.top;
    this.top = this.top.next;
    pointer.next = null;

}


Stack.prototype.peek = function(value){
}

Stack.prototype.display = function(){

}

Stack.prototype.recursivedisplay = function(i){

}

Stack.prototype.top = function(){

}

Stack.prototype.isEmpty = function(){

}



let stack = new Stack(10);
stack.push(11);
stack.push(12);
stack.push(13);
stack.push(14);
stack.pop();
console.log(stack);
