// Seleccionamos elementos del DOM
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const question = document.getElementById('question');
const message = document.getElementById('message');
const restartButton = document.getElementById('restartButton');

// Lista de mensajes interactivos para el botón "No"
const messages = [
  "¿Estás segur@?",
  "¡Vamos, dale una oportunidad!",
  "No seas tímid@, ¡presiona Sí!",
  "Sabes que quieres decir Sí...",
  "¿Por qué sigues haciendo clic en No?",
  "¡El botón Sí es mucho más feliz!",
  "Que abuso",
  "Mal ehhhh, vamos presiona Si",
  "¿Qué tal si lo intentas de nuevo?",
  "¡Presiona Sí y hazme feliz!"
];

// Lista de mensajes para la presentación final
const presentationMessages = [
  "Holaaaaaaa",
  "Sabes quién soy?",
  ":0",
  "¿Nada?",
  "...",
  "Momento suspenso...",
  "Vamos, ¡adivina!",
  "O ya sabes, bueno mmm",
  "Si no sabes o si sabes, ps soy yo.",
  "Issei.",
  "Issei Shadow",
  "No cualquier Issei.",
  "Bueno, ¿qué te quería decir?",
  "Mmm",
  "Mmmmm",
  "Mmmmmmmm",
  "Forever Furina...",
  "Nah.....",
  "Mis 15 q te empreste",
  "Broma, broma.",
  "A ver, te quería decir que...",
  "Pam, eres peruana como yo.",
  "Jsdjajdsjasjdasjd",
  "Ya bueno, basta de bromas.",
  "Oye, pero...",
  "¿Por qué hay alguien detrás de ti?",
  "Vi una sombra creo",
  "Sospechoso",
  "Ya miraste?",
  "¿Estas segura?",
  "Yap....",
  "Ya bueno, quería decir que...",
  "Feliz San Valentín :=",
  "Bueno gracias por ser una amiga",
  "Antes de que vuele alto",
  "Y sea un fantasmita",
  "Te quieria decir eso :0",
  "También queria decirte otra cosa",
  "Pero....",
  "No importa",
  "Y dime",
  "Cuando un League of Legends",
  "Te enseño",
  "¿Que dices?",
  "....",
  "Esperare tu respuesta o no talvez",
  "Nos veremos creo",
  "En la U",
  "Hasta pronto",
  "O",
  "Hasta luego",
  "Y .....",
  "Cuidese",
  "Bye..."
];

// Función para mover el botón "No" aleatoriamente
function moveButton() {
  const screenWidth = window.innerWidth - noButton.offsetWidth; // Restamos el ancho del botón
  const screenHeight = window.innerHeight - noButton.offsetHeight; // Restamos la altura del botón

  const randomX = Math.random() * screenWidth;
  const randomY = Math.random() * screenHeight;

  // Aplicamos las nuevas coordenadas con transición suave
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Función para cambiar el mensaje de forma aleatoria
function changeMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  question.textContent = messages[randomIndex];
}

// Función para simular la animación de tipeo
function typeWriter(text, element, delay = 50, callback) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
      if (callback) callback();
    }
  }, delay);
}

// Función para mostrar la presentación final
function showPresentation(messages, index = 0) {
  if (index < messages.length) {
    typeWriter(messages[index], message, 50, () => {
      setTimeout(() => {
        message.textContent = "";
        showPresentation(messages, index + 1);
      }, 1500);
    });
  } else {
    restartButton.classList.remove('hidden');
  }
}

// Función para reiniciar la experiencia
function restartExperience() {
  question.textContent = "¿Quieres dar click?";
  question.classList.remove('hidden');
  yesButton.classList.remove('hidden');
  noButton.classList.remove('hidden');
  message.textContent = "";
  message.classList.add('hidden');
  restartButton.classList.add('hidden');

  noButton.style.position = 'relative';
  noButton.style.left = '0';
  noButton.style.top = '0';
}

// Agregar evento al botón "No"
noButton.addEventListener('click', (event) => {
  event.preventDefault();
  moveButton();
  changeMessage();
});

// Agregar evento al botón "Sí"
yesButton.addEventListener('click', () => {
  const initialText = "¡Sabía que dirías que sí! ❤️";

  question.classList.add('hidden');
  yesButton.classList.add('hidden');
  noButton.classList.add('hidden');

  message.classList.remove('hidden');
  typeWriter(initialText, message, 50, () => {
    setTimeout(() => {
      message.textContent = "";
      showPresentation(presentationMessages);
    }, 1500);
  });
});

// Agregar evento al botón de reinicio
restartButton.addEventListener('click', restartExperience);