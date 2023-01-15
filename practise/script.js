function rain(){
    const content=document.createElement('div');
    content.classList.add('raining');
    content.innerHTML = '💧';
    
    document.body.appendChild(content);
}

setInterval(rain,5);