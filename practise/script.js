const test=document.getElementById('test');
const color=document.getElementById('color');
const size=document.getElementById('size');
const upper=document.getElementById('upper');

color.addEventListener('click',() =>
{
    test.classList.toggle('change1');
});

size.addEventListener('click',()=>
{
    test.classList.toggle('change2');
});
upper.addEventListener('click',()=>
{
    test.classList.toggle('change3');
})