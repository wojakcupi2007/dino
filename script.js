const dinosau = document.getElementById('dinosau');
const enemy = document.getElementById('enemy');
let isJumping = false;

function jump() {
    if (!isJumping) {
        isJumping = true;
        let position = 0;
        const jumpInterval = setInterval(() => {
            if (position >= 150) {
                clearInterval(jumpInterval);
                const fallInterval = setInterval(() => {
                    if (position === 0) {
                        clearInterval(fallInterval);
                        isJumping = false;
                    }
                    position -= 10;
                    dinosau.style.bottom = position + 'px';
                }, 20);
            }
            position += 10;
            dinosau.style.bottom = position + 'px';
        }, 20);
    }
}

function moveEnemy() {
  let enemyPosition = 0;
  const enemyInterval = setInterval(() => {
      if (enemyPosition === 400) {
          clearInterval(enemyInterval);
          enemyPosition = 0;
          moveEnemy();
      }
      enemyPosition += 5; // Ajusta la velocidad según sea necesario
      enemy.style.right = enemyPosition + 'px';

      // Comprueba la colisión
      if (
          enemyPosition <= 50 && enemyPosition >= 0 &&
          parseInt(dinosau.style.bottom) === 0 // Convierte a número entero
      ) {
          gameOver();
      }
  }, 20);
}


function gameOver() {
    alert('Game Over!');
    window.location.reload();
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === ' ') {
        jump();
    }
});

moveEnemy();
