const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secsEl=document.getElementById('seconds');
const submitBtn = document.getElementById('submit');
var inputDateEl = document.getElementById('input-date');
let targetYear

submitBtn.addEventListener('click',() =>
{
    targetYear=inputDateEl.value
    countDown();
    setInterval(countDown,1000)
})
function countDown(){
    const currentDate=new Date();    
    const targetYearsDate=new Date(targetYear);
    const seconds=(targetYearsDate-currentDate)/1000;
    const days=Math.floor(seconds/3600/24);
    const hours=Math.floor(seconds/3600)%24;
    const minutes=Math.floor(seconds/60)%60;
    const secs=Math.floor(seconds)%60;

    
    daysEl.innerText=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=minutes;
    secsEl.innerText=secs;
}

