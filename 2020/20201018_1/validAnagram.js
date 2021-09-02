/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  var sArr = s.split("").sort();
  var tArr = t.split("").sort();

  if (sArr.length != tArr.length) return false;
  else {
    var fArr = [];
    for (i in sArr) {
      if (sArr[i] != tArr[i]) fArr.push(i);
    }

    if (fArr.length == 0) return true;
    else return false;
  }
}; 

module.exports = isAnagram;
