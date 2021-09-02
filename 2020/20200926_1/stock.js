/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var result = 0;

  //   var temp = prices.map(function (e, i) {
  //     return { index: i, value: e };
  //   });

  //   temp.sort((a, b) => a.value - b.value);

  //   for (var i = temp.length - 1; i > 0; i--) {
  //     if (temp[0].index < temp[i].index) {
  //       result = temp[i].value - temp[0].value;
  //       break;
  //     } else result = 0;
  //   } 

  for (var i = 1; i < prices.length; i++) {
    for (var j = i + 1; j < prices.length; j++) {
      var cur = prices[j] - prices[i];

      if (cur > result) {
        result = cur;
      }
    }
  }

  return result;
};

module.exports = maxProfit;
