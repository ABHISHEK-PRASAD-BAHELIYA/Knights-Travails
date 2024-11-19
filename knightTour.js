function knightMoves(start, target) {
  const directions = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];

  // Helper function to validate coordinates
  const isValid = ([x, y]) =>
    Array.isArray([x, y]) && typeof x === 'number' && typeof y === 'number' && x >= 0 && x < 8 && y >= 0 && y < 8;

  // Input validation
  if (!isValid(start) || !isValid(target)) {
    throw new Error('Invalid input: positions must be within the 8x8 chessboard and in the format [x, y].');
  }

  if (start[0] === target[0] && start[1] === target[1]) {
    return `You made it in 0 moves! Here's your path: [${start}]`;
  }

  // BFS setup
  const queue = [[start]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];

    for (const [dx, dy] of directions) {
      const next = [x + dx, y + dy];

      if (isValid(next) && !visited.has(next.toString())) {
        visited.add(next.toString());
        const newPath = [...path, next];

        if (next[0] === target[0] && next[1] === target[1]) {
          return `You made it in ${newPath.length - 1} moves! Here's your path:\n${newPath
            .map((p) => `[${p}]`)
            .join('\n')}`;
        }

        queue.push(newPath);
      }
    }
  }
}
  
console.log(knightMoves([0, 0], [1, 2]));
// Output: You made it in 1 moves! Here's your path:
// [0,0]
// [1,2]

console.log(knightMoves([0, 0], [3, 3]));
// Output: You made it in 2 moves! Here's your path:
// [0,0]
// [2,1]
// [3,3]

console.log(knightMoves([0,0], [7,7]))

module.exports = knightMoves;