import { spansForDate } from '../consts/TimerConsts';
import { eventMixin } from '../../../shared/index';

export class Timer extends eventMixin {
  static years = ['лет', 'год', 'года', 'года', 'года', 'лет', 'лет', 'лет', 'лет', 'лет'];
  static months = ['месяцев', 'месяц', 'месяца', 'месяца', 'месяца', 'месяцев', 'месяцев', 'месяцев', 'месяцев', 'месяцев', 'месяцев', 'месяцев'];
  static days = ['дней', 'день', 'дня', 'дня', 'дня', 'дней', 'дней', 'дней', 'дней', 'дней'];
  static hours = ['часов', 'час', 'часа', 'часа', 'часа', 'часов', 'часов', 'часов', 'часов', 'часов'];
  static minutes = ['минут', 'минуту', 'минуты', 'минуты', 'минуты', 'минут', 'минут', 'минут', 'минут', 'минут'];
  static seconds = ['секунд', 'секунду', 'секунды', 'секунды', 'секунды', 'секунд', 'секунд', 'секунд', 'секунд', 'секунд'];

  private _currentTimeBeforeEnd;

  constructor(endingDate: Date) {
    super();
    this._currentTimeBeforeEnd = new Date(( Number( endingDate ) - Number( new Date() ) ) + Number( new Date('0000-01-01') ));
  }

  changeTimeBeforeEnd() {
    this._currentTimeBeforeEnd = new Date( this._currentTimeBeforeEnd.setSeconds( this._currentTimeBeforeEnd.getSeconds() - 1 ) );
    this.trigger('timeChange', spansForDate);
  }

  refreshTimerDisplay(spansArray: NodeListOf<Element>) {
    let conditions = [
      this._currentTimeBeforeEnd.getSeconds() == 0, 
      this._currentTimeBeforeEnd.getMinutes() == 0,
      this._currentTimeBeforeEnd.getHours() == 0, 
      this._currentTimeBeforeEnd.getDate() == 0, 
      this._currentTimeBeforeEnd.getMonth() == 0
    ];

    let triggers = [
      this.trigger('minutesChange', spansArray),
      this.trigger('hoursChange', spansArray),
      this.trigger('daysChange', spansArray),
      this.trigger('monthsChange', spansArray),
      this.trigger('yearsChange', spansArray)
    ];

    let deep = 1;

    let deepDiveInTriggers = function func() {
      if(!conditions.slice(0, deep).includes(false)) {
        triggers[deep - 1];
        deep++;

        return func();
      }
    }

    deepDiveInTriggers();
  }

  showYearsBeforeEnd(span: Element) {
    if(this.year) span.innerHTML = this.year;
  }

  showMonthsBeforeEnd(span: Element) {
    if(this.month) span.innerHTML = this.month;
  }

  showDaysBeforeEnd(span: Element) {
    if(this.day) span.innerHTML = this.day;
  }

  showHoursBeforeEnd(span: Element) {
    if(this.hour) span.innerHTML = this.hour;
  }

  showMinutesBeforeEnd(span: Element) {
    if(this.minute) span.innerHTML = this.minute;
  }

  showSecondsBeforeEnd(span: Element) {
    if(this.second) span.innerHTML = this.second;
  }

  get year() {
    let yearsBeforeEnd = this._currentTimeBeforeEnd.getFullYear();
    let lastNumber = String(yearsBeforeEnd).at(-1);

    return yearsBeforeEnd + ' ' + Timer.years[ Number(lastNumber) ];
  }

  get month() {
    let monthsBeforeEnd = this._currentTimeBeforeEnd.getMonth();

    return monthsBeforeEnd  + ' ' + Timer.months[monthsBeforeEnd ];
  }

  get day() {
    let daysBeforeEnd = this._currentTimeBeforeEnd.getDate();
    let lastNumber = (10 <= daysBeforeEnd && daysBeforeEnd < 20) ? 9 : String(daysBeforeEnd).at(-1);

    return daysBeforeEnd + ' ' + Timer.days[ Number(lastNumber) ];
  }

  get hour() {
    let hoursBeforeEnd = this._currentTimeBeforeEnd.getHours();
    let lastNumber = (10 <= hoursBeforeEnd && hoursBeforeEnd < 20) ? 9 : String(hoursBeforeEnd).at(-1);

    return hoursBeforeEnd + ' ' + Timer.hours[ Number(lastNumber) ];
  }

  get minute() {
    let minutesBeforeEnd = this._currentTimeBeforeEnd.getMinutes();
    let lastNumber = (10 <= minutesBeforeEnd && minutesBeforeEnd < 20) ? 9 : String(minutesBeforeEnd).at(-1);

    return minutesBeforeEnd + ' ' + Timer.minutes[ Number(lastNumber) ];
  }

  get second() {
    let secondsBeforeEnd = this._currentTimeBeforeEnd.getSeconds();
    let lastNumber = (10 <= secondsBeforeEnd && secondsBeforeEnd < 20) ? 9 : String(secondsBeforeEnd).at(-1);

    return secondsBeforeEnd + ' ' + Timer.seconds[ Number(lastNumber) ];
  }
}