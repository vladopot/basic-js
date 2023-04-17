const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let addit = [];
  let base = null;
  let result = [];
  let sep = options.separator;
  if (sep === undefined || sep === null) {
    sep = '+';
  }
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addit.push(String(options.addition));
    
  }
  addit = addit.join(options.additionSeparator);
  base = str + addit;
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(base);
  }
  result = result.join(sep);
  console.log(base);
  console.log(result);
  return result;
}

repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' });

module.exports = {
  repeater
};
