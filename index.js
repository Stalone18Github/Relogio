const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");

setInterval(() => {
  const dateToday = new Date();
  let hr = dateToday.getHours();
  let mn = dateToday.getMinutes();
  let sn = dateToday.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (mn < 10) mn = "0" + mn;
  if (sn < 10) sn = "0" + sn;

  horas.textContent = hr;
  minutos.textContent = mn;
  segundos.textContent = sn;
});
