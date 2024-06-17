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

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

process.stdout.write("Welcome to Find Your Hat!\n");
console.log();
process.stdout.write("Objective: You are positioned in a randomly generated field and must move towards your hat (^) without falling into holes (O).\n");
console.log();
process.stdout.write("Your position - *\nYour hat - ^\nHoles - O\n");
console.log();
process.stdout.write("Controls:\nW - Move up\nA - Move left\nS - Move down\nD - Move right\n");
console.log();

process.stdout.write("GENERATED FIELD:\n");
myField.print();

let playerIndex = [0, 0]; // Initial player position
let hatIndex = [2, 1]; // Assuming fixed hat position for simplicity

const promptUser = () => {
    return new Promise(resolve => {
        rl.question("Which way would you like to go? (W/A/S/D): ", (answer) => {
            resolve(answer.trim().toLowerCase());
        });
    });
}

const gameLoop = async () => {
    while (!(playerIndex[0] === hatIndex[0] && playerIndex[1] === hatIndex[1])) {
        const userInput = await promptUser();

        switch (userInput) {
            case 'w':
                if (playerIndex[0] > 0) {
                    playerIndex[0]--;
                } else {
                    console.log("Invalid move. You're at the top edge.");
                }
                break;
            case 'a':
                if (playerIndex[1] > 0) {
                    playerIndex[1]--;
                } else {
                    console.log("Invalid move. You're at the left edge.");
                }
                break;
            case 's':
                if (playerIndex[0] < myField.fieldArray.length - 1) {
                    playerIndex[0]++;
                } else {
                    console.log("Invalid move. You're at the bottom edge.");
                }
                break;
            case 'd':
                if (playerIndex[1] < myField.fieldArray[0].length - 1) {
                    playerIndex[1]++;
                } else {
                    console.log("Invalid move. You're at the right edge.");
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

        updateField(myField, playerIndex);
        myField.print();
    }

    if (playerIndex[0] === hatIndex[0] && playerIndex[1] === hatIndex[1]) {
        console.log("Congratulations! You found your hat!");
    }

    rl.close();
}

gameLoop();
