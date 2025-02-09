// Lógica para la contraseña
const passwordCorrect = "120899";  // Cambia esto a la contraseña que quieras

document.getElementById('submit-password').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    
    if (password === passwordCorrect) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert("Contraseña incorrecta. Intenta de nuevo.");
    }
});


// Redirigir cuando se hace clic en "Sí, quiero"
document.getElementById('yes-btn').addEventListener('click', function() {
    window.location.href = 'siquiero.html'; // Redirige a la página de agradecimiento
});

// Redirigir cuando se hace clic en "No, gracias"
document.getElementById('no-btn').addEventListener('click', function() {
    window.location.href = 'noquiero.html'; // Redirige a la página con meme
});

// Crear estrellas dinámicamente
function createStars(numStars) {
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Posicionar aleatoriamente las estrellas en la pantalla
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        const delay = Math.random() * 3 + 's';
        
        star.style.left = `${xPos}px`;
        star.style.top = `${yPos}px`;
        star.style.animationDelay = delay;

        starsContainer.appendChild(star);
    }

    document.body.appendChild(starsContainer);
}

// Crear estrellas fugaces
function createMeteors(numMeteors) {
    for (let i = 0; i < numMeteors; i++) {
        const meteor = document.createElement('div');
        meteor.classList.add('meteor');

        // Posicionar aleatoriamente las estrellas fugaces
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;

        meteor.style.left = `${xPos}px`;
        meteor.style.top = `${yPos}px`;

        // Añadir el meteor al cuerpo del documento
        document.body.appendChild(meteor);

        // El meteor se mueve de izquierda a derecha y arriba a abajo
        setTimeout(() => {
            meteor.remove();  // Elimina el meteor al finalizar su animación
        }, 1500);  // Duración de la animación (1.5s)
    }
}

// Crear 100 estrellas normales y 10 meteoros
createStars(100);
setInterval(() => createMeteors(10), 1000); // Cada 1 segundo, generamos 10 meteoros




/* ////////////////////////////////////////////////// */
