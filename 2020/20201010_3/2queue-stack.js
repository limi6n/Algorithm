/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.org = [];
  this.temp = [];
};
 
/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  console.log(this.org);
  if (this.org.length == 0) {
    this.org.push(x);
  } else {
    while (this.org.length != 0) {
      this.temp.push(this.org.pop());
    }
    this.org.push(x);
    while (this.temp.length != 0) {
      this.org.push(this.temp.pop());
    }
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  console.log(this.org);
  return this.org.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.org[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.org.length + this.temp.length == 0 ? true : false;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
