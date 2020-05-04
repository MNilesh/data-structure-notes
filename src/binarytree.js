//Queue.
function Node(value)
{//for giving the node of a queues.
  this.value = value;
  this.next = null;
}

function BinaryNode(value)
{//for giving the node of a binary tree.
  this.left = null;
  this.right = null;
  this.value = value;
}


// ========================STACK========================

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
    if(this.top == null)
    {
      return null;
    }
    let pointer = this.top;
    this.top = this.top.next;
    pointer.next = null;
    return pointer;
}

Stack.prototype.isEmpty = function(){
    if(this.top == null)
      return true;
}
// ========================STACK========================

// ========================QUEUE========================
function Queue()
{
    // if(value == '' || value == undefined)
    // {
    //   throw new Error('Value is required');
    // }
  //  let node = new Node(value);
    this.front = this.rear = null;
    this.length = 0;
}


Queue.prototype.enQueue = function(value)
{
    let node = new Node(value);
    if(node == null)
    {
      return 'Queue Full';
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

Queue.prototype.deQueue = function()
{
    let pointer;
    pointer = this.front;
    value = pointer.value;
    this.front = pointer.next;
    this.length--;
    return pointer.value;
}

Queue.prototype.isEmpty = function(){
  if(!this.front)
  {
    return true;
  }
}
// ========================QUEUE========================

// ========================BINARY TREE========================
function BinaryTree()
{
  this.root = null;
  this.tree = null;
}

BinaryTree.prototype.create = function(value)
{
  //creating a btree using queue.
  let temp, curr = null;
  let q = new Queue();

  this.root = new BinaryNode(value);
  q.enQueue(this.root);

  while(!q.isEmpty())
  {
        let current, tempNode, value;
        current = q.deQueue();
        value = window.prompt('Enter Left Child of '+current.value);
        if(value != -1)
        {
          tempNode = new BinaryNode(value);
          current.left = tempNode;
          q.enQueue(tempNode);
        }

        value = window.prompt('Enter Right Child of '+current.value);
        if(value != -1)
        {
          tempNode = new BinaryNode(value);
          current.right = tempNode;
          q.enQueue(tempNode);
        }
  }
}

BinaryTree.prototype.inorder = function(pointer)
{
    if(pointer)
    {
      this.inorder(pointer.left);
      console.log(pointer.value);
      this.inorder(pointer.right);
    }
}

BinaryTree.prototype.preorder = function(pointer)
{
    if(pointer)
    {
      console.log(pointer.value);
      this.preorder(pointer.left);
      this.preorder(pointer.right);
    }
}

BinaryTree.prototype.postorder = function(pointer)
{
    if(pointer)
    {
      this.postorder(pointer.left);
      this.postorder(pointer.right);
      console.log(pointer.value);
    }
}



BinaryTree.prototype.iterativePre = function(root){
    let st, current;

    st = new Stack();
    st.push(root);

    while(!st.isEmpty())
    {
      current = st.pop().value;
      console.log(current.value);
      if(current.right)
      {
        st.push(current.right);
      }
      if(current.left)
      {
        st.push(current.left);
      }
    }
}

// ========================BINARY TREE========================


var btree = new BinaryTree();
btree.create(5);
console.log(btree.root);
btree.iterativePre(btree.root);
// btree.inorder(btree.root);
// console.log('======================');
// btree.preorder(btree.root);
// console.log('======================');
// btree.postorder(btree.root);
// var q = new Queue();
//
// q.enQueue('r29');
//
// q.enQueue('r26');
// q.enQueue('r21');
// //
// q.deQueue();
//
// console.log(q);
