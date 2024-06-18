# Find Your Hat Game

Welcome to **Find Your Hat**, a command-line game where you navigate a randomly generated field to find your hat (^) without falling into holes (O).

## Objective

You are positioned in a field represented by a grid of cells. Your goal is to move the player character (*) towards the hat (^) using the keyboard controls (W, A, S, D) without stepping into any holes (O).

## Game Controls

- **W**: Move up
- **A**: Move left
- **S**: Move down
- **D**: Move right

## How to Play

1. **Installation**
   - Ensure you have Node.js installed on your machine.

2. **Setup**
   - Clone the repository or download the `index.js` file.
   - Open a terminal and navigate to the directory where `index.js` is located.

3. **Running the Game**
   - Run the program using Node.js: `node index.js`.
   - Follow the on-screen instructions to play the game.

4. **Game Rules**
   - You start at a random position denoted by `*`.
   - Your hat (`^`) and holes (`O`) are randomly placed on the field.
   - Navigate the field using W, A, S, D keys.
   - Avoid stepping into holes.
   - Reach your hat to win the game.

5. **Game Over**
   - The game ends when you find your hat (^) or fall into a hole (O).
   - You'll receive a message indicating whether you won or lost.

6. **Enjoy the Game!**
   - Have fun exploring the randomly generated fields and finding your hat!

## Learning

### Handling User Input

When developing this game, I learned how to manage user input effectively using Node.js and readline. Here's a brief overview of how it works:

- **readline Module**: This built-in Node.js module provides an interface for reading data from a readable stream (like `process.stdin` in this case) and outputting data to a writable stream (`process.stdout`).

- **Prompting User**: Using `rl.question()`, I prompt the user for input and handle their responses asynchronously. The callback function passed to `rl.question()` processes the user's input once they press Enter.

- **Processing Input**: The input is trimmed and converted to lowercase (`answer.trim().toLowerCase()`) to ensure consistency in command handling (`W`, `A`, `S`, `D`).

- **Game Loop**: Inside the game loop (`gameLoop()`), the user's input determines the player's movement. Based on the input, the player's position (`playerIndex`) is updated, and the game checks if the move is valid (i.e., within the field boundaries).

By implementing these features, I was able to create a responsive and interactive game experience where users can navigate the field and interact with the environment based on their inputs.

## Code Overview

The game is implemented in JavaScript using Node.js. Here's a brief overview of the key components:

- **Field Class**: Manages the game field, including printing the field to the console.
- **generateField Function**: Creates a random field with a player, hat, and holes.
- **updateField Function**: Updates the field with the player's position after each move.
- **Game Loop**: Handles user input and controls the game flow until the player wins or loses.
