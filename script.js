const img = document.getElementById('img');
const btns = document.getElementById('btns');
let colorsindex = 0;
let intervalId = null;

const trafficLight = (event) => {
  stopAutomatic();
  turnOn[event.target.id]();
}

const nextIndex = () => colorsindex = colorsindex < 2 ? ++colorsindex : 0;

const changeColor = () => {
  const colors = [
    'red',
    'yellow',
    'green'
  ]
  const color = colors[ colorsindex ];
  turnOn[color]();

  nextIndex();
}

const stopAutomatic = () => {
  clearInterval ( intervalId );
}

const turnOn = {
  'red':          () => img.src = 'img/vermelho.png',
  'yellow':       () => img.src = 'img/amarelo.png',
  'green':        () => img.src = "img/verde.png",
  'automatic':    () => intervalId = setInterval(changeColor, 1000),
}

btns.addEventListener('click', trafficLight);





