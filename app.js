document.addEventListener('DOMContentLoaded', () => {
  const dino = document.querySelector('.dino');
  let gravity = 0.9;
  let isJumping = false;
  let position = 50; //ground level

  function control(e) {
    if (e.code === 'Space' && !isJumping) {
      jump();
    }
  }

  function jump() {
    isJumping = true;
    let count = 0;

    const upTimerId = setInterval(() => {
      if (count >= 15) {
        clearInterval(upTimerId);

        // Start falling
        const downTimerId = setInterval(() => {
          if (position <= 50) {
            position = 20; // Snap to ground level
            clearInterval(downTimerId);
            isJumping = false;
          } else {
            position -= 5;
            position *= gravity;
            dino.style.bottom = position + 'px';
          }
        }, 20);
      } else {
        // Move up
        position += 30;
        position *= gravity;
        dino.style.bottom = position + 'px';
        count++;
      }
    }, 20);
  }

  document.addEventListener('keydown', control);
});
 