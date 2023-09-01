
const key = "9ebbccad1023e8c8f213d4c5193c5d77"
function dataOnScreen(dados){
    document.querySelector(".city").innerHTML = "Tempo em" + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°"
    document.querySelector(".description").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = dados.main.humidity + "%"
    ducument.querySelector("img-forecast").src = 'https://openweathermap.org/img/wn/${dados.weather[0].icon}.png'

}

 async function searchCity(city){
    const dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt-pt&units=metric').then(answear => answear.json())
    
    dataOnScreen(dados)

}

function clickedbutton(){
    const city = document.querySelector(".input-city").value
    

    searchCity(city)
}