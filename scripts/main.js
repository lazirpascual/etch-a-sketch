// global queries
const blockContainer = document.querySelector('#main');

// create 16x16 blocks upon loading page
let blockSize = 16; 
createBlock(blockSize);

// create the full block given the size
function createBlock(blockSize) {
    for (let i = 0; i < blockSize; i++) {
        for (let j = 0; j < blockSize; j++) { 
            const squareBlock = document.createElement('div');
            squareBlock.classList.add('block-container');
            blockContainer.appendChild(squareBlock);
        }
        blockContainer.style.gridTemplateColumns=`repeat(${blockSize},auto)`;
    }
}

// removes all existing child nodes in specified node
function removeAllBlocks(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// change size of block on button click
const sizeButton = document.querySelector('#switch');
sizeButton.addEventListener('click', function (e) {
    blockSize = prompt("Enter the Grid Size: ");
    removeAllBlocks(blockContainer);  // remove all blocks to get rid of all colours (classes)
    createBlock(blockSize); // recreate block to the size we want
});

// clears block on button click
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function (e) {
    removeAllBlocks(blockContainer);
    createBlock(blockSize);
});

// removes all other existing colours and adds colour we want
function changeColour(colourToAdd) {
    let colourClasses = ['grey-box', 'red-box', 'green-box', 'blue-box', 'pink-box'];

    blockContainer.addEventListener('mouseover', function (e) {
        /* remove all other colour before adding colour we want */
        for (let i = 0; i < 5; i ++) {
            e.target.classList.remove(colourClasses[i]);
        }
        e.target.classList.add(colourToAdd); 
        });
}

// set initial mouse hover color to grey
blockContainer.addEventListener('mouseover', function (e) {
    e.target.classList.add('grey-box');
});

// change to grey on mouse hover
const blackButton = document.querySelector('#black');
blackButton.addEventListener('click', function (e) {
    changeColour('grey-box');
});

// change to green on mouse hover
const greenButton = document.querySelector('#green');
greenButton.addEventListener('click', function (e) {
    changeColour('green-box');
});

// change to red on mouse hover
const redButton = document.querySelector('#red');
redButton.addEventListener('click', function (e) {
    changeColour('red-box');
});

// change to blue on mouse hover
const blueButton = document.querySelector('#blue');
blueButton.addEventListener('click', function (e) {
    changeColour('blue-box');
});

// change to pink on mouse hover
const pinkButton = document.querySelector('#pink');
pinkButton.addEventListener('click', function (e) {
    changeColour('pink-box');
});