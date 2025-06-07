// Genera el número secreto aleatorio entre 1 y 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Arreglo para guardar los intentos del usuario
let attempts = [];

// Bandera para saber si el juego terminó
let gameOver = false;

// Referencias a los elementos del DOM
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const result = document.getElementById('result');
const attemptsList = document.getElementById('attemptsList');

// Actualiza la lista de intentos en pantalla
function updateAttempts() {
    attemptsList.innerHTML = '';
    attempts.forEach((attempt, idx) => {
        const li = document.createElement('li');
        li.textContent = `Intento ${idx + 1}: ${attempt}`;
        attemptsList.appendChild(li);
    });
}

// Muestra un mensaje de pista o error en pantalla
function showMessage(msg, color = '#3b82f6') {
    message.textContent = msg;
    message.style.color = color;
}

// Muestra el resultado final en pantalla
function showResult(msg, color = '#16a34a') {
    result.textContent = msg;
    result.style.color = color;
}

// Reinicia el juego a su estado inicial
function resetGame() {
    attempts = [];
    updateAttempts();
    showMessage('');
    showResult('');
    guessInput.value = '';
    guessInput.disabled = false;
    guessBtn.textContent = 'Adivinar';
    gameOver = false;
}

// Evento al hacer clic en el botón de adivinar
guessBtn.addEventListener('click', () => {
    // Si el juego terminó, recarga la página para reiniciar
    if (gameOver) {
        window.location.reload();
        return;
    }
    // Obtiene el valor ingresado y lo convierte a número
    const guess = Number(guessInput.value);
    // Valida que el número esté en el rango permitido
    if (!guess || guess < 1 || guess > 100) {
        showMessage('Por favor ingresa un número válido entre 1 y 100', '#ef4444');
        return;
    }
    // Guarda el intento y actualiza la lista
    attempts.push(guess);
    updateAttempts();

    // Verifica si el usuario acertó
    if (guess === secretNumber) {
        showResult('¡Correcto! Descubriste el número secreto 🎉');
        showMessage('');
        guessInput.disabled = true;
        guessBtn.textContent = 'Jugar de nuevo';
        gameOver = true;
    } else if (guess < secretNumber) {
        // Da pista si el número es menor
        showMessage('El número secreto es mayor ⬆️');
        showResult('');
    } else {
        // Da pista si el número es mayor
        showMessage('El número secreto es menor ⬇️');
        showResult('');
    }
    // Limpia el input y lo enfoca para el siguiente intento
    guessInput.value = '';
    guessInput.focus();
});

// Permite adivinar presionando Enter en el input
guessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') guessBtn.click();
});

// Inicializa el juego al cargar la página
resetGame();