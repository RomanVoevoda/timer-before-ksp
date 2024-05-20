'use strict'
const spansForDate = document.querySelectorAll('.span-for-timer-date');
let timerBeforeEnd = new Timer(new Date(endDate));

Object.assign(Timer.prototype, eventMixin);

timerBeforeEnd.on('timeChange', () => timerBeforeEnd.refreshTimerDisplay(spansForDate));

/*
  Использование таймеров может показаться безумием, но они заставляют кастомные события тригериться правильно
*/
timerBeforeEnd.on('minutesChange', () => {
  setTimeout( () => {
    timerBeforeEnd.showMinutesBeforeEnd(spansForDate[4]);
  }, 1000);
});

timerBeforeEnd.on('hoursChange', () => {
  setTimeout( () => {
    timerBeforeEnd.showHoursBeforeEnd(spansForDate[3]);
  }, 1000);
});

timerBeforeEnd.on('daysChange', () => {
  setTimeout( () => {
    timerBeforeEnd.showDaysBeforeEnd(spansForDate[2]);
  }, 1000);
});

timerBeforeEnd.on('monthsChange', () => {
  setTimeout( () => {
    timerBeforeEnd.showMonthsBeforeEnd(spansForDate[1]);
  }, 1000);
});

timerBeforeEnd.on('yearsChange', () => {
  setTimeout( () => {
    timerBeforeEnd.showYearsBeforeEnd(spansForDate[0]);
  }, 1000);
});

window.addEventListener('load', () => {
  timerBeforeEnd.showYearsBeforeEnd(spansForDate[0]);
  timerBeforeEnd.showMonthsBeforeEnd(spansForDate[1]);
  timerBeforeEnd.showDaysBeforeEnd(spansForDate[2]);
  timerBeforeEnd.showHoursBeforeEnd(spansForDate[3]);
  timerBeforeEnd.showMinutesBeforeEnd(spansForDate[4]);
  timerBeforeEnd.showSecondsBeforeEnd(spansForDate[5]);

  setInterval(() => {
    timerBeforeEnd.changeTimeBeforeEnd(spansForDate);
    timerBeforeEnd.showSecondsBeforeEnd(spansForDate[5]);
  }, 1000);

  showDaysPassed();
});