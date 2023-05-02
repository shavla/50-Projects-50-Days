const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const curTime = document.querySelector(".cur-time");
const curDay = document.querySelector(".cur-day");
const curMon = document.querySelector(".cur-mon");
const curDate = document.querySelector(".cur-date");
const toggle = document.querySelector(".toggle");

init();

function init() {
  let time = new Date();
  let [sec, min, ho] = [time.getSeconds(), time.getMinutes(), time.getHours()];

  second.style.transform = `translate(0, -50%) rotate(${sec * 6 - 90}deg)`;
  minute.style.transform = `translate(0, -50%) rotate(${min * 6 - 90}deg)`;
  hour.style.transform = `translate(0, -50%) rotate(${ho * 30 - 90}deg)`;

  curTime.textContent = PMAM(min, ho);
  curDay.textContent =
    time.toLocaleString("default", { weekday: "long" }) + ",";
  curMon.textContent = time.toLocaleString("default", { month: "short" });
  curDate.textContent = time.getDate();
  setTimeout(init, 1000);
}

function PMAM(minutes, hour) {
  let ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hour + ":" + minutes + " " + ampm;
}

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});
