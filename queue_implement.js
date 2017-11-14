function Node(val) {
  this.val = val;
  this.next = null;
}

function Queue() {
  this.first = null;
  this.last = null;
  this.length = 0;
}

Queue.prototype.enqueue = function(value) {
  var newEle = new Node(value);

  if(this.last == null) {
    this.last = newEle;
  } else {
    this.last.next = newEle;
    this.last = newEle;
  }
  if(this.first == null) {
    this.first = newEle;
  }
  this.length += 1;
}

Queue.prototype.dequeue = function() {
  var element = null;

  if(this.first !== null) {
    element = this.first.val;
    this.first = this.first.next;
    this.length -= 1;
  }
  return element;
}

Queue.prototype.isEmpty = function() {
  return first == null;
}
