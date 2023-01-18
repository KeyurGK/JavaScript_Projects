
const notesEl = document.querySelector('.notes');
const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');

const mainEl= notesEl.querySelector('.main');
const textAreaEl = notesEl.querySelector('textarea');
editBtn.addEventListener('click', ()=>
{
    mainEl.classList.toggle('hidden');
    textAreaEl.classList.toggle('hidden');
});

textAreaEl.addEventListener('input', (e)=>
{
    const { value } = e.target;
    mainEl.innerHTML = marked(value);
})