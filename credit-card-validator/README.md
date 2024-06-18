# Credit Card Validator

This project implements the Luhn algorithm to validate credit card numbers. It includes functions to check the validity of credit card numbers, find invalid cards, and identify the companies that issued them.

## Overview

This project contains the following files:

- `main.js`: JavaScript file containing the implementation of the Luhn algorithm and related functions.
- `index.html`: HTML file for testing the functions in a web browser environment.
- `styles.css`: CSS file for styling the HTML page.
- `README.md`: This file, providing an overview of the project and instructions for usage.

## Usage

To use the credit card validator functions:

1. Include `credit-card-validator.js` in your project.
2. Call the `validateCred()` function with an array representing a credit card number to check its validity.
3. Call the `findInvalidCards()` function with an array of credit card number arrays to find invalid cards.
4. Call the `idInvalidCardCompanies()` function with an array of invalid card arrays to identify the companies that issued them.

## Learning Section

### What I Learned from Creating the Credit Card Validator Program

#### Implementation of the Luhn Algorithm

- **Understanding the Luhn Algorithm:** I learned the detailed steps of the Luhn algorithm, a checksum formula used to validate various identification numbers, particularly credit card numbers.
- **Mathematical Calculations:** Implementing the algorithm involved iterating over an array, conditionally doubling values, and performing arithmetic operations to validate the credit card numbers.

#### JavaScript Techniques and Concepts

- **Array Manipulation:** I practiced accessing, iterating over, and manipulating arrays, including operations like filtering and reducing.
- **Conditional Logic:** I used conditional statements to check specific conditions within loops and functions, ensuring the algorithm worked correctly.
- **Modular Functions:** I wrote modular functions to handle specific tasks:
  - `validateCred`: Validates a single credit card number using the Luhn algorithm.
  - `findInvalidCards`: Filters and identifies invalid credit card numbers from a batch.
  - `idInvalidCardCompanies`: Identifies the companies that issued the invalid cards based on the first digit of the card numbers.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
