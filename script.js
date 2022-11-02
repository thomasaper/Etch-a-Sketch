///// Create a webpage with a 16x16 grid of square divs. /////


// Important consts 
const container = document.querySelector("#container"); // Reference to container
const rows = document.getElementsByClassName("gridRow"); // Reference to gridRow
const cell = document.getElementsByClassName("cell"); // Reference to cell
const btn = document.querySelector('#btn'); // Reference to button

// Creates a default grid sized n
function defaultGrid(n) {
    makeRows(n);
    makeCells(n);
};

// Creates rows
function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        const row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates cells
function makeCells(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            const newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};

// calling the function
defaultGrid(prompt("Choose grid size between 5-64!", "16"));



//change color when mouseover 

function changeColor(target) {
    target.style.backgroundColor = "black"; 
}

container.addEventListener('mouseover', function (e) {
    target = e.target;

    if(target.matches("div.cell")){
        changeColor(target);
    }
  });


// change gridsize with button

  btn.addEventListener('click', () => {
    defaultGrid(prompt("Choose grid size between 5-64!", "16"));
  });

