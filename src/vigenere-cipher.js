const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if ((typeof(message) !== 'string') || (typeof(key) !== 'string')) {
      throw new Error('THROWN');
    }
    while (key.length < message.length) {
      key += key;
    }
    key = key.toUpperCase();
    message = message.toUpperCase();
    let keyArray = key.split('');
    let messageArray = message.split('');
    for (let i = 0, j = 0; i < messageArray.length; i++) {
      if ((messageArray[i].charCodeAt(0) >= 65) && (messageArray[i].charCodeAt(0) <= 90)) {
        let a = messageArray[i].charCodeAt(0) - 64;
        let b = keyArray[j].charCodeAt(0) - 65;
        j++;
        let c = a + b;
        while (c > 26) {
          c -= 26;
        }
        c += 64;
        messageArray[i] = String.fromCharCode(c);
      }
    }
    if (this.direct === false) {
      messageArray = messageArray.reverse();
    }
    return messageArray.join('');
  }    
  decrypt(encryptedMessage, key) {
    if ((typeof(encryptedMessage) !== 'string') || (typeof(key) !== 'string')) {
      throw new Error('THROWN');
    }
    while (key.length < encryptedMessage.length) {
      key += key;
    }
    key = key.toUpperCase();
    encryptedMessage = encryptedMessage.toUpperCase();
    let keyArray = key.split('');
    let encryptedMessageArray = encryptedMessage.split('');
    for (let i = 0, j = 0; i < encryptedMessageArray.length; i++) {
      if ((encryptedMessageArray[i].charCodeAt(0) >= 65) && (encryptedMessageArray[i].charCodeAt(0) <= 90)) {
        let a = encryptedMessageArray[i].charCodeAt(0) - 64;
        let b = keyArray[j].charCodeAt(0) - 65;
        j++;
        let c = a - b;
        while (c < 1) {
          c += 26;
        }
        c += 64;
        encryptedMessageArray[i] = String.fromCharCode(c);
      }
    }
    if (this.direct === false) {
      encryptedMessageArray = encryptedMessageArray.reverse();
    }
    return encryptedMessageArray.join('');
  }
}

module.exports = VigenereCipheringMachine;
