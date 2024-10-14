const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.fieldArray = field;
    }

    print() {
        for (let i = 0; i < this.fieldArray.length; i++) {
            console.log(this.fieldArray[i].join(''));
        }
    }
}

const updateField = (fieldObj, playerIndex) => {
    fieldObj.fieldArray[playerIndex[0]][playerIndex[1]] = pathCharacter;
}

const generateField = () => {
    // Initialize an empty 2D array
    const randomField = [];

    // Determine dimensions of the field (rows and columns)
    const numRows = Math.floor(Math.random() * (15 - 5 + 1)) + 5; // Random number of rows between 5 and 15
    const numCols = Math.floor(Math.random() * (15 - 5 + 1)) + 5; // Random number of columns between 5 and 15

    // Populate the field with empty cells
    for (let i = 0; i < numRows; i++) {
        const row = new Array(numCols).fill(fieldCharacter); // Fill each row with fieldCharacter (░)
        randomField.push(row);
    }

    // Generate random positions for the player, hat, and holes
    let playerPositionY = Math.floor(Math.random() * numRows);
    let playerPositionX = Math.floor(Math.random() * numCols);

    let hatPositionY = Math.floor(Math.random() * numRows);
    let hatPositionX = Math.floor(Math.random() * numCols);

    // Ensure player and hat do not overlap
    while (playerPositionY === hatPositionY && playerPositionX === hatPositionX) {
        hatPositionY = Math.floor(Math.random() * numRows);
        hatPositionX = Math.floor(Math.random() * numCols);
    }

    // Place the player and hat in the field
    randomField[playerPositionY][playerPositionX] = pathCharacter;
    randomField[hatPositionY][hatPositionX] = hat;

    // Update playerIndex to reflect player's starting position
    const playerIndex = [playerPositionY, playerPositionX];

    // Generate three random hole positions
    for (let i = 0; i < 3; i++) {
        let holePositionY = Math.floor(Math.random() * numRows);
        let holePositionX = Math.floor(Math.random() * numCols);

        // Ensure holes do not overlap with player or hat
        while ((holePositionY === playerPositionY && holePositionX === playerPositionX) ||
               (holePositionY === hatPositionY && holePositionX === hatPositionX)) {
            holePositionY = Math.floor(Math.random() * numRows);
            holePositionX = Math.floor(Math.random() * numCols);
        }

        // Place the hole in the field
        randomField[holePositionY][holePositionX] = hole;
    }

    return {
        field: randomField,
        playerIndex: playerIndex
    };
}

//Test field
const fieldAndPlayer = generateField();
const myField = new Field(fieldAndPlayer.field);
let playerIndex = fieldAndPlayer.playerIndex;

console.log("Welcome to Find Your Hat!");
console.log();
console.log("Objective: You are positioned in a randomly generated field and must move towards your hat (^) without falling into holes (O).");
console.log();
console.log("Your position - *");
console.log("Your hat - ^");
console.log("Holes - O");
console.log();
console.log("Controls:");
console.log("W - Move up");
console.log("A - Move left");
console.log("S - Move down");
console.log("D - Move right");
console.log();

console.log("GENERATED FIELD:");
myField.print();

const promptUser = () => {
    return new Promise(resolve => {
        rl.question("Which way would you like to go? (W/A/S/D): ", (answer) => {
            resolve(answer.trim().toLowerCase());
        });
    });
}

const gameLoop = async () => {
    while (true) {
        console.log();
        const userInput = await promptUser();

        switch (userInput) {
            case 'w':
                if (playerIndex[0] > 0) {
                    playerIndex[0]--;
                } else {
                    console.log("Invalid move. You're at the top edge.");
                    continue;
                }
                break;
            case 'a':
                if (playerIndex[1] > 0) {
                    playerIndex[1]--;
                } else {
                    console.log("Invalid move. You're at the left edge.");
                    continue;
                }
                break;
            case 's':
                if (playerIndex[0] < myField.fieldArray.length - 1) {
                    playerIndex[0]++;
                } else {
                    console.log("Invalid move. You're at the bottom edge.");
                    continue;
                }
                break;
            case 'd':
                if (playerIndex[1] < myField.fieldArray[0].length - 1) {
                    playerIndex[1]++;
                } else {
                    console.log("Invalid move. You're at the right edge.");
                    continue;
                }
                break;
            default:
                console.log("Invalid input. Please enter W, A, S, or D.");
                continue;
        }

        if (myField.fieldArray[playerIndex[0]][playerIndex[1]] === hole) {
            console.log("You fell into a hole! Game over.");
            break;
        }

        if (myField.fieldArray[playerIndex[0]][playerIndex[1]] === hat) {
            console.log("Congratulations! You found your hat!");
            break;
        }

        console.clear(); // Clear the terminal before printing the updated field
        updateField(myField, playerIndex);
        console.log();
        console.log('CURRENT FIELD: ');
        myField.print();
    }

    rl.close();
}

gameLoop();
