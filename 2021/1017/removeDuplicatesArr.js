/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 잘 못푼 방법이라는 의견들이 다수
  //   nums.splice(0, nums.length, ...new Set(nums));

  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != nums[i]) nums[++i] = nums[j];
  }
  return ++i;
};
