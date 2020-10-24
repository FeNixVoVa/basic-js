const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof(str) !== 'string') {
    str = String(str);
  }
  let addit = '';
  if ((typeof(options.addition) !== 'string') && (options.addition !== undefined)) {
    addit = String(options.addition);
  } else {
    addit = options.addition;
  }
  let repeats = 1;
  if (options.repeatTimes !== undefined) {
    repeats = options.repeatTimes;
  }
  let separ = '+';
  if (options.separator !== undefined) {
    separ = options.separator;
  }
  let additTimes = 1;
  if (options.additionRepeatTimes !== undefined) {
    additTimes = options.additionRepeatTimes;
  }
  let additSepar = '|';
  if (options.additionSeparator !== undefined) {
    additSepar = options.additionSeparator;
  }
  let additArr = [];
  let additString = '';
  if (addit !== '') {
    for (let i = 0; i < additTimes; i++) {
      additArr.push(addit);
    }
    additString = additArr.join(additSepar);
  }
  let result = '';
  let arrayString = [];
  for (let i = 0; i < repeats; i++) {
    arrayString.push(str);
    if (additString !== '') {
      arrayString[i] += additString;
    }
  }
  result = arrayString.join(separ);
  return result;
};
  