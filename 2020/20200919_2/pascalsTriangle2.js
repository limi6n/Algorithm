/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  var arr = [];

  for (var i = 0; i <= rowIndex; i++) {
    var item = [];

    for (var j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        item.push(1);
      } else {
        var current = arr[i - 1][item.length - 1] + arr[i - 1][item.length];
        item.push(current);
      }
    }
    arr.push(item);
  }

  return arr[rowIndex];
};

module.exports = getRow;
