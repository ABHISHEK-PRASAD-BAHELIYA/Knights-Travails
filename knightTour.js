const size = 8;

//create a chessboard initialized to -1
function createBoard(size) {
    return Array.from({ length: size}, () => Array(size).fill(-1));
}

module.exports = { createBoard };