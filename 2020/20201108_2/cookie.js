/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let j = 0,
    res = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  for (let num of s) {
    if (num >= g[j]) res++, j++;
  }
  return res;
}; 

module.exports = findContentChildren;
