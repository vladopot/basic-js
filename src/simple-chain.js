const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  result: null,
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push(`( )`);
      return this;
    } else {
      this.chain.push(`( ${String(value)} )`);
      console.log(this.chain);
      return this;
    }
  },
  removeLink(position) {
    if (typeof position !== 'number' || position % 1 !== 0 || position > this.chain.length || position < 0) {
      throw new NotImplementedError(`You can't remove incorrect link!`);
    } else {
      let pos = position - 1;
      this.chain.splice(pos, 1);
      console.log(this.chain);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    console.log(this.chain);
    return this;
  },
  finishChain() {
    console.log(this.chain.join('~~'));
    this.result = this.chain.join('~~');
    this.chain = [];
    return this.result;
  }
};

chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()

module.exports = {
  chainMaker
};
