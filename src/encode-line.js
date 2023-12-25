const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let i = 0;
  let result = '';
  while (i < str.length) {
    let count = 1;
    while (str[i] === str[i+1]) {
      count++;
      i++;
    }
    result += count === 1 ? str[i] : `${count}${str[i]}`;
    i++;
  }
  return result;
}

module.exports = {
  encodeLine
};
