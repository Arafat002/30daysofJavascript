const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl= document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears= '1 Jan 2023';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();


    const totalSeconds =(newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600)% 24;
    const mins = Math.floor(totalSeconds / 60)% 60;
    const seconds = Math.floor(totalSeconds)% 60;
 
    document.getElementById('days').innerHTML =formatTime(days) ;
    document.getElementById('hours').innerHTML = formatTime(hours);
    document.getElementById('mins').innerHTML = formatTime(mins);
    document.getElementById('seconds').innerHTML = formatTime(seconds);

}
  

function formatTime(time){
   return time < 1 ? '00'  : time;
}
countdown();

setInterval (countdown, 1000);
