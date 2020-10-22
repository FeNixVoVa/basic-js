const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let prepareName = '';
  if ((members === null) || (members === undefined)) return false;
  for (i = 0; i < members.length; i++) {
    let someValue = members[i];
    if (typeof(someValue) === 'string') {
      let someValueClear = someValue.trim();
      prepareName += someValueClear[0];
    }
  }
  if (prepareName === '') return false;
  let teamName = prepareName.toUpperCase();
  let result = teamName.split('').sort().join('');
  return result;
};
