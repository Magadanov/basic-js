const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};

  for (const domain of domains) {
    const domainComponents = domain.split('.').reverse();
    let curDomain = '';

    for (let i = 0; i < domainComponents.length; i++) {
      curDomain = `${curDomain ? curDomain + '.' : ''}${domainComponents[i]}`;
      curDomain = i === 0 ? `.${curDomain}` : curDomain;
      result[curDomain] = (result[curDomain] || 0) + 1;
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
