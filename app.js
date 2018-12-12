const readline = require('readline');

let matrix = [
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
];
let turn = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const populateBoard = (input) => {
    if(turn === 0) {
        matrix[input[0]][input[1]] = 'O';
    } else {
        matrix[input[0]][input[1]] = 'X';
    }
};

const validateInput = (input) => {
    if(input.length > 2) {
        return false;
    } else if (input[0] > 2) {
        return false;
    } else if (input[1] > 2) {
        return false
    }else {
        return true;
    }
};

const isWin = () => {
    if(horizontalWin() || verticalWin() || diagonalWin()) {
        return 'there is a win!'
    }
};

const makeBoard = () => {
    let board = '';
    matrix.map ((el)=> {
        let str = el.join(' ');
        let split = str.replace(/,/g, '');
        board+=`${split}\n`;
    });
    console.log(board);
    rl.question('Please provide your input ', (answer) => {
        if(validateInput(answer)) {
            populateBoard(answer);
            makeBoard();
            isWin();
            if(turn === 0) {
                turn = 1;
            } else {
                turn = 0;
            }
        }else {
            makeBoard();
        }
    });
};

makeBoard();