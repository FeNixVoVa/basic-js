const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  if ((!Number.isInteger(disksNumber)) || (!Number.isInteger(turnsSpeed))) return 'Wrong arguments';
  let turns = ((2 ** disksNumber) - 1);
  let speedPerSecond = (turnsSpeed / 3600);
  let timeRequires = (turns / speedPerSecond);
  let result = new Object();
  result.turns = turns;
  result.seconds = Math.floor(timeRequires);
  return result;
};
