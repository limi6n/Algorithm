/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  var result = [];
  var odd = [];
  var even = [];
  var iEven = 0;
  var iOdd = 1;

  for (var i in A) {
    if (i % 2 == 0) {
      even.push(A[i]);
    } else {
      odd.push(A[i]);
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      result[iEven] = A[i];
      iEven += 2;
    } else if (A[i] % 2 === 1) {
      result[iOdd] = A[i];
      iOdd += 2;
    }
  }

  return result;
};

module.exports = sortArrayByParityII;
