/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const low = 0;
  const high = nums.length - 1;
  return binarySearch(nums, target, low, high);
};

function binarySearch(arr, target, start, end) {
  if (start > end) return start;

  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;

  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  }

  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  }
}

module.exports = searchInsert;
