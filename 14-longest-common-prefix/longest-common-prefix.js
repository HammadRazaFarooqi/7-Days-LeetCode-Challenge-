/**
 * @param {string[]} strs
 * @return {string}
 */

// let strs = ["hammad", "hassaan","huzaifa"];

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  if (strs.some((str) => str === "")) {
    return "";
  }
  strs.sort((a, b) => a.length - b.length);
  for (let index = 0; index < strs[0].length; index++) {
    for (let index2 = 1; index2 < strs.length; index2++) {
      if (strs[0][index] !== strs[index2][index]) {
        return strs[0].slice(0, index);
      }
    }
  }
  return strs[0];
}
