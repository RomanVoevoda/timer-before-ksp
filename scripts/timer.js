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

  while(Number(cloneOfDate) < Number(new Date)) {
    cloneOfDate.setDate(cloneOfDate.getDate() + 1);
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
  let diff = new Date((endingDate - new Date()) + Number(new Date('0000-01-01')));

  let yearsBeforeEnd = String(diff.getFullYear())[String(diff.getFullYear()).length - 1];
  let monthsBeforeEnd = String(diff.getMonth());
  let daysBeforeEnd = String(diff.getDate())[String(diff.getDate()).length - 1];
  let hoursBeforeEnd = (10 <= diff.getHours() && diff.getHours() < 20) ? '9' : String(diff.getHours())[String(diff.getHours()).length - 1];
  let minutesBeforeEnd = (10 <= diff.getMinutes() && diff.getMinutes() < 20) ? '9' : String(diff.getMinutes())[String(diff.getMinutes()).length - 1];
  let secondsBeforeEnd = (10 <= diff.getSeconds() && diff.getSeconds() < 20) ? '9' : String(diff.getSeconds())[String(diff.getSeconds()).length - 1];


  timerContainerParagraph.innerHTML = `
    Осталось ждать ${diff.getFullYear()} ${returnCorrectWord(yearsBeforeEnd, years)} 
    ${diff.getMonth()} ${returnCorrectWord(monthsBeforeEnd, months)}
    ${diff.getDate()} ${returnCorrectWord(daysBeforeEnd, days)} 
    ${diff.getHours()} ${returnCorrectWord(hoursBeforeEnd, hours)} 
    ${diff.getMinutes()} ${returnCorrectWord(minutesBeforeEnd, minutes)} 
    ${diff.getSeconds()} ${returnCorrectWord(secondsBeforeEnd, seconds)}.
  `
}

function returnCorrectWord(string, arr) {
  switch(string) {
    case  '0': return arr[0];
    case  '1': return arr[1];
    case  '2': return arr[2];
    case  '3': return arr[3];
    case  '4': return arr[4];
    case  '5': return arr[5];
    case  '6': return arr[6];
    case  '7': return arr[7];
    case  '8': return arr[8];
    case  '9': return arr[9];
    case  '10': return arr[10];
    case  '11': return arr[11];
  }
}