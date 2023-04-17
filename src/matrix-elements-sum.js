const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = null;
  for (let i = 0; i < matrix[i].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      console.log(matrix[j][i]);

    }
  }
}

getMatrixElementsSum([
  [1, 2, 3, 4],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]);

module.exports = {
  getMatrixElementsSum
};
