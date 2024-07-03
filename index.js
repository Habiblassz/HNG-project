setInterval(() => {
	let day = document.querySelector(".day");
	let time = document.querySelector(".time");

	let now = new Date();

	let weekdays = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let currentDay = weekdays[now.getDay()];
	let currentTime = now.toLocaleTimeString();

	day.textContent = `${currentDay}`;
	time.textContent = `${currentTime}`;
}, 1000);
