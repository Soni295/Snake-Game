// Pantalla donde se mostrara el juego
const screen = document.getElementById("screen");
const context = screen.getContext("2d");

// proporcion de la serpiente
let scale = 20;

// Escala del juego
const column = screen.width / scale;
const rows = screen.height / scale;

// Los modales de carga
const launch = document.getElementById("modal2");
const tryAgain = document.getElementById("modal1");

// fotos por milisegundo
let fpmls = 250;
