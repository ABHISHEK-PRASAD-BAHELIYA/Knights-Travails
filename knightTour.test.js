const knightMoves = require('./knightTour');

describe('knightMoves function', () => {
  test('should return the correct path for a simple move', () => {
    const start = [0, 0];
    const target = [1, 2];
    const result = knightMoves(start, target);

    expect(result).toBe(
      `You made it in 1 moves! Here's your path:\n[0,0]\n[1,2]`
    );
  });

  test('should return the correct path for a multi-move scenario', () => {
    const start = [0, 0];
    const target = [3, 3];
    const result = knightMoves(start, target);

    // Since multiple shortest paths are possible, match one of them
    expect(result).toMatch(
      /You made it in 2 moves! Here's your path:\n\[0,0]\n\[2,1]\n\[3,3]/i
    );
  });

  test('should return the correct path for a longer path', () => {
    const start = [0, 0];
    const target = [7, 7];
    const result = knightMoves(start, target);

    expect(result).toMatch(/You made it in \d+ moves!/i); // Matches move count
  });

  test('should handle start and target being the same', () => {
    const start = [4, 4];
    const target = [4, 4];
    const result = knightMoves(start, target);

    expect(result).toBe(
      `You made it in 0 moves! Here's your path: [4,4]`
    );
  });

  test('should handle invalid inputs gracefully', () => {
    const start = [-1, 0]; // Invalid start position
    const target = [0, 0]; // Valid target position
  
    expect(() => knightMoves(start, target)).toThrow(
      'Invalid input: positions must be within the 8x8 chessboard and in the format [x, y].'
    );
  });  

  test('should handle edge positions on the chessboard', () => {
    const start = [7, 7];
    const target = [6, 5];
    const result = knightMoves(start, target);

    expect(result).toBe(
      `You made it in 1 moves! Here's your path:\n[7,7]\n[6,5]`
    );
  });
});
