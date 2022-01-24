// ? ESERCIZIO

// L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// ! FUNZIONE Numeri rand

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;




// !  COSTANTI LOGICHE

const cells = 8;
const columns = 8;
const totalCells = cells * columns;
const extractedNumbers = [];

// ! Recuperiamo la griglia (PUNTO 1)

const grid = document.getElementById('grid');