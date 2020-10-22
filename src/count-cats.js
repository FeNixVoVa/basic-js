const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    let someArray = matrix[i]
    for (let j = 0; j < someArray.length; j++) {
      if (someArray[j] === '^^') counter++;
    }
  }
  return counter;
};
