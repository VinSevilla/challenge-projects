# Mysterious Organism Simulator

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Mysterious Organism Simulator is a JavaScript program designed to simulate the behavior of mysterious organisms found at the bottom of the ocean near hydrothermal vents. These organisms, known as Pila aequor (P. aequor), have unique DNA sequences and exhibit interesting properties such as mutation and survival adaptation.

This simulator allows users to create instances of P. aequor, manipulate their DNA, compare their genetic similarities, and predict their likelihood of survival in their natural environment.

## Features

- **Factory Function**: Create instances of P. aequor with unique DNA sequences.
- **Mutation**: Simulate mutations in the DNA sequences of organisms.
- **DNA Comparison**: Compare the DNA sequences of organisms to determine their genetic similarities.
- **Survival Prediction**: Predict the likelihood of survival for organisms based on their DNA composition.

## Installation

To use the Mysterious Organism Simulator, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mysterious-organism.git
Navigate to the project directory:

bash
Copy code
cd mysterious-organism
Run the JavaScript file:

bash
Copy code
node main.js
Usage
The Mysterious Organism Simulator can be used for various purposes, including:

Research and education on DNA mutation and genetic diversity.
Simulation of evolutionary processes in organisms.
Investigation into survival adaptation mechanisms in natural environments.
Examples
Here are some examples of how to use the simulator:

Create a new organism:

javascript
Copy code
const organism = pAequorFactory(1, mockUpStrand());
Mutate the organism's DNA:

javascript
Copy code
organism.mutate();
Compare the organism's DNA with another organism:

javascript
Copy code
const otherOrganism = pAequorFactory(2, mockUpStrand());
organism.compareDna(otherOrganism);
Predict the organism's likelihood of survival:

javascript
Copy code
organism.willLikelySurvive();
Contributing
Contributions to the Mysterious Organism Simulator are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request on GitHub.

## Learning Section

### What I Learned from Creating the DNA Simulation Program

#### Factory Functions

- **Understanding Factory Functions:** I learned how to create factory functions to generate objects with specific properties and methods. This approach is useful for creating multiple instances of an object with similar structures and behaviors.
- **Usage in JavaScript:** Implemented the `pAequorFactory` function to generate organisms with unique specimen numbers and DNA arrays.

#### Random DNA Generation

- **Generating Random Bases:** Utilized the `Math.random()` function to randomly select DNA bases ('A', 'T', 'C', 'G') and create a strand of DNA.
- **Mock DNA Strand Creation:** Wrote the `mockUpStrand` function to generate a random strand of DNA with 15 bases, showcasing array manipulation and random value generation.

#### Object Methods

- **Mutate Method:** Implemented a `mutate` method to randomly change one base in the DNA strand to a different base. This taught me about array manipulation and ensuring no two values are the same using a `while` loop.
- **Comparing DNA:** Developed a `compareDna` method to compare the DNA of two organisms and calculate the percentage of similarity. This involved iterating over arrays, counting matches, and performing percentage calculations.
- **Survival Check:** Created a `willLikelySurvive` method to determine if an organism is likely to survive based on the presence of 'C' and 'G' bases. This method uses the `filter` function to count specific bases and conditional logic to check the survival rate.

#### Populating Data

- **Creating Multiple Organisms:** Learned to use loops and conditionals to populate an array with multiple instances of organisms that meet certain criteria (e.g., having a 60% or more survival rate).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
