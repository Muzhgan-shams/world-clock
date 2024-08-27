function updateTime() {
  // Kabul
  let kabulElement = document.querySelector('#kabul');
  if (kabulElement) {
    let kabulDateElement = kabulElement.querySelector('.date');
    let kabulTimeElement = kabulElement.querySelector('.time');
    let kabulTime = moment().tz('Asia/Kabul');

    kabulDateElement.innerHTML = kabulTime.format('MMMM  Do YYYY');
    kabulTimeElement.innerHTML = kabulTime.format(
      'h:mm:ss [<small>]A[</small>]'
    );
  }
  // Peshawar
  let peshawarElement = document.querySelector('#peshawar');
  if (peshawarElement) {
    let peshawarDateElement = peshawarElement.querySelector('.date');
    let peshawarTimeElement = peshawarElement.querySelector('.time');
    let peshawarTime = moment().tz('Asia/Karachi');

    peshawarDateElement.innerHTML = peshawarTime.format('MMMM  Do YYYY');
    peshawarTimeElement.innerHTML = peshawarTime.format(
      'h:mm:ss [<small>]A[</small>]'
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === 'current') {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace('_', ' ').split('/')[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector('#cities');
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format('MMMM	Do YYYY')}</div>
    </div>
    <div class="time">${cityTime.format('h:mm:ss')} <small>${cityTime.format(
    'A'
  )}</small></div>
  </div>

  <a href="/" class="home"> Back </a>
  `;
}
updateTime();
setInterval(updateTime, 1000);

let selectElement = document.querySelector('#city');
selectElement.addEventListener('change', updateCity);
