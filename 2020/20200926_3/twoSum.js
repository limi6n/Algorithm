/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  var result = [];
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      sum = numbers[i] + numbers[j];

      if (target == sum) {
        result.push(i + 1);
        result.push(j + 1);
      }
    }
  }

  return result;
};

module.exports = twoSum;
