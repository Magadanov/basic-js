const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = null;
  const strN = n.toString();
  for (let i = 0; i < strN.length; i++) {
    const currentNumber = parseInt(strN.slice(0, i) + strN.slice(i + 1));
    maxNumber = maxNumber > currentNumber ? maxNumber : currentNumber;
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
