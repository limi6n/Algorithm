/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  var result = [];

  nums1.forEach(function (num) {
    var i = nums2.indexOf(num);
    if (i > -1) result.push(nums2[i]);
  });

  return [...new Set(result)];
};

module.exports = intersection;
 