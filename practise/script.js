const changeContentEl=document.getElementById('change-content');
function load(){
    load1();
    
 }
function load1(){
 changeContentEl.innerHTML='a';
 setTimeout(load2, 500); 
}
function load2(){
    changeContentEl.innerHTML='b';
    
}
setInterval(load1,3000);
