const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel auctor orci. Aliquam lectus ante, hendrerit ut consequat vitae, tincidunt ut ex. Sed ut risus id augue maximus sodales. In et dolor mauris. Suspendisse sagittis dapibus massa, vel lobortis neque porta quis. Mauris quis felis ut urna sodales facilisis sit amet ut tellus. Donec eu sem justo. Nam et ligula efficitur, iaculis orci in, dignissim metus. Maecenas ullamcorper turpis at mi dapibus imperdiet. Nullam nisi elit, commodo ac volutpat sed, aliquam sed dui. Sed vel augue diam. Duis rutrum iaculis ultricies. ';

let index =0;
function writeText(){
    document.body.innerText = text.slice(0,index);
    index++;
    
    if(index > text.length - 1){
        index = 0;
    }
}
document.body.style.color='white';
document.body.style.background='red';
setInterval(writeText, 30);