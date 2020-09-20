/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var arr = [];

  for (var i = 0; i < numRows; i++) {
    var item = [];

    for (var j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        item.push(1);
      } else {
        var current = arr[i - 1][j - 1] + arr[i - 1][j];
        item.push(current);
      }
    }
    arr.push(item);
  }
  return arr;
};

module.exports = generate;
