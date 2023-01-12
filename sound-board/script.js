const sounds=['applause','stream', 'rain'];

sounds.forEach((sound) => {
    const btn=document.createElement('button');
    btn.classList.add('btn');
    document.body.appendChild(btn);
    btn.innerText=sound;
    btn.addEventListener('click',()=>
    {
        stopSongs();
        document.getElementById(sound).play();
    });
});

function stopSongs(){
    sounds.forEach((sound)=>
    {
        const song=document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}