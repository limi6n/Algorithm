/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  var result = [];

  nums1.forEach(function (num) {
    var i = nums2.indexOf(num);
    if (i > -1) {
      result.push(nums2[i]);
      nums2.splice(i, 1);
    }
  });

  return result;
};

module.exports = intersect;
