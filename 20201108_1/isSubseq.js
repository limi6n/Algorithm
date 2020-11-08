/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  var i = 0;
  var result = "";

  for (var j = 0; j < t.length; j++) {
    if (t[j] === s[i]) {
      result += t[j];
      i++;
    }
  }
  return result === s;
};

module.exports = isSubsequence;
