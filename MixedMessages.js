const constructedMessage = (setups, finishers) => {
    let start = setups[Math.floor(Math.random() * setups.length)];
    let finish = finishers[Math.floor(Math.random() * finishers.length)];
    return start + ' ' + finish;
}

const fortuneSetups = ['You will', 'You will not'];
const fortuneSetups2 = ['You may find', 'You may not find'];
const fortuneFinishers = ['achieve greatness', 'be drowning in success'];
const fortuneFinishers2 = ['peace', 'tranquility', 'love'];

//joke set ups
const jokeStart = ['the chicken', 'Spongebob', 'Goku'];
const jokeSetups = ['Why did ' + jokeStart[0] + ' cross the road?', 'Why did ' + jokeStart[1] + ' cross the road?', 'Why did ' + jokeStart[2] + ' cross the road?'];
const jokeFinishers = ['To get to the other side!', 'to go jellyfishing', 'to save the world', 'peace', 'tranquility', 'love'];
const allSetups = [fortuneSetups, fortuneSetups2, jokeSetups];
const allFinishers = [fortuneFinishers, fortuneFinishers2, jokeFinishers];

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

(async function () {
    let userResponse = '1'; // Default to entering the loop
    do {
        let messageChoice = parseInt(await prompt('What kind of randomly generated message would you like?\n1. Random joke\n2. Random fortune reading\n3. Random mix of both (definitely won\'t make sense)\n'));

        while (![1, 2, 3].includes(messageChoice)) {
            messageChoice = parseInt(await prompt('Invalid input. Please enter 1, 2, or 3.\nWhat kind of randomly generated message would you like?\n1. Random joke\n2. Random fortune reading\n3. Random mix of both (definitely won\'t make sense)\n'));
        }

        if (messageChoice === 1) {
            console.log(constructedMessage(jokeSetups, jokeFinishers));
        } else if (messageChoice === 2) {
            let randomFortunePhrase = Math.floor(Math.random() * 2);
            if (randomFortunePhrase === 0) {
                console.log(constructedMessage(fortuneSetups, fortuneFinishers));
            } else {
                console.log(constructedMessage(fortuneSetups2, fortuneFinishers2));
            }
        } else if (messageChoice === 3) {
            let randomSetup = allSetups[Math.floor(Math.random() * allSetups.length)];
            let randomFinisher = allFinishers[Math.floor(Math.random() * allFinishers.length)];
            console.log(constructedMessage(randomSetup, randomFinisher));
        }

        userResponse = parseInt(await prompt('Would you like to generate another message?\n1. Yes\n2. No\n'));

        while (![1, 2].includes(userResponse)) {
            userResponse = parseInt(await prompt('Invalid input. Please enter 1 or 2\nWould you like to generate another message?\n1. Yes\n2. No\n'));
        }

    } while (userResponse !== 2);

    rl.close();
})();
