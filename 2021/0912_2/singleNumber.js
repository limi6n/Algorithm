/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((prev, curr) => prev ^ curr);
};

module.exports = singleNumber;
