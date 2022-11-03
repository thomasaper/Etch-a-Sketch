///// Create a webpage with a 16x16 grid of square divs. /////


// Important consts 
const container = document.querySelector("#container"); // Reference to container
const rows = document.getElementsByClassName("gridRow"); // Reference to gridRow
const cell = document.getElementsByClassName("cell"); // Reference to cell
const btn = document.querySelector('#btn'); // Reference to button New Grid


// Creates a default grid sized n
function defaultGrid(number) {
    makeRows(number);
    makeCells(number);
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


  function promptGrid() {
    let number = prompt("Choose grid size between 5-64!", 16); 
     if (number >= 5 && number <= 64) {
         defaultGrid (number);
     }else {
         do {
             number = prompt("Invalid size! Try Again! Make sure your value is between 5-64!");
         }
         while(number < 5 || number > 64);
         defaultGrid (number);
     }
 }
        

//reset button

const reset = document.querySelector('#reset');
reset.addEventListener('click', () =>{
     window.location.reload();
});


// calling the function
promptGrid();

 