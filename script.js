let valueSearch = document.getElementById("valueSearch");
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let description = document.querySelector(".description");
let clouds = document.getElementById("clouds");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  event.preventDefault();
  if (valueSearch.value != "") {
    searchWeather();
  }
});
let id = "9505fd1df737e20152fbd78cdb289b6a";
let url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + id;
const searchWeather = () => {
  fetch(url + "&q=" + valueSearch.value)
    .then((responsive) => responsive.json())
    .then((data) => {
      console.log(data);
      if (data.cod === 200) {
        (city.querySelector("figcaption").innerText = data.name),
          (city.querySelector("img").src =
            "https://flagsapi.com/" + data.sys.country + "/shiny/32.png");

        temperature.querySelector("img").src =
          "http://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@4x.png";
        temperature.querySelector("figcaption span").innerHTML = data.main.temp;
        description.innerText = data.weather[0].description;
        clouds.innerText = data.clouds.all;
        humidity.innerText = data.main.humidity;
        pressure.innerText = data.main.pressure;
      }

      valueSearch.value = ''
    });
};
