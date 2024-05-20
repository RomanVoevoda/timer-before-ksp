'use strict'

const dialogueContainerSpan = document.querySelector('.person-dialogue-container p span');
const timerContainerParagraph = document.querySelector('.timer-container p');

let startDate = new Date('2022-12-18');
let endDate = new Date('2077-01-01');

function showDaysPassed() {
  let daysPassed = getPassedDays(startDate);

  dialogueContainerSpan.innerText = `${daysPassed}`;
}

function getPassedDays(startingDate) {
  let passedDays = 0;
  let cloneOfDate = new Date(+startingDate);

  while(Number(cloneOfDate) < Number( new Date )) {
    cloneOfDate.setDate( cloneOfDate.getDate() + 1);
    passedDays++;
  }

  return passedDays;
}

class Timer {
  static years = ['лет', 'год', 'года', 'года', 'года', 'лет', 'лет', 'лет', 'лет', 'лет'];
  static months = ['месяцев', 'месяц', 'месяца', 'месяца', 'месяца', 'месяцев', 'месяцев', 'месяцев', 'месяцев', 'месяцев', 'месяцев', 'месяцев'];
  static days = ['дней', 'день', 'дня', 'дня', 'дня', 'дней', 'дней', 'дней', 'дней', 'дней'];
  static hours = ['часов', 'час', 'часа', 'часа', 'часа', 'часов', 'часов', 'часов', 'часов', 'часов'];
  static minutes = ['минут', 'минуту', 'минуты', 'минуты', 'минуты', 'минут', 'минут', 'минут', 'минут', 'минут'];
  static seconds = ['секунд', 'секунду', 'секунды', 'секунды', 'секунды', 'секунд', 'секунд', 'секунд', 'секунд', 'секунд'];

  _currentTimeBeforeEnd = '';

  constructor(endingDate) {
    this._currentTimeBeforeEnd = new Date((endingDate - new Date() ) + Number( new Date('0000-01-01') ));
  }

  changeTimeBeforeEnd() {
    this._currentTimeBeforeEnd = new Date( this._currentTimeBeforeEnd.setSeconds( this._currentTimeBeforeEnd.getSeconds() - 1 ) );
    this.trigger('timeChange', spansForDate);
  }

  refreshTimerDisplay(spansArray) {
    let currentSeconds = this._currentTimeBeforeEnd.getSeconds();
    let currentMinutes = this._currentTimeBeforeEnd.getMinutes();
    let currentHours = this._currentTimeBeforeEnd.getHours();
    let currentDays = this._currentTimeBeforeEnd.getDate();
    let currentMonths = this._currentTimeBeforeEnd.getMonth();

    if(currentSeconds == 0) {
      this.trigger('minutesChange', spansArray);
    }

    if(currentSeconds == 0 && currentMinutes == 0) {
      this.trigger('hoursChange', spansArray);
    }

    if(
      currentSeconds == 0 &&
      currentMinutes == 0 &&
      currentHours == 0
    ) {
      this.trigger('daysChange', spansArray);
    }

    if(
      currentSeconds == 0 &&
      currentMinutes == 0 &&
      currentHours == 0 &&
      currentDays == 0
    ) {
      this.trigger('monthsChange', spansArray);
    }
    
    if(
      currentSeconds == 0 &&
      currentMinutes == 0 &&
      currentHours == 0 &&
      currentDays == 0 &&
      currentMonths == 0
    ) {
      this.trigger('yearsChange', spansArray);
    }
  }

  showYearsBeforeEnd(span) {
    span.innerHTML = this.year;
  }

  showMonthsBeforeEnd(span) {
    span.innerHTML = this.month;
  }

  showDaysBeforeEnd(span) {
    span.innerHTML = this.day;
  }

  showHoursBeforeEnd(span) {
    span.innerHTML = this.hour;
  }

  showMinutesBeforeEnd(span) {
    span.innerHTML = this.minute;
  }

  showSecondsBeforeEnd(span) {
    span.innerHTML = this.second;
  }

  get year() {
    let yearsBeforeEnd = this._currentTimeBeforeEnd.getFullYear();

    return yearsBeforeEnd + ' ' + Timer.years[ String(yearsBeforeEnd).at(-1) ];
  }

  get month() {
    let monthsBeforeEnd = this._currentTimeBeforeEnd.getMonth();

    return monthsBeforeEnd  + ' ' + Timer.months[monthsBeforeEnd ];
  }

  get day() {
    let daysBeforeEnd = this._currentTimeBeforeEnd.getDate();

    return daysBeforeEnd + ' ' + Timer.days[ (10 <= daysBeforeEnd && daysBeforeEnd < 20) ? 9 : String(daysBeforeEnd).at(-1) ];
  }

  get hour() {
    let hoursBeforeEnd = this._currentTimeBeforeEnd.getHours();

    return hoursBeforeEnd + ' ' + Timer.hours[ (10 <= hoursBeforeEnd && hoursBeforeEnd < 20) ? 9 : String(hoursBeforeEnd).at(-1) ];
  }

  get minute() {
    let minutesBeforeEnd = this._currentTimeBeforeEnd.getMinutes();

    return minutesBeforeEnd + ' ' + Timer.minutes[ (10 <= minutesBeforeEnd && minutesBeforeEnd < 20) ? 9 : String(minutesBeforeEnd).at(-1) ];
  }

  get second() {
    let secondsBeforeEnd = this._currentTimeBeforeEnd.getSeconds();

    return secondsBeforeEnd + ' ' + Timer.seconds[ (10 <= secondsBeforeEnd && secondsBeforeEnd < 20) ? 9 : String(secondsBeforeEnd).at(-1) ];
  }
}

let eventMixin = {

	on(eventName, handler) {
		if(!this._eventHandlers) this._eventHandlers = {};
		if(!this._eventHandlers[eventName]) {
			this._eventHandlers[eventName] = [];
		}
		
		this._eventHandlers[eventName].push(handler);
	},
	
	off(eventName, handler) {
		let handlers = this._eventHandlers && this._eventHandlers[eventName];
		
		if(!handlers) return;
		
		for(let i = 0; i < handlers.length; i++) {
			if(handlers[i] === handler) {
				handlers.splice(i--, 1);
			}
		}
	},

  
  trigger(eventName, ...args) {
	  if(!this._eventHandlers || !this._eventHandlers[eventName]) {
		  return; 
		}
		
		this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
	}
}