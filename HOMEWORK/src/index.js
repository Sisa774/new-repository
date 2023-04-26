//feature 1
function currentTime() {


let now = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday"]
 day= days[now.getDay()];

let hours = [now.getHours()] 
let minutes = [now.getMinutes()];


let currentDate= document.querySelector(".date")
 currentDate.innerHTML= `${day} ${hours}:${minutes}`;
}
currentTime();

//feature 2
function searchCity(event) {
   event.preventDefault();
   let city= document.querySelector(".search-column");
   let newCity= document.querySelector("h1");
    newCity.innerHTML= city.value;
}

  let form = document.querySelector("#search-button");
    form.addEventListener("submit", searchCity);

//Bonus feature
function changeToFarenheit(event) {
   event.preventDefault();
   let changeCelcius= document.querySelector(".weather");
    changeCelcius.innerHTML= 80;
}

let farenheit= document.querySelector("#farenheit");
 farenheit.addEventListener("click", changeToFarenheit);

function changeToCelcius(event) {
   event.preventDefault();
   let changeFarenheit = document.querySelector(".weather");
    changeFarenheit.innerHTML = 23;
 }
let celcius = document.querySelector("#celcius");
 celcius.addEventListener("click", changeToCelcius);

