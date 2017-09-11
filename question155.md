Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = [];
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack[this.stack.length] = x;
    const minNum = this.getMin();

    if(minNum === undefined || minNum >= x) {
        this.min.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const y = this.stack.pop();
    if(y === this.getMin()) {
        this.min.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1];
    } else {
        return null;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
 ```
