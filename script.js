
const container = document.querySelector('#container');
let gridSizeDisplay = document.querySelector('.grid-size');
gridSizeDisplay.textContent = '16x16';
let gridSize = 16; //first grid is 16X16
let gridArea;
let firstLoad = 1;

buildGrid();
function buildGrid(){
    gridArea = Math.pow(gridSize,2);
    if (!firstLoad){ //clear previous grid after user input
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        container.style.cssText = `grid-template-columns:repeat(${gridSize},1fr)`;
    }
    gridSizeDisplay.textContent =  `${gridSize}x${gridSize}`
    let i= 0;
    while(i < gridArea){
        const cell = document.createElement('div');
        cell.classList.add('cell',`cell${i}`);
        container.appendChild(cell);    
        i++; 
    }
    const cells = Array.from(document.getElementsByClassName('cell'));
    cells.forEach((cell) => {
    cell.addEventListener('click',createHoverEffect);
    cell.addEventListener('click',hover);
});
}

function createHoverEffect(){ //highlight cells when hovered
const cells = Array.from(document.getElementsByClassName('cell'));
cells.forEach((cell) => {
    cell.addEventListener('mouseover',hover)
});
}

function hover(){ 
    const currCellClass = this.classList[1];
    const currCell = document.querySelector(`.${currCellClass}`);
    currCell.style.cssText = 'background-color:black;' 
}

const clearBtn= document.querySelector('.clear-button');
clearBtn.onclick = (clearCells);
const resizeBtn = document.querySelector('.resize-button');
resizeBtn.onclick = (resize);

function resize(){
    clearCells();
    gridSize = prompt("Enter new grid size");
    firstLoad=0;
    buildGrid();
}

function clearCells(){
    for(let i =0;i<gridArea;i++){
        const currCell = document.querySelector(`.cell${i}`);
        currCell.style.cssText = 'background-color:lightgrey;'
        currCell.removeEventListener('click',createHoverEffect);
        currCell.removeEventListener('click',hover);
        currCell.removeEventListener('mouseover',hover);
    }
    const cells = Array.from(document.getElementsByClassName('cell'));
    cells.forEach((cell) => {
    cell.addEventListener('click',createHoverEffect);
    cell.addEventListener('click',hover);
});
}
