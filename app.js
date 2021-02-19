//Add Enter button functionality
document.getElementById("search-field").addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            document.getElementById("search-btn").click();
        }
    });

    //api key
const KEY = '629da55c6d95ad4cbca013af30e27fc5';
const searchItems = () =>{
    const searchText =document.getElementById('search-field').value;
    if(searchText==''){
        document.getElementById('city-title').innerText = data.name || "Unknown Location";
    }
    else{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=${KEY}`
    fetch(url)
        .then(response =>response.json())
        .then(data => showUpdates(data))
    }
}

const showUpdates = data => {
    document.getElementById('city-title').innerText = data.name || "Unknown Location";
    document.getElementById('city-temp').innerText = `${data.main.temp} &deg; C`;
    document.getElementById('city-lead').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value = "";
}
