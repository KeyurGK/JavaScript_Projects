const btn=document.getElementById('btn');

btn.addEventListener('click',()=>{
   document.body.style.background = randomBg();
});

function randomBg(){
    return `rgb(${Math.floor(Math.random()*360)}, 100, 20)`;
}
