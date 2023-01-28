function createHeart(){
    const heart=document.createElement('div');
    heart.innerText='❤️';
    heart.classList.add('heart');
    heart.style.left = Math.random()*100 +'vw';
    heart.style.animationDuration=Math.random()*2+1+'s';
    document.body.appendChild(heart);
}
document.body.style.background='black';
setInterval( createHeart,300);