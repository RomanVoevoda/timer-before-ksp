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

let years = ['лет', 'год', 'года', 'года', 'года', 'лет', 'лет', 'лет', 'лет', 'лет'];
let months = ['месяцев', 'месяц', 'месяца', 'месяца', 'месяца', 'месяцев', 'месяцев', 'месяцев', 'месяцев', 'месяцев', 'месяцев', 'месяцев'];
let days = ['дней', 'день', 'дня', 'дня', 'дня', 'дней', 'дней', 'дней', 'дней', 'дней'];
let hours = ['часов', 'час', 'часа', 'часа', 'часа', 'часов', 'часов', 'часов', 'часов', 'часов'];
let minutes = ['минут', 'минуту', 'минуты', 'минуты', 'минуты', 'минут', 'минут', 'минут', 'минут', 'минут'];
let seconds = ['секунд', 'секунду', 'секунды', 'секунды', 'секунды', 'секунд', 'секунд', 'секунд', 'секунд', 'секунд'];

function refreshTimer(endingDate) {
  let timeBeforeEnd = new Date((endingDate - new Date() ) + Number( new Date('0000-01-01') ));

  let yearsBeforeEnd = String( timeBeforeEnd.getFullYear() ).at(-1);
  let monthsBeforeEnd = timeBeforeEnd.getMonth();
  let daysBeforeEnd = String( timeBeforeEnd.getDate() ).at(-1);
  let hoursBeforeEnd = (10 <= timeBeforeEnd.getHours() && timeBeforeEnd.getHours() < 20) ? 9 : String( timeBeforeEnd.getHours() ).at(-1);
  let minutesBeforeEnd = (10 <= timeBeforeEnd.getMinutes() && timeBeforeEnd.getMinutes() < 20) ? 9 : String( timeBeforeEnd.getMinutes() ).at(-1);
  let secondsBeforeEnd = (10 <= timeBeforeEnd.getSeconds() && timeBeforeEnd.getSeconds() < 20) ? 9 : String( timeBeforeEnd.getSeconds() ).at(-1);


  timerContainerParagraph.innerHTML = `
    Осталось ждать ${timeBeforeEnd.getFullYear()} ${years[yearsBeforeEnd]} 
    ${timeBeforeEnd.getMonth()} ${months[monthsBeforeEnd]}
    ${timeBeforeEnd.getDate()} ${days[daysBeforeEnd]} 
    ${timeBeforeEnd.getHours()} ${hours[hoursBeforeEnd]} 
    ${timeBeforeEnd.getMinutes()} ${minutes[minutesBeforeEnd]} 
    ${timeBeforeEnd.getSeconds()} ${seconds[secondsBeforeEnd]}.
  `
}