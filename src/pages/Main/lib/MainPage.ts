import { showDaysPassed } from '../../../entities/HeroImage/index';
import { spansForDate, timerBeforeEnd } from '../../../entities/Timer/index';
import '../ui/MainPage.scss';

timerBeforeEnd.on('timeChange', () => timerBeforeEnd.refreshTimerDisplay(spansForDate));

timerBeforeEnd.on('minutesChange', () => {
  timerBeforeEnd.showMinutesBeforeEnd(spansForDate[4]);
});

timerBeforeEnd.on('hoursChange', () => {
  timerBeforeEnd.showHoursBeforeEnd(spansForDate[3]);
});

timerBeforeEnd.on('daysChange', () => {
  timerBeforeEnd.showDaysBeforeEnd(spansForDate[2]);
});

timerBeforeEnd.on('monthsChange', () => {
  timerBeforeEnd.showMonthsBeforeEnd(spansForDate[1]);
});

timerBeforeEnd.on('yearsChange', () => {
  timerBeforeEnd.showYearsBeforeEnd(spansForDate[0]);
});

window.addEventListener('load', () => {
  timerBeforeEnd.showYearsBeforeEnd(spansForDate[0]);
  timerBeforeEnd.showMonthsBeforeEnd(spansForDate[1]);
  timerBeforeEnd.showDaysBeforeEnd(spansForDate[2]);
  timerBeforeEnd.showHoursBeforeEnd(spansForDate[3]);
  timerBeforeEnd.showMinutesBeforeEnd(spansForDate[4]);
  timerBeforeEnd.showSecondsBeforeEnd(spansForDate[5]);

  setInterval(() => {
    timerBeforeEnd.changeTimeBeforeEnd();
    timerBeforeEnd.showSecondsBeforeEnd(spansForDate[5]);
  }, 1000);

  showDaysPassed();
});