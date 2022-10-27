
// Creating a webpage with a 16x16 grid of square divs


const row = document.querySelector('#row');
const column = document.querySelector('#column');



function makeRow(n) {

    for (let c=0; c<=n; c++){
    for (let r=0; r<=n; r++){
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        row.appendChild(squareDiv);
    }
};
};



makeRow(16);
