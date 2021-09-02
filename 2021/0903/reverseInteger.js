/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    if(x > 2147483647 || x < -2147483647) return 0;
    
    const result = parseInt(x.toString().split('').reverse().join(''));
    
    if(result > 2147483647) return 0;
    
    return (x>0) ? result : -result;
};

module.exports = reverse;