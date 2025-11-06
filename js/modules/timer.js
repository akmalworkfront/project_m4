const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const timer = document.querySelector('#seconds');

let time = 0;
let intermediateTime = null;

start.addEventListener('click', () => {
  if (intermediateTime) return;
  intermediateTime = setInterval(() => {
    time++
    timer.textContent = time;
  }, 1000);
});

stop.addEventListener('click', () => {
  clearInterval(intermediateTime);
  intermediateTime = null;
});

reset.addEventListener('click', () => {
  clearInterval(intermediateTime);
  intermediateTime = null;
  time = 0;
  timer.textContent = time; 
}); 