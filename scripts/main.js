/* global variables */
const MAX_BLOCK = 16;

/* functions */
function createBlock() {
    const squareBlock = document.createElement('div');
    squareBlock.classList.add("block-container");
    blockContainer.appendChild(squareBlock);
}

/* main */
const blockContainer = document.querySelector('#block-container');

for (let i = 0; i < MAX_BLOCK; i++) {
    for (let j = 0; j < MAX_BLOCK; j++) { 
    createBlock();
    }
}



