
let btnFind = document.getElementById("searchLocation");
let searchValue = document.getElementById("searchvalue")


async function getApi(cityName="cairo") {
  let myHTTpREq = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=eae859a524774cc5ab4163048231008&q=${cityName}&days=3&aqi=yes&alerts=no`);
  let finalReq = await myHTTpREq.json();
  display(finalReq);
}
function display(city) {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let card = `<div class="col-md-6 m-auto">
    <div class="card">
      <div
        class="days d-flex justify-content-between align-items-center p-3"
      >
        <h5>${weekday[(new Date(city.forecast.forecastday[0].date)).getDay()]}</h5>
        <h6>${new Date(city.forecast.forecastday[0].date).getDate()}  ${month[(new Date(city.forecast.forecastday[0].date).getMonth())]}</h6>
      </div>
      <h2>
        ${city.location.name}.
      </h2>
      <div class="degree d-flex justify-content-between">
        <span>${city.forecast.forecastday[0].day.maxtemp_c}&deg;C</span>
        <img src="${city.forecast.forecastday[0].day.condition.icon}" alt="" />
      </div>
      <p>${city.forecast.forecastday[0].day.condition.text}</p>
      <div class="windSpeed">
        <span class="px-2">
          <img src="imge/umbrella_546456.png" alt="" class=""/>
          ${city.forecast.forecastday[0].day.avgvis_km}%
        </span>
        <span>
          <img src="imge/wind_1483274.png" alt="" />
          ${city.forecast.forecastday[0].day.maxwind_kph} kph
        </span>
        <span>
          <img src="imge/compass_9413239.png" alt="" />
          ${city.forecast.forecastday[0].day.avghumidity}
        </span>
      </div>
    </div>
  </div>
  <div class="col-md-6  cutome">
            <div class="col-md-12 uperr my-2">
              <div class="nextday">
                <div class="dey-header">
                  <h2>${weekday[(new Date(city.forecast.forecastday[1].date)).getDay()]}</h2>
                </div>
                <div class="day-content">
                  <img src="${city.forecast.forecastday[1].day.condition.icon}" alt="" />
                  <h3>${city.forecast.forecastday[1].day.maxtemp_c}&deg;C</h3>
                  <small>${city.forecast.forecastday[1].day.mintemp_c}&deg;C</small>
                  <p>${city.forecast.forecastday[1].day.condition.text}</p>
                </div>
              </div>
            </div>
            <div class="col-md-12 uperr">
              <div class="nextday">
                <div class="dey-header">
                  <h2>${weekday[(new Date(city.forecast.forecastday[2].date)).getDay()]}</h2>
                </div>
                <div class="day-content">
                  <img src="${city.forecast.forecastday[2].day.condition.icon}" alt="" />
                  <h3>${city.forecast.forecastday[2].day.maxtemp_c}&deg;C</h3>
                  <small>${city.forecast.forecastday[2].day.mintemp_c}&deg;C</small>
                  <p>${city.forecast.forecastday[2].day.condition.text}</p>
                </div>
              </div>
            </div>
          </div>
  `
  document.getElementById("demo").innerHTML = card

}

getApi()

searchValue.addEventListener("keyup", function () {
  if (searchValue.value == "") {
    getApi()

  }
  else {
    getApi(searchValue.value)
  }

})

btnFind.addEventListener("click", function () {

  getApi(searchValue.value)
})

let map = navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;
  console.log(latitude, longitude);

})
