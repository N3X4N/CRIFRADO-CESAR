// Definimos el alfabeto
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

// Referencias a los elementos del DOM
const outerWheel = document.getElementById('outer-wheel');
const innerWheel = document.getElementById('inner-wheel');
const shiftInput = document.getElementById('shift');
const directionSelect = document.getElementById('direction');
const inputText = document.getElementById('inputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const resultGlitch = document.getElementById('result-glitch');

// Radios para posicionar letras en cada rueda
const outerRadius = 140; 
const innerRadius = 100;

/**
 * Coloca las letras en un contenedor en forma circular.
 * container - Elemento donde colocar las letras.
 * radius - Distancia desde el centro para ubicar las letras.
 * letterClass - Clase para las letras (por ejemplo, 'letter-outer' o 'letter-inner').
 */
function placeLetters(container, radius, letterClass) {
  alphabet.forEach((letter, index) => {
    const angle = (index / 26) * 360;
    const letterElem = document.createElement('div');
    letterElem.classList.add(letterClass);
    letterElem.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
    letterElem.textContent = letter;
    container.appendChild(letterElem);
  });
}

// Colocar las letras en la rueda externa e interna
placeLetters(outerWheel, outerRadius, 'letter-outer');
placeLetters(innerWheel, innerRadius, 'letter-inner');

/**
 * Actualiza la rotación de la rueda interna en función del shift y la dirección.
 */
function updateWheelRotation() {
  let shiftValue = parseInt(shiftInput.value) || 0;
  shiftValue = shiftValue % 26;
  if (directionSelect.value === 'left') {
    shiftValue = -shiftValue;
  }
  const degreesPerLetter = 360 / 26;
  innerWheel.style.transform = `rotate(${shiftValue * degreesPerLetter}deg)`;
}

shiftInput.addEventListener('input', updateWheelRotation);
directionSelect.addEventListener('change', updateWheelRotation);
updateWheelRotation();

/**
 * Función para cifrar o descifrar usando el cifrado César.
 * @param {string} text - Texto a procesar.
 * @param {number} shift - Desplazamiento (0-25).
 * @param {string} direction - 'left' o 'right'.
 * @returns {string} - Texto resultante.
 */
function caesarCipher(text, shift, direction) {
  shift = shift % 26;
  if (direction === 'left') {
    shift = -shift;
  }
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const upperChar = char.toUpperCase();
    const index = alphabet.indexOf(upperChar);
    if (index === -1) {
      result += char;
    } else {
      let newIndex = (index + shift) % 26;
      if (newIndex < 0) newIndex += 26;
      const newChar = alphabet[newIndex];
      result += (char === char.toLowerCase()) ? newChar.toLowerCase() : newChar;
    }
  }
  return result;
}

/**
 * Muestra el resultado en el contenedor con efecto glitch.
 * Se actualiza el atributo 'title' y el contenido de texto.
 * @param {string} text - Texto resultante.
 */
function displayResult(text) {
  resultGlitch.setAttribute('title', text);
  resultGlitch.textContent = text;
}

// Botones de cifrar y descifrar
encryptBtn.addEventListener('click', () => {
  const shiftValue = parseInt(shiftInput.value) || 0;
  const dir = directionSelect.value;
  const text = inputText.value;
  const ciphered = caesarCipher(text, shiftValue, dir);
  displayResult(ciphered);
});

decryptBtn.addEventListener('click', () => {
  const shiftValue = parseInt(shiftInput.value) || 0;
  const dir = (directionSelect.value === 'right') ? 'left' : 'right';
  const text = inputText.value;
  const deciphered = caesarCipher(text, shiftValue, dir);
  displayResult(deciphered);
});
