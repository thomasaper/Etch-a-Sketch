
// Creating a webpage with a 16x16 grid of square divs

const body = document.querySelector('body'); // Reference to body

const grid = document.createElement('div');  // Creating div for the grid
grid.classList.add('grid'); // adding class grid
body.appendChild(grid); // appending div for grid to body

const rows = document.createElement('div'); // Creating div for rows 
rows.classList.add('rows'); // adding class rows
grid.appendChild(rows); // appending div for rows to grid

const singleRow = document.createElement('div'); // Creating div for singleRow
singleRow.classList.add('singleRow'); // adding class singeRow
rows.appendChild(singleRow); // appending div singleRow to rows



const makeSingleRow = function(n) {

    for (let s=0; s<n; s++) {
        const cell = document.createElement('div'); // Creating div for cells
        cell.classList.add('cell'); // adding class cell
        singleRow.appendChild(cell); // appending div cell to singleRow
    }
};


function makeRows(n) {

    for (let r=0; r<n; r++) {
        //makeSingleRow(n);
        
    }
};



    makeSingleRow(16)
    makeRows(16);





