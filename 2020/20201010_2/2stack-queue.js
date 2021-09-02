/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.org = [];
  this.temp = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.org.push(x);
}; 

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.temp.length == 0) {
    while (this.org.length != 0) {
      this.temp.push(this.org.pop());
    }
  }
  return this.temp.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.temp.length == 0) {
    while (this.org.length != 0) {
      this.temp.push(this.org.pop());
    }
  }
  return this.temp[this.temp.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.org.length + this.temp.length == 0 ? true : false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
