const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */

class tower {
  constructor() {
    this.turns = null;
    this.seconds = null;
  }
}

function calculateHanoi(disksNumber, turnsSpeed) {
  let newTower = new tower();
  newTower.turns = Math.pow(2, disksNumber) - 1;
  newTower.seconds = Math.floor((newTower.turns / turnsSpeed) * 3600);
  return newTower;
}

module.exports = {
  calculateHanoi
};
