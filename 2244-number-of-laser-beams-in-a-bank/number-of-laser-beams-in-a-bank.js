/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    
    let m = bank.length;
    let n = bank[0].length;
    let counts = new Array(m).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (bank[i][j] === '1') {
                counts[i]++;
            }
        }
    }
    let res = 0;
    let last = -1;
    for (let i = 0; i < m; i++) {
        if (counts[i] > 0) {
            if (last >= 0) {
                res += counts[last] * counts[i];
            }
            last = i;
        }
    }
    return res;


};