const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (isNaN(Date.parse(date))) {
    console.log('Invalid date!');
    throw new NotImplementedError('Invalid date!');
  }
  let month = date.getMonth()
  console.log(date);
  if (month >= 0 && month <= 1 || month === 11) {
    console.log('winter');
    return 'winter';
  }
  if (month >= 2 && month <= 4) {
    console.log('spring');
    return 'spring';
  }
  if (month >= 5 && month <= 7) {
    console.log('summer');
    return 'summer';
  }
  if (month >= 8 && month <= 10) {
    console.log('autumn');
    return 'autumn';
  }
}

module.exports = {
  getSeason
};

getSeason(new Date());