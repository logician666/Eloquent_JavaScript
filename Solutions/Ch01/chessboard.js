// First solution:
const readlineSync = require('readline-sync');

let board = '', size;
size = readlineSync.questionInt();

for (let i = 0; i < size; i++) {
	for (let j = 0; j < size; j++)
		board += (i + j) % 2? '#' : ' ';
	board += '\n';
}

console.log(board);

// Second solution:

// let board, size = 8;
// for (board = ''; board.length < 72; board += (board.length % 8? '' : '\n') + (board.length % 2? '#' : ' '));
// console.log(board);
