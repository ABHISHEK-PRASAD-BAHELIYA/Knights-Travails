# Knight's Travails

This program calculates the shortest path for a knight on a chessboard from a given starting position to a target position. The knight follows the standard chess rules for movement.

## Features

- Calculates the shortest path using the Breadth-First Search (BFS) algorithm.
- Handles invalid inputs and throws descriptive errors.
- Outputs the number of moves and the full path taken.

---

## Requirements

- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js Official Site](https://nodejs.org/).

---

## Usage Instructions

1. **Clone or Download the Repository**  
   Clone the repository or download the files to your local machine.

2. **Navigate to the Directory**  
   Open a terminal or command prompt and navigate to the folder containing the `knightMoves.js` file:

   ```bash
   cd /path/to/knightMoves
   ```

3. **Run the Program**
   Execute the program using Node.js:
   ```bash
   node knightMoves.js
   ```
4. **Modify Inputs**
   Edit the knightMoves.js file to change the starting and target positions:

   ```javascript
   console.log(knightMoves([3, 3], [0, 0]));
   ```

5. **Rerun the Program**
   Save the file and rerun the program:

```bash
node knightMoves.js
```

---

## Example Output

For the input:

```javascript
knightMoves([0, 0], [7, 7]);
```

Output:

````plaintext
You made it in 6 moves! Here's your path:
[0,0]
[2,1]
[4,2]
[6,3]
[4,4]
[6,5]
[7,7]

```

---

## Error Handling

- If invalid inputs are provided (e.g., positions outside the 8x8 chessboard or non-numeric values), the program will throw an error:

```plaintext
Error: Invalid input: positions must be within the 8x8 chessboard and in the format [x, y].
````

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
