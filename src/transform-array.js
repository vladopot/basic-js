const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new ValidationError(`'arr' parameter must be an instance of the Array!`);
  }
  let result = [];
  arr.forEach((e) => result.push(e));
  console.log(result);
  function discardPrev (el) {
    result.splice(el, 2);
    console.log(result);
    return result;
  }
  function discardNext (el) {
    result.splice(el, 2);
    console.log(result);
    return result;
  }
  function discard(el) {
    result.splice(el, 1);
    return result;
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '--double-next') {
      if (i === 0 || i === result.length - 1) {
        return discard(i);
      }
      result[i] = result[i + 1];
    }
    if (result[i] === '--double-prev') {
      if (i === 0 || i === result.length - 1) {
        return discard(i);
      }
      result[i] == result[i - 1];
    }
    if (result[i] === '--discard-prev') {
      if (i === 0 || i === result.length - 1) {
        return discard(i);
      }
      return discardPrev(i - 1);
    }
    if (result[i] === '--discard-next') {
      if (i === 0 || i === result.length - 1) {
        return discard(i);
      }
      return discardNext(i);
    }
  }
  return result;
}

transform([1, 2, 3, '--discard-prev', 4, 5])

module.exports = {
  transform
};
