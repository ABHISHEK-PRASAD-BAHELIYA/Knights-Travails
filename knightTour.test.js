const { createBoard } = require('./knightTour');

test('createBoard create an empty board of the correct size', () => {
    const board = createBoard(8);
    expect(board.length).toBe(8); //check for rows
    expect(board[0].length).toBe(8); // check for columns
    expect(board[0][0]).toBe(-1); // Ensure all cells fill from -1
});