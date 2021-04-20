const clockContainer = document.querySelector(".js-clockj");
const clockTitle = document.querySelector("h1");
/*
--> 이렇게 써도 같다
const clockContainer = document.querySelector(),
      clockTitle = document.querySelector("h1");
*/

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
  getTime();
  setInterval(getTime, 1000);
}
init();