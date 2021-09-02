/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();

  for (let i = 0; i < nums2.length; i++) {
    let val = -1;

    for (let j = i + 1; j < nums2.length; j++) {
      if (nums2[j] > nums2[i]) {
        val = nums2[j];
        break;
      }
    }

    map.set(nums2[i], val);
  }

  return nums1.map((item) => map.get(item));
};

// var nextGreaterElement = function (nums1, nums2) {
//   var result = [];

//   for (i in nums1) {
//     var val = -1;
//     for (var j in nums2) {
//       if (nums1[i] < nums2[j]) {
//         val = nums2[j];
//         break;
//       }
//     }
//     result.push(val);
//     nums2.shift();
//   }

//   return result;
// };

module.exports = nextGreaterElement;
