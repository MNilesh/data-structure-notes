// Stack using array
function Stack(size)
{
    //check if size is a number or not.


    this.st = new Array(size);
    this.top = -1;
    this.size = size;
}


Stack.prototype.push = function(val)
{
    if(this.top == this.size)
    {
      return 'Stack overflow';
    }

    this.st[++this.top] = val;
}

Stack.prototype.pop= function()
{
  if(this.top == -1)
  {
    return 'Stack Empty';
  }

  delete this.st[this.top--];

}


Stack.prototype.peek = function(value){
}

Stack.prototype.display = function(){
  for (let i = 0; i <= this.top; i++) {
    console.log(this.st[i]);
  }

}

Stack.prototype.recursivedisplay = function(i){
  let k = i;
  if(i > this.top)
  {
    return
  }
  else{

    this.recursivedisplay(++i);
    console.log(this.st[k]);

  }
}

Stack.prototype.top = function(){
    return this.st[this.top];
}

Stack.prototype.isEmpty = function(){
  if(this.top == -1)
  return 'Stack is Empty';

}


let stack = new Stack(10);
stack.push(11);
stack.push(12);
stack.push(13);
stack.push(14);
stack.push(15);
// stack.pop();
stack.recursivedisplay(0);
console.log(stack);
