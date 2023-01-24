const cover = document.querySelector('.cover');
function snowing(){
    const data = document.createElement('div');
    data.classList.add('data');
    data.innerHTML = '❄️';
    data.style.left=(Math.random()*100)+'vw';
    cover.appendChild(data);
}

setInterval(snowing,500);