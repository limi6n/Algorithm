/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const stringX = x.toString();
  const reverseX = stringX.split("").reverse().join("");

  return stringX === reverseX ? true : false;
};

module.exports = isPalindrome;
