const timer = () => {	
	const day = document.querySelector('#days'),
		hour = document.querySelector('#hours'),
		minute = document.querySelector('#minutes'),
		second = document.querySelector('#seconds');

	const deadline = new Date('09 01 2021');

	timer();
	setInterval(timer, 1000);

	function beautyNum(num) {
		if (num <= 9) {
			num = `0${num}`;
		}

		return num;
	}

	function timer() {
		const currentDate = Date.now(),
			timeLeft = (deadline - currentDate) / 1000, // seconds
			dayLeft = Math.floor((timeLeft / 60) / 60 / 24), // days
			hourLeft = Math.floor((timeLeft - (dayLeft * 24 * 60 * 60)) / 60 / 60), // hours
			minuteLeft = Math.floor((timeLeft - (dayLeft * 24 * 60 * 60) - (hourLeft * 60 * 60)) / 60), // minutes
			secondLeft = Math.floor(timeLeft - (dayLeft * 24 * 60 * 60) - (hourLeft * 60 * 60) - (minuteLeft * 60)); // seconds

		day.textContent = beautyNum(dayLeft);
		hour.textContent = beautyNum(hourLeft);
		minute.textContent = beautyNum(minuteLeft);
		second.textContent = beautyNum(secondLeft);
	}
};

export default timer;