// global queries
const blockContainer = document.querySelector('#main');

// create 16x16 blocks upon loading page
let INITIAL_SIZE = 16;
createBlock(INITIAL_SIZE);

// create the full block given the size
function createBlock(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) { 
            const squareBlock = document.createElement('div');
            squareBlock.classList.add('block-container');
            blockContainer.appendChild(squareBlock);
        }
        blockContainer.style.gridTemplateColumns=`repeat(${size},auto)`;
    }
}

// removes all existing child nodes in specified node
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// change color to grey on mouse hover
blockContainer.addEventListener('mouseover', function (e) {
    e.target.classList.add('grey-box');
});

// change size of block on button click
const sizeButton = document.querySelector('#switch');
sizeButton.addEventListener('click', function (e) {
    let blockSize = prompt("Enter the Grid Size: ");
    removeAllChildNodes(blockContainer);
    createBlock(blockSize);
});