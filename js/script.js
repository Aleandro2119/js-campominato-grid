// ? ESERCIZIO

// L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// ! FUNZIONE Numeri rand and (PUNTO 2)

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;



const getUniqueRandomNumber = (min, max, list, randomFunction) => {
    let randNumber;
    do {
        randNumber = randomFunction(min, max);
    } while (list.includes(randNumber));

    return randNumber;
};

const createCell = (cellNumber) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.setAttribute('id', cellNumber);
    cell.innerText = cellNumber;
    return cell;
};

const isEven = (number) => number % 2 === 0;


// !  COSTANTI LOGICHE

const cells = 8;
const columns = 8;
const totalCells = cells * columns;
const extractedNumbers = [];

// ! Recuperiamo la griglia (PUNTO 1)

const grid = document.getElementById('grid');

// ! Creo le celle (PUNTO 3)

for (let i = 0; i < totalCells; i++) {

    const cellNumber = getUniqueRandomNumber(1, 64, extractedNumbers, getRandomNumber);


    extractedNumbers.push(cellNumber);

    // ! Creo la cella (PUNTO 4)
    const cell = createCell(cellNumber);

    cell.addEventListener('click', () => {
        cell.classList.toggle('clicked');
        const colorClass = isEven(cellNumber) ? 'safe' : 'error';

        cell.classList.add(colorClass);
    });

    grid.appendChild(cell);
}
