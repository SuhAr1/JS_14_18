'use strict';
const dateNow = new Date();

function getWeekDay(date) {
	const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

	return days[date.getDay()];
}
const dateStop = new Date('11.31.2020');
const nowTime = new Date().toLocaleTimeString();
const timeNewYear = Math.round((dateStop.getTime() - dateNow.getTime()) / 1000 / 60 / 60 / 24);

const nowHours = new Date().getHours();
let greeting;
if (nowHours >= 5 && nowHours < 12)
	greeting = "Доброе утро";
else if (nowHours >= 12 && nowHours < 18)
	greeting = "Добрый день";
else if (nowHours >= 18 && nowHours < 24)
	greeting = "Добрый вечер";
else if (nowHours >= 0 && nowHours < 5)
	greeting = "Доброй ночи";

alert(`${greeting}
Сегодня:  ${getWeekDay(dateNow)}
Текущее время:  ${nowTime}
До нового года осталось: ${timeNewYear} дней`);
