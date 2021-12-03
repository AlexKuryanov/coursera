/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
  let time = new Date(date);
  console.log(time);
	let periods = ['years', 'months', 'days', 'hours', 'minutes'];

	return {
		add(num, value) {

			if (!periods.includes(value)) {
				throw new TypeError('Unpermissible value');
			}
			if (isNaN(num) || num < 0) {
				throw new TypeError('Unpermissible number');
			}

			if (value === 'years') {
				time.setFullYear(time.getFullYear() + num);
			} else if (value === 'hours') {
				time.setHours(time.getHours() + num);
			} else if (value === "minutes") {
				time.setMinutes(time.getMinutes() + num);
			} else if (value === "days") {
				time.setDate(time.getDate() + num);
			} else if (value === "months") {
				time.setMonth(time.getMonth() + num);
			} else {
				throw new TypeError('Incorrect value of date');
			}
			return this;
		},
		subtract (num, value) {

			if (!periods.includes(value)) {
				throw new TypeError('Unpermissible value');
			}
			if (isNaN(num) || num < 0) {
				throw new TypeError('Unpermissible number');
			}

			if (value === 'years') {
				time.setFullYear(time.getFullYear() - num);
			} else if (value === "hours") {
				 time.setHours(time.getHours() - num);
			} else if (value === "minutes") {
				time.setMinutes(time.getMinutes() - num);
			} else if (value === "days") {
				time.setDate(time.getDate() - num);
			} else if (value === "months") {
				time.setMonth(time.getMonth() - num);
			} else {
				throw new TypeError('Incorrect value of date');
			}
			return this;
		},

		get value() {

			let date = time,
				month = String((date.getMonth() + 1)),
				day = String(date.getDate()),
				year = String(date.getFullYear()),
				hour = String(date.getHours()),
				minute = String(date.getMinutes());


			if (month.length < 2) month = '0' + month;
			if (day.length < 2) day = '0' + day;
			if (hour.length < 2) hour = '0' + hour;
			if (minute.length < 2) minute = '0' + minute;

			let fullYear = [year, month, day].join('-');
			let fullTime = [hour, minute].join(':');
			return `${fullYear} ${fullTime}`;
		},
	};
};
