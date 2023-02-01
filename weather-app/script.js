const contentEl=document.getElementById('content');
const searchEl=document.getElementById('search');
const searchBtn=document.getElementById('search-button');
const locationEl=document.getElementById('location');
var col1El=document.getElementById('col-1').querySelectorAll('.col-1');



const APIURL = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d100bb424mshaaaecf4bd1066f5p1b5cb0jsn7cc8632e6b51',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


searchBtn.addEventListener('click',(e)=>
{
    e.preventDefault();
    let location = searchEl.value;
    if(location){
        getWeather(location);
    }
    else{
        alert('Please enter the location!');
    }
});

async function getWeather(location){
    const resp=await fetch(APIURL+location,options);
    const respData=await resp.json();
    addLocation(respData,location);
    console.log(respData);
};

function addLocation(locationData,location){
        // col1El[0].innerHTML= '🔥';
         col1El[1].innerHTML= `${locationData.temp}`;
}






// searchBtn.style.padding = '5px 20px';
// searchBtn.style.fontFamily = 'poppins';
// searchBtn.style.textTransform = 'uppercase';
// searchBtn.style.fontSize = '1.2rem';

// function entry(){
// const shower = document.createElement('div');
// shower.innerHTML='☁️<br>🌤️<br>🌩️<br>🌦️<br>🌧️<br>🌨️<br>❄️<br>☀️';
// shower.classList.add('shower');
// shower.style.left=Math.floor(Math.random()*360)+'vw';
// document.body.appendChild(shower);
// }

// setInterval(entry,300);
// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
// 	.then(response => response.json())
// 	.catch(err => console.error(err));

// function add(){
// contentEl.innerHTML= 'response';
// };

// add();
// headerEl.innerHTML=`
//         <h1>Weather App</h1>
//         <div class="search-bar">
//             <input type="text" id="search" placeholder="Enter the location" autocomplete="off"/>
//             <button id="search-button" class="search-button">Search</button>
//         </div>`;