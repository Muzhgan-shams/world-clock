function updateTime() {
  // Kabul
  let kabulElement = document.querySelector('#kabul');
  let kabulDateElement = kabulElement.querySelector('.date');
  let kabulTimeElement = kabulElement.querySelector('.time');
  let kabulTime = moment().tz('Asia/Kabul');

  kabulDateElement.innerHTML = kabulTime.format('MMMM  Do YYYY');
  kabulTimeElement.innerHTML = kabulTime.format('h:mm:ss [<small>]A[</small>]');
  // Peshawar
  let peshawarElement = document.querySelector('#peshawar');
  let peshawarDateElement = peshawarElement.querySelector('.date');
  let peshawarTimeElement = peshawarElement.querySelector('.time');
  let peshawarTime = moment().tz('Asia/Karachi');

  peshawarDateElement.innerHTML = peshawarTime.format('MMMM  Do YYYY');
  peshawarTimeElement.innerHTML = peshawarTime.format(
    'h:mm:ss [<small>]A[</small>]'
  );
}
updateTime();
setInterval(updateTime, 1000);
