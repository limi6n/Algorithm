/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
  var result = 0;

  A.sort((a, b) => b - a);

  for (var i = 0; i < A.length - 2; i++) {
    if (A[i + 1] + A[i + 2] > A[i]) {
      result = A[i] + A[i + 1] + A[i + 2];
      break;
    }
  }

  return result;
};

module.exports = largestPerimeter;
