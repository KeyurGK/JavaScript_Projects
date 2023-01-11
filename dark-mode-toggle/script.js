const toggle=document.getElementById('toggle');
const title =document.getElementById('title');
const content=document.getElementById('content');

toggle.addEventListener('change',()=>
{
    document.body.classList.toggle('dark');
    title.classList.toggle('modify1');
    content.classList.toggle('modify2');
})