const d = new Date();
const hours = d.getHours();
const minutes = d.getMinutes();
const seconds = d.getSeconds();

document.getElementById("time").textContent = `The date is ${d}`;
document.getElementById(
  "hours"
).textContent = `The time is ${hours}:${minutes}:${seconds}`;
