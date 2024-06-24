import { Timer } from '../model/TimerClass';
export { spansForDate, timerContainerParagraph, startDate, endDate, timerBeforeEnd };

const spansForDate = document.querySelectorAll('.span-for-timer-date') as NodeListOf<Element>;
const timerContainerParagraph = document.querySelector('.timer-container p') as HTMLElement;

const startDate = new Date('2022-12-18');
const endDate = new Date('2077-01-01');
const timerBeforeEnd = new Timer(endDate);