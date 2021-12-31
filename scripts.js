const setTime = document.querySelector("#time");
const setDate = document.querySelector("#date");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function updateTime() {
  const currentTime = new Date();
  let hours = (currentTime.getHours() + 24) % 12 || 12;
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let month = months[currentTime.getMonth()];
  let day = currentTime.getDate();
  let year = currentTime.getFullYear();
  let suffix;
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (currentTime.getHours() >= 12) {
    suffix = "pm";
  } else {
    suffix = "am";
  }
  setTime.textContent = hours + ":" + minutes + ":" + seconds + "" + suffix;

  if (day < 10) {
    day = "0" + day;
  }
  setDate.textContent = month + " " + day + ", " + year;
}
setInterval(updateTime, 1000);
