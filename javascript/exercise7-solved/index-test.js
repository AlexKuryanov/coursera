/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
  var time = new Date(date);
  var periods = ['years', 'months', 'days', 'hours', 'minutes'];
  function addZero(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  return {
    add: function (value, period) {
      if (value < 0) {
        throw new TypeError('Значение не может быть отрицательным');
      }
      if (!periods.includes(period)) {
        throw new TypeError('Неизвестная единица времени');
      }
      if (period === 'years') {
        time.setFullYear(time.getFullYear() + value);
      } else if (period === 'months') {
        time.setMonth(time.getMonth() + value);
      } else if (period === 'days') {
        time.setDate(time.getDate() + value);
      } else if (period === 'hours') {
        time.setHours(time.getHours() + value);
      } else if (period === 'minutes') {
        time.setMinutes(time.getMinutes() + value);
      }
      return this;
    },
    subtract: function (value, period) {
      if (value < 0) {
        throw new TypeError('Значение не может быть отрицательным');
      }
      if (!periods.includes(period)) {
        throw new TypeError('Неизвестная единица времени');
      }
      if (period === 'years') {
        time.setFullYear(time.getFullYear() - value);
      } else if (period === 'months') {
        time.setMonth(time.getMonth() - value);
      } else if (period === 'days') {
        time.setDate(time.getDate() - value);
      } else if (period === 'hours') {
        time.setHours(time.getHours() - value);
      } else if (period === 'minutes') {
        time.setMinutes(time.getMinutes() - value);
      }
      return this;
    },
    get value() {
      let year = time.getFullYear(),
        month = time.getMonth() + 1,
        day = time.getDate(),
        hour = time.getHours(),
        min = time.getMinutes();
      return `${year}-${addZero(month)}-${addZero(day)} ${addZero(hour)}:${addZero(min)}`;
    }
  }
}
