const btn=document.getElementById('btn');
const nav=document.getElementById('nav');


btn.addEventListener('click', ()=>{
    nav.classList.add('active');
    btn.classList.toggle('active');
   
    
});