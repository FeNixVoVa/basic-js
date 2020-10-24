const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    let arrayIn = false;
    for (let i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i])) {
        arrayIn = true;
      };
    };
    counter++;
    if (arrayIn) {
      counter += this.calculateDepth(arr.flat());
    };
    return counter;
}
}