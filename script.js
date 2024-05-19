const enterBut = document.getElementById("submitButton");
const apiKey = "6eb015e4ca9b4838bb855556241104";
let cityInput;
const startCairo = document.getElementById("degree");
const condition = document.getElementById("descriptionCairo");
const startLondon = document.getElementById("degreeLondon");
const conditionLondon = document.getElementById("descriptionLondon");
const searchCity = document.getElementById("countrySearch");
const searchCondition = document.getElementById("conditionSearch");
const weatherInformationDisplay = document.getElementById("degreeSearch");
const cairoImage = document.getElementById("imgContainer");
const londonImage = document.getElementById("imgContainerLondon");



async function cairo() {

    try{

        const res = await fetch("https://api.weatherapi.com/v1/current.json?key=6eb015e4ca9b4838bb855556241104&q=cairo&aqi=no");
        const data = await res.json();
        const cairoDegree = data.current.temp_c;

        if(!res.ok){
            console.log("somthing bad happened!");
            return;
        }

        startCairo.innerText = cairoDegree + "°C";
        condition.innerText = "Weather Is " + data.current.condition.text;

            if(data.current.condition.text.includes('sunny')){
                cairoImage.src = "images/5.png";
                cairoImage.alt = 'Sunny Weather';
            } else if(data.current.condition.text.includes('cloudy')){
                cairoImage.src = "images/1.png";
                cairoImage.alt = "Cloudy Weather";
            } else if(data.current.condition.text.includes('rain')){
                cairoImage.src = "images/3.png";
                cairoImage.alt = "Rainy Weather";
            } else{
                cairoImage.src = "images/5.png";
                cairoImage.alt = "Default Weather";
            }
       
    }catch(error){

        console.log(error);

    }

    

}
cairo();

async function london() {

    try{

        const res = await fetch("https://api.weatherapi.com/v1/current.json?key=6eb015e4ca9b4838bb855556241104&q=London&aqi=no");
        const data = await res.json();
        const londonDegree = data.current.temp_c;

        if(!res.ok){
            console.log("somthing bad happened!");
            return;
        }

        startLondon.innerText = londonDegree + "°C";
        conditionLondon.innerText = "Weather Is " + data.current.condition.text;

        if(data.current.condition.text.includes('sunny')){
            londonImage.src = "images/5.png";
            londonImage.alt = 'Sunny Weather';
        } else if(data.current.condition.text.includes('cloudy')){
            londonImage.src = "images/1.png";
            londonImage.alt = "Cloudy Weather";
        } else if(data.current.condition.text.includes('rain')){
            londonImage.src = "images/3.png";
            londonImage.alt = "Rainy Weather";
        } else{
            londonImage.src = "images/5.png";
            londonImage.alt = "Default Weather";
        }

    }catch(error){

        console.log(error);

    }
}
london();

async function weatherMan(){

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}&aqi=no`;

    try{
        const information = await fetch(apiUrl);
        const  informationJson= await information.json();
        const tepmC = informationJson.current.temp_c;
        const nameCity = informationJson.location.name;
        const conditionCity = informationJson.current.condition.text;

        console.log(informationJson);

        
        weatherInformationDisplay.innerText = tepmC + "°C"; //temp in c
        searchCity.innerText = nameCity;
        searchCondition.innerText = `The weather is ${conditionCity}.`;
    }catch(error){
        weatherInformationDisplay.innerText = "country/city doesn't exist";
        searchCity.innerText = "Country/City";
        searchCondition.innerText = `The weather condition is unknown.`;
    }  
    updateWeatherImage();
}

enterBut.onclick = function() {
    
    cityInput = document.getElementById("cityName").value;
    weatherMan();

}

function updateWeatherImage() {
    
    const weatherDescription = document.getElementById("conditionSearch").textContent.toLowerCase();
    const weatherImage = document.getElementById("imgSearch");

    if (weatherDescription.includes("sunny")) {
        weatherImage.src = "images/5.png";
        weatherImage.alt = "Sunny Weather";
    } else if (weatherDescription.includes("cloudy") ) {
        weatherImage.src = "images/1.png";
        weatherImage.alt = "Cloudy Weather";
    } else if(weatherDescription.includes("rain")){
        weatherImage.src = "images/3.png";
        weatherImage.alt = "Rainy Weather";
    }else {
        weatherImage.src = "images/5.png";
        weatherImage.alt = "Default Weather";
    }
}