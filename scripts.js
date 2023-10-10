let key = "9ebbccad1023e8c8f213d4c5193c5d77"


function dataOnScreen(dados){
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".description").innerHTML = dados.weather[0].description
    document.querySelector(".icone-cloud").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function searchCity(city){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    city + 
    "&appid=" + 
    key + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(answer => answer.json())

    dataOnScreen(dados)
}


function clickedbutton(){
   let city = document.querySelector(".input-city").value

   searchCity(city)
}