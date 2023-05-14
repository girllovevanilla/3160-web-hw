const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cat = {
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  color: '#FFDAB9',
};

function drawCat() {
  ctx.fillStyle = cat.color;
  ctx.fillRect(cat.x, cat.y, cat.width, cat.height);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animate() {
  clearCanvas();
  drawCat();
  
  // Move the cat
  cat.x += 5;
  if (cat.x > canvas.width) {
    cat.x = -cat.width;
  }
  
  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();
