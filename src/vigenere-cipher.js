const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  checkArguments(...args) {
    if (args.some(arg => !arg)) {
      throw new Error('Incorrect arguments!');
    }
  }

  processText(text, key, encrypt) {
    this.checkArguments(text, key);

    text = text.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      if (char.match(/[A-Z]/)) {
        const charCode = char.charCodeAt(0);
        const shift = key[keyIndex % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        let modifiedCharCode;

        if (encrypt) {
          modifiedCharCode = ((charCode - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0);
        } else {
          modifiedCharCode = ((charCode - 'A'.charCodeAt(0) - shift + 26) % 26) + 'A'.charCodeAt(0);
        }

        result += String.fromCharCode(modifiedCharCode);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this.processText(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this.processText(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
