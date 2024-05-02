/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    function isPalindromic(str) {
        return str === str.split('').reverse().join('');
    }
    
    for (let base = 2; base <= n - 2; base++) {
        const nBase = n.toString(base);
        if (!isPalindromic(nBase)) {
            return false; 
        }
    }
    
    return true;
};