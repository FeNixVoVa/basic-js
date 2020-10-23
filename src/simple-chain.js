const CustomError = require("../extensions/custom-error");

const chainMaker = {
  someArray: [],
  getLength() {
    if (this.someArray === []) {
      return false
    } else {
      return this.someArray.length;
    }
  },
  addLink(value) {
    if (value === null) {
      this.someArray.push('null');
      return this;
    } else {
      this.someArray.push(value);
      return this;
    }
  },
  removeLink(position) {
    if (this.someArray[position - 1] !== undefined) {
      this.someArray.splice((position - 1), 1);
      return this;
    } else {
      this.someArray = [];
      throw new Error('THROWN');
    }
  },
  reverseChain() {
    this.someArray = this.someArray.reverse();
    return this;
  },
  finishChain() {
    let result = `( ${this.someArray.join(' )~~( ')} )`
    this.someArray = [];
    return result;
  }
};

module.exports = chainMaker;
