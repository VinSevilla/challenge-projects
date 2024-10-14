# Mixed Messages

This is a simple JavaScript program that generates random messages by combining different setups and finishers. It can create either fortune readings or jokes, or a mix of both.

## Usage

1. Clone the repository to your local machine.
2. Open the project directory.
3. Run the JavaScript file `MixedMessages.js`.
   ```bash
   node MixedMessages.js
   ```
4. Follow the prompts to choose the type of message you want to generate.
5. View the randomly generated message in the console.

## How It Works

The program uses arrays of setups and finishers for both fortune readings and jokes. It randomly selects one setup and one finisher from the respective arrays and combines them to create a message.

### Example Output

- Random fortune reading:
  ```
  You will achieve greatness
  ```
- Another random fortune reading:
  ```
  You may find love
  ```
- Random joke:
  ```
  Why did the chicken cross the road? To save the world!
  ```
## Learning 

### What I Learned from Creating the Message Constructor Program

#### Functions to Manipulate Arrays

- **Creating Reusable Functions:** I learned to create reusable functions that can operate on arrays, enhancing the modularity and readability of the code.
- **Random Selection from Arrays:** I implemented logic to randomly select elements from arrays, which is crucial for generating varied outputs. This involved using `Math.random()` and `Math.floor()`.
- **Combining Elements from Multiple Arrays:** I combined elements from multiple arrays to construct messages, understanding how to dynamically build strings using array elements.
- **Handling Multiple Sets of Data:** I managed multiple sets of arrays (`fortuneSetups`, `fortuneFinishers`, `jokeSetups`, `jokeFinishers`) and passed them to the function to generate different types of messages.

#### Specific Techniques and Concepts

- **Array Manipulation:** I practiced accessing and manipulating arrays, including selecting random elements and concatenating strings.
- **Function Parameters:** I gained experience in defining functions with parameters, allowing for flexibility in handling various sets of inputs.
- **Template Literals and String Concatenation:** I used string concatenation to build the final message from selected array elements, reinforcing my understanding of how to combine strings dynamically.

## Customization

You can customize the sets of fortune setups, fortune finishers, joke setups, and joke finishers by modifying the arrays in the JavaScript file.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
