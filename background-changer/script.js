const btn=document.getElementById('btn');

btn.addEventListener('click',()=>{
   document.body.style.background = randomBg();
});

function randomBg(){
    return `rgb(${Math.floor(Math.random()*360)}, 20, 120)`;
}
btn.style.color='white';
btn.style.padding='1.5rem';
btn.style.borderRadius='2px';