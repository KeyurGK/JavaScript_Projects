const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secsEl=document.getElementById('seconds');
const submitBtn = document.getElementById('submit');
var startDateEl = document.getElementById('start-date');
var targetDateEl = document.getElementById('target-date');
var startTimeEl = document.getElementById('start-time');
var targetTimeEl = document.getElementById('target-time');
let targetDate,startDate,startTime,targetTime

submitBtn.addEventListener('click',() =>
{
    startDate = startDateEl.value
    startTime = startTimeEl.value
    targetDate = targetDateEl.value
    targetTime = targetTimeEl.value
    console.log(startTime)
    countDown();
    setInterval(countDown,1000)
})
function countDown(){
    const startYearsDate = new Date(`${startDate},${startTime}`)
    const targetYearsDate=new Date(`${targetDate},${targetTime}`);
    

    const seconds=(targetYearsDate-startYearsDate)/1000;
    const days=Math.floor(seconds/3600/24);
    const hours=Math.floor(seconds/3600)%24;
    const minutes=Math.floor(seconds/60)%60;
    const secs=Math.floor(seconds)%60;

    
    daysEl.innerText=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=minutes;
    secsEl.innerText=secs;
}

