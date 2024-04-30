/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   
    const bracketStack = [];
    const bracketPairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let char of s) { 
        if (char in bracketPairs) {
            bracketStack.push(char);
        } else {
            const lastOpenedBracket = bracketStack.pop();
            if (bracketPairs[lastOpenedBracket] !== char) {
                return false;
            }
        }
    }
    
    return bracketStack.length === 0;
};
