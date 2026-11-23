const button = document.getElementById("search-btn");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");


async function getData(cityName){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=988592da984c4b46b5734707262311&q=${cityName}&aqi=yes`
    );
    return await promise.json()


}

button.addEventListener('click', async ()=> {
    const value = input.value;
    const result =  await getData(value)
    cityName.innerHTML = `City - ${result.location.name}, ${result.location.region}, ${result.location.country}`
    
    cityTime.innerText = `Current Time - ${result.location.localtime}`;

    cityTemp.innerText = `Current Temperature - ${result.current.temp_c}°`;
});


//http://api.weatherapi.com/v1/current.json?key=988592da984c4b46b5734707262311&q=London&aqi=yes
