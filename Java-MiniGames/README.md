# Java Game Suite

## Overview
The Java Game Suite is a console-based application written in Java that allows users to play three different games: 
1. High or Low Guessing Game
2. Coin Flip
3. Rock, Paper, Scissors

Users can select which game they want to play, and their scores are tracked throughout their session.

## Setup
To run the Java Game Suite, you'll need:
- Java Development Kit (JDK) installed on your computer.
- A Java IDE or a text editor and command line.

## How to Run
1. Open your terminal or command prompt.
2. Navigate to the directory where the `JavaGameSuite.java` file is located.
3. Compile the Java file using the command:
   ```
   javac JavaGameSuite.java
   ```
4. Run the compiled Java program using the command:
   ```
   java JavaGameSuite
   ```

## Usage
1. Upon running the program, you will be prompted to enter your name.
2. After entering your name, you will be presented with a menu to select a game:
   - Enter `1` for High or Low Guessing Game.
   - Enter `2` for Coin Flip.
   - Enter `3` for Rock, Paper, Scissors.

### Game Instructions

#### 1. High or Low Guessing Game
- The AI picks a random number between 1 and 100.
- You choose a difficulty level which determines the number of guesses you get:
  - Easy: 12 guesses
  - Medium: 8 guesses
  - Hard: 5 guesses
- You guess the number, and the program tells you if your guess is too high or too low.
- Points are awarded for correct guesses. The game ends when you decide not to continue.

#### 2. Coin Flip
- You will guess the outcome of a coin flip (heads or tails).
- Points are awarded for correct guesses.
- The game continues until you decide to stop.

#### 3. Rock, Paper, Scissors
- You choose the number of rounds to play (best of 3, 5, or 7).
- Each round, you select rock, paper, or scissors.
- Points are awarded for winning rounds based on the standard rules:
  - Rock beats Scissors
  - Scissors beats Paper
  - Paper beats Rock
- The game continues until the specified number of rounds is complete.

## Example Session
```
Hello user! please enter your name: Alice
Welcome Alice! Please choose which game you would like to play.
Enter the number corresponding with the desired game:
1: High or Low Guessing Game
2: Coin Flip
3: Rock, Paper, Scissors!
Alice: 1
You chose: High or Low.
... (game continues based on user input)
```

## Code Structure
- **main**: The entry point of the program. Prompts for the user's name and calls `mainMenu`.
- **mainMenu**: Displays the game selection menu and navigates to the chosen game.
- **highOrLow**: Implements the High or Low Guessing Game.
- **coinFlip**: Implements the Coin Flip game.
- **rockPaperScissors**: Implements the Rock, Paper, Scissors game.

Each game method includes detailed instructions and validation for user input to ensure a smooth user experience.

## Future Improvements
- Add a graphical user interface (GUI) for a more user-friendly experience.
- Implement additional games.
- Enhance the scoring system to include a leaderboard.

## Learning Section

### Key Concepts I Learned While Developing This Program...

#### Main Menu Creation

- **Designing User Navigation:** I learned how to design a main menu for a console application, which allows users to navigate through different options seamlessly.
- **Implementing Looping Constructs:** I utilized looping constructs to continuously display the main menu until the user decides to exit, ensuring a smooth user experience.
- **Handling User Selections:** I became proficient in handling user selections and linking menu options to corresponding functionalities within the application.

#### User Input Validation

- **Ensuring Valid Inputs:** I gained experience in validating user inputs to ensure that the application only processes valid data, enhancing the reliability of the program.
- **Providing User Feedback:** I learned how to provide meaningful feedback to users when they enter invalid inputs, guiding them to make correct choices.
- **Avoiding Application Crashes:** By implementing input validation, I reduced the risk of application crashes due to unexpected or incorrect inputs.

#### Error Handling

- **Improving Robustness:** Implementing comprehensive error handling improved the overall robustness of the application, making it more resilient to user errors and unforeseen circumstances.

#### Additional Insights

- **Modular Code Design:** I understood the importance of breaking code into smaller, reusable methods. This approach makes the code more organized and easier to maintain.
- **Documentation:** I realized the significance of documenting code with comments and Javadoc to explain the purpose of methods and complex logic, which aids in future maintenance and collaboration.
- **Testing:** I appreciated the necessity of testing various user inputs to ensure that the application handles all scenarios correctly, providing a better user experience.
- **Edge Cases:** I learned to consider and handle edge cases, such as non-numeric input when a number is expected, to improve the robustness and reliability of the application.


## Author
Venancio Sevilla

Date: 03 March 2023

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy playing the Java Game Suite!
