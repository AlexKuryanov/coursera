/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
  minutes += interval;
  if (minutes > 59) {
    hours = hours + Math.floor((minutes / 60) % 24);
    minutes = minutes % 60;
  }
  if (hours > 23) {
    hours = (hours % 12);
  }
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutes}`;
};
