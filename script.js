const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const laps = document.getElementById('laps');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function formatTime(ms){
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000)/ 1000);
  const milliseconds = Math.floor((ms % 1000)/ 10);


  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}

function startStopwatch() {
  
  if (!timerInterval) {
      startTime = Date.now() - elapsedTime; 
      timerInterval = setInterval(() => {
          elapsedTime = Date.now() - startTime;
          display.textContent = formatTime(elapsedTime);
      }, 10); 
  }
}

function stopStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
  startTime = 0;
  elapsedTime = 0;
  display.textContent = "00:00:00"; 
  laps.innerHTML = ''; 
}


function recordLap() {
  if (timerInterval) {
      const lapTime = formatTime(elapsedTime); 
      const lapItem = document.createElement('li'); 
      lapItem.textContent = lapTime; 
      laps.appendChild(lapItem); 
  }
}


startButton.addEventListener('click', startStopwatch); 
stopButton.addEventListener('click', stopStopwatch); 
resetButton.addEventListener('click', resetStopwatch); 
lapButton.addEventListener('click', recordLap); 