/*
Venancio L. Sevilla 
13 June 2024
Find Your Hat
*/ 
const readline = require('readline');
const prompt = require('prompt-sync')({sigint: true});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

/* The Field constructor representing the “field” itself. 
A field consists of a grid containing “holes” (O) and one “hat” (^). 
neutral background character (░) used to indicate the rest of the field itself.
The player will begin in the upper-left of the field, and the player’s path is represented by *. 
*/
class Field{
    constructor(field){
        this.fieldArray=field;
    }

    //Prints current state of field
    print(){
        for(let i = 0; i < this.fieldArray.length; i++)
            {

                console.log(this.fieldArray[i].join('').toString());
            }
    }
}


const updateField = (fieldObj,playerIndex,hatIndex) => {
    for(let i = 0; i < fieldObj.fieldArray.length; i++)
        {
            for(let j = 0; j < fieldObj.fieldArray[i].length; j++)
            {
                
                fieldObj.fieldArray[playerIndex[0]][playerIndex[1]] === '*';
                
        
            }
        }
}

//takes a field object
const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

  //Intro
  process.stdout.write("Welcome to Find Your Hat!\n");
  console.log();
  process.stdout.write("Objective: Your positioned in a randomly ");
  process.stdout.write("generated field\nand you must move towards your hat without falling into the holes.\n");
  console.log();
  process.stdout.write("Your position - *\nYour hat - ^\nHoles - 0\n");
  console.log();
  process.stdout.write("Controls:\nW - Move up.\nA - Move left.\nS - Move down.\nD - Move right.\n");
  console.log();

process.stdout.write("GENERATED FIELD:\n");
myField.print();

let playerIndex = [];
let hatIndex = [];


for(let i = 0; i < myField.fieldArray.length; i++)
{
    for(let j = 0; j < myField.fieldArray[i].length; j++)
    {
        //If statement to get player position
        if(myField.fieldArray[i][j] === '*'){
            console.log(`Player index: ${i} ${j}`);
            playerIndex.push(myField.fieldArray[i]);
            playerIndex.push(myField.fieldArray[j]);

        }
        
        //if statement to get hat position
        if(myField.fieldArray[i][j] === '^'){
            console.log(`Hat index: ${i} ${j}`);
            playerIndex.push(myField.fieldArray[i]);
            playerIndex.push(myField.fieldArray[j]);

        }

    }
}


let userInput = '';
for(let i = 0; i < playerIndex.length; i++){
    while( (playerIndex[0] !== hatIndex[0]) && (playerIndex[1] !== hatIndex[1])) 
    {
        //prompt User and get input
        process.stdout.write("Which way would you like to go? ");
        /*
        process.std.on('data', (data) => {
            userInput += data.toString().trim();
        });
        */

        rl.on('line', (input) => {
            userInput += input.trim();
        });

        if(userInput === 'w')
        {
            if(playerIndex[0] == 0)
            {
                do{
                    process.stdout.write("Invalid space. Go another direction.");
                    process.std.on('data', (data) => {
                        userInput += data.toString().trim();
                    });
                }while(playerIndex[0] == 0);
            }
            else{
                playerIndex[0] = playerIndex[0]-1;

                updateField(myField);
                myField.print();
            }
        }
        else if(userInput === 'a')
            {
                //Checks if player position is at the most left. If it is, re-prompt user
                if(playerIndex[1] == 0)
                {
                    do{
                        process.stdout.write("Invalid space. Go another direction.");
                        process.std.on('data', (data) => {
                            userInput += data.toString().trim();
                        });
                    }while(playerIndex[1] == 0);
                }
                //Change player position is viable
                else{
                    playerIndex[1] = playerIndex[1]-1;
    
                    updateField(myField);
                    myField.print();
                }
            }
             
            else if(userInput === 's')
            {
                    //Checks if player position is at the very bottom. If it is, re-prompt user
                    if(playerIndex[0] == playerIndex.length)
                    {
                        do{
                            process.stdout.write("Invalid space. Go another direction.");
                            process.std.on('data', (data) => {
                                userInput += data.toString().trim();
                            });
                        }while(playerIndex[1] == playerIndex.length);
                    }
                    //Change player position is viable
                    else{
                        playerIndex[0] = playerIndex[0]+1;
        
                        updateField(myField);
                        myField.print();
                    }
             }
             else if(userInput === 'd')
             {
                        //Checks if player position is at the very right. If it is, re-prompt user
                        if(playerIndex[1] == playerIndex.length)
                        {
                            do{
                                process.stdout.write("Invalid space. Go another direction.");
                                process.std.on('data', (data) => {
                                    userInput += data.toString().trim();
                                });
                            }while(playerIndex[1] == playerIndex.length);
                        }
                        //change position
                        else{
                            playerIndex[1] = playerIndex[1]+1;
            
                            updateField(myField);
                            myField.print();
                        }
                }
                //Re prompt if not valid input was given
                else{
                    process.stdout.write("Invalid input. Please enter W,A,S, or D for a valid direction.");
                }
        
       
          
    }


}
rl.close();
