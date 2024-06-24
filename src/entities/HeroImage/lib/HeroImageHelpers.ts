import { startDate, dialogueContainerSpan } from '../consts/HeroImageConsts';

export function showDaysPassed() {
  let daysPassed = getPassedDays(startDate);

  dialogueContainerSpan.innerText = `${daysPassed}`;
}

function getPassedDays(startingDate: Date) {
  let passedDays = 0;
  let cloneOfDate = new Date(+startingDate);

  while(Number(cloneOfDate) < Number( new Date )) {
    cloneOfDate.setDate( cloneOfDate.getDate() + 1);
    passedDays++;
  }

  return passedDays;
}