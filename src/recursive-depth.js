const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
        return 0;
    }

    let res = 0;
    for (let item of arr) {
        res = Math.max(res, this.calculateDepth(item));
    }
    return 1 + res;
  }
}

let depth = new DepthCalculator()
depth.calculateDepth();

module.exports = {
  DepthCalculator
};
