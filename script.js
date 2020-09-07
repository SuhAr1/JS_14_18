'use strict';

const greeting = document.getElementById('greeting');
const nowTime = document.querySelector('#now-time');
const dateNow = new Date();
const nowHours = new Date().getHours();
let days = document.getElementById('days');

function getWeekDay(date) {
	days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

	return days[date.getDay()];
}
days.innerHTML = `Сегодня: ${getWeekDay(dateNow)}`;

if (nowHours >= 5 && nowHours < 12)
	greeting.innerHTML = "Доброе утро";
else if (nowHours >= 12 && nowHours < 18)
	greeting.innerHTML = "Добрый день";
else if (nowHours >= 18 && nowHours < 24)
	greeting.innerHTML = "Добрый вечер";
else if (nowHours >= 0 && nowHours < 5)
	greeting.innerHTML = "Доброй ночи";

function getTime() {
	const clock = new Date().toLocaleTimeString();
	nowTime.textContent = `Текущее время: ${clock}`;
}
getTime();
setInterval(getTime, 1000);

function countTimer(deadline) {
	const timerHours = document.querySelector('#timer-hours'),
		timerMinutes = document.querySelector('#timer-minutes'),
		timerSeconds = document.querySelector('#timer-seconds'),
		timerDays = document.querySelector('#timer-days');

	function getTimerRemaining() {
		const dateStop = new Date(deadline).getTime(),
			dateNow = new Date().getTime(),
			timeRemaining = (dateStop - dateNow) / 1000,
			seconds = Math.floor(timeRemaining % 60),
			minutes = Math.floor((timeRemaining / 60) % 60),
			hours = Math.floor(timeRemaining / 60 / 60) % 24,
			days = `${Math.floor((timeRemaining / 60 / 60) / 24)} дней`;
		return { timeRemaining, hours, minutes, seconds, days };
	}

	function updateClock() {
		const timer = getTimerRemaining();
		let idInterval;
		if (getTimerRemaining().timeRemaining > 0) {
			timerHours.textContent = ((timer.hours < 10) ? '0' + timer.hours : timer.hours);
			timerMinutes.textContent = ((timer.minutes < 10) ? '0' + timer.minutes : timer.minutes);
			timerSeconds.textContent = ((timer.seconds < 10) ? '0' + timer.seconds : timer.seconds);
			timerDays.textContent = ((timer.days < 10) ? '0' + timer.days : timer.days);
		} else {
			clearInterval(idInterval);
			timerDays.textContent = '00';
			timerHours.textContent = '00';
			timerMinutes.textContent = '00';
			timerSeconds.textContent = '00';
		}
		setInterval(updateClock, 1000);
	}
	updateClock();
}

countTimer('31 december 2020');

