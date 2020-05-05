// var arr = new Array()

var array = [4, 7, 6, 7, 8, 9];
var sorted = [2, 5, 7, 8, 9, 11, 13, 21, 34, 43, 45, 52, 78];

Array.prototype.myprint = function() {
  //o(n)
  for (var i = 0; i < this.length; i++) {
    console.log(this[i]);
  }
}

Array.prototype.myappend = function(num) {
  //o(1)
  this[this.length] = num;
  console.log(this);
  // this.length++ automatic ho jaega.
}

Array.prototype.myinsert = function(val, index) {
  //o(n) - worst case. insert at index 1.
  i = this.length;
  if (index < 0 || index > this.length) {
    console.error('Invalid Index');
  }
  while (i != index) {
    this[i] = this[--i];
  }
  this[index] = val;
  console.log(this);
}

Array.prototype.mydelete = function(index) {
  //o(n)
  //check for invalid index.

  //shifting.
  for (var i = index; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }
  this.pop();
  console.log(this);
}

Array.prototype.linearSearch = function(val) {
  // best - o1
  // worst -on
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) {
      // we will use Transposition
      if (i) {
        temp = this[i];
        this[i] = this[i - 1];
        this[i - 1] = temp;
      }

      return i;
    }
  }
  return -1;
}

Array.prototype.binarySearch = function(val) {
  //For this array must be sorted compulsory.

  let low = 0,
    high = this.length - 1,
    mid = calcMid(low, high);
    console.log(low, mid, high);
  while (low < high) {
    if (this[mid] == val) {

      return mid;
    }
    else {
      if (this[mid] > val) {
        // move high to mid - 1; and re-calculate mid using new high.
        high = mid - 1;
        mid = calcMid(low, high);
      }
      else {
        // move low to mid + 1; and re-calculate mid using new low.
        low = mid + 1;
        mid = calcMid(low, high);
      }
    }

  }
return -1;
}

function calcMid(l, h) {
  return Math.ceil((l + h) / 2)
}

// array.myprint();
// array.myappend(65);
// array.myinsert(56, 3);
// array.mydelete(4);
// console.log(array.linearSearch(8));
console.log(sorted);
console.log(sorted.linearSearch(51));
console.log(sorted.binarySearch(78));

// Array.prototype. = function()
// {
//
// }

// for (var i = 0; i < array.length; i++) {
//   array[i]
// }

// while () {
//
// }
// if()
// {
//
// }
// else{
//
// }
