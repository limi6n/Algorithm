/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
  var result = [];
  for (var i = 0; i < R; i++) {
    for (var j = 0; j < C; j++) {
      result.push([i, j]);
    }
  }

  return result.sort(
    ([a1, a2], [b1, b2]) =>
      Math.abs(a1 - r0) +
      Math.abs(a2 - c0) -
      (Math.abs(b1 - r0) + Math.abs(b2 - c0))
  );
};

module.exports = allCellsDistOrder;
 