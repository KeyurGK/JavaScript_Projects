const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secsEl=document.getElementById('seconds');
const newYears='20 Dec 2022';
function countDown(){
    const currentDate=new Date();
    const newYearsDate=new Date(newYears);
    const seconds=(newYearsDate-currentDate)/1000;
    const days=Math.floor(seconds/3600/24);
    const hours=Math.floor(seconds/3600)%24;
    const minutes=Math.floor(seconds/60)%60;
    const secs=Math.floor(seconds)%60;

    console.log(days,hours,minutes,secs);
    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=minutes;
    secsEl.innerHTML=secs;
}
countDown();
setInterval(countDown,1000);
