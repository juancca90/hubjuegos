import "./WhackAMole.css"

const template = `
<h3>Whack A Mole</h3>
    <div>
        Score : <span id="score">0</span>;
        Time : <span id="time">10</span>;
        <button id="start">Start</button>
    </div>

    <div class="board">
        <div class="cell" data-index="0"></div>
        <div class="cell" data-index="1"></div>
        <div class="cell" data-index="2"></div>
        <div class="cell" data-index="3"></div>
        <div class="cell" data-index="4"></div>
        <div class="cell" data-index="5"></div>
        <div class="cell" data-index="6"></div>
        <div class="cell" data-index="7"></div>
        <div class="cell" data-index="8"></div>
    </div>`;

// los elementos del html
const cells = document.querySelectorAll('.cell');
const scoreElement = document.querySelector('#score');
const timeElement = document.querySelector('#time');
const startBtn = document.querySelector('#start');


let score = 0;
let time = 10;
let currentPos;

//Se evalua si el topo esta en la casilla que se le hizo clic y si esta ahi se actualiza el puntaje
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (parseInt(cell.getAttribute('data-index')) === currentPos) { //En el evento de clic, se comprueba si el atributo data-index del elemento cell (convertido a un número usando parseInt) es igual al valor de currentPos.
            //El atributo data-index es un atributo personalizado en HTML que permite almacenar información adicional asociada a un elemento.
            score++;
            scoreElement.innerHTML = score;
        }
    })
});

// se le agrega un listener al boton de inicio
 //


const inicio = () => {
    let startGame = setInterval(() => { // se hace un loop hasta que el tiempo se acabe
        cells.forEach(cell => {
            cell.innerHTML = '';// se limpian las celdas, para que no haya mas de un topo
        });

        currentPos = Math.floor(Math.random() * 9);
        console.log(cells[currentPos]);
        cells[currentPos].innerHTML = '<div class="mole"></div>';// se llena una celda al azar agregando un div con un topo

       
        time--;
        timeElement.innerHTML = time;
        if (time === 0) { // verifica si se acabo el tiempo
            clearInterval(startGame); // detiene el loop de startGame
            
                alert('Game Over!');
           
        }
    }, 1000);
};

export const PrintTopoPage = () => {
    (document.querySelector("main").innerHTML = template);
    const startBtn = document.querySelector('#start');
    startBtn.addEventListener('click', inicio); 
};
