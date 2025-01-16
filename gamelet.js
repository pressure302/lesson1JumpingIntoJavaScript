const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let position = 0;
let positionTwo = 0;

function handleKeyPress(e) {
  if (e.code === 'KeyA') {
    position = position - 50;
  }
  if (e.code === 'KeyD') {
    position = position + 50;
  }
  if (e.code === 'KeyW') {
    positionTwo = positionTwo - 50;
  }
  if (e.code === 'KeyS') {
    positionTwo = positionTwo + 50;
  }
  if (position < 0) {
    position = 0;
  }
  if (positionTwo < 0) {
    positionTwo = 0;
  }
  refresh();
}

function refresh() {
  ball.style.left = position + 'px';
  ball.style.top = positionTwo + 'px';
}