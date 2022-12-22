const btn=document.getElementById('btn');
const nav=document.getElementById('nav');
const list=document.getElementById('list');

btn.addEventListener('click', ()=>{
    nav.classList.add('active');
    btn.classList.toggle('active');
    const content='heyhey';
    const liel=document.createElement('li');
    liel.innerText=content;
    list.appendChild(liel);
    
});