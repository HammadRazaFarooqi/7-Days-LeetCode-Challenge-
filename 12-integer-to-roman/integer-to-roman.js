/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const Symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const Values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    let Numeral = '';
    
    for (let i = 0; i < Values.length; i++) {
        while (num >= Values[i]) {
            Numeral += Symbols[i];
            num -= Values[i];
        }
    }
    
    return Numeral;
};
