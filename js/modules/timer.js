const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const timer = document.querySelector('#seconds');

let time = 0;
let timerId = null;
start.addEventListener('click', () => {
  if (timerId) return;
  setInterval(() => {
    console.log(time++)
  }, 1);
});

stop.addEventListener('click', () => {

});

console.log(time)