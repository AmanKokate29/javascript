const button = document.getElementById("get-location-btn");


async function getData(lat, long){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=988592da984c4b46b5734707262311&q=${lat},${long}&aqi=yes`
    );
    return await promise.json()

}

async function gotLocation(position){
    const result = await getData(position.coords.latitude, position.coords.longitude);
    console.log(result);
    
}

function failedToGet(){
    console.log("There Was some issue");
    
}

button.addEventListener('click', async() => {
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)

})