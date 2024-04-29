/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim(); 
    if (s === "") {
        return 0;
    }
    let word = s.split(" ");
    let lengthOfLastWord = word[word.length - 1].length;
    return lengthOfLastWord;
};
