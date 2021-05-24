/* Global Variables */
const MAX_BLOCK = 16;

const blockContainer = document.querySelector('#main');

// create an individual block
function createBlock() {
    const squareBlock = document.createElement('div');
    squareBlock.classList.add('block-container');
    blockContainer.appendChild(squareBlock);
}

for (let i = 0; i < MAX_BLOCK; i++) {
    for (let j = 0; j < MAX_BLOCK; j++) { 
    createBlock();
    }
}

// change color to grey on hover
blockContainer.addEventListener('mouseover', function (e){
    e.target.classList.add('grey-box');
});



