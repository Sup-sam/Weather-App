const apiKey = 'i hide it' ;
const apiUrl = "i hide it ";


const searchBox = document .querySelector(".search input");
const searchBtn = document .querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    //here below for show the error message if i search wrong city
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await response.json();

    // console.log(data); make it comment to not show me the date first i want serach then show me data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src ="clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "sun.png";

    }

    else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "rain.png";

    }

    else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "drizzle.png";

    }

    else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "mist.png";

    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    }

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})
