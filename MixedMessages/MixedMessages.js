const constructedMessage = (setups, finishers) => {
    let start = setups[Math.floor(Math.random() * setups.length)];
    let finish = finishers[Math.floor(Math.random() * finishers.length)];
    return start + ' ' + finish;
}

const fortuneSetups = ['You will', 'You will not'];
const fortuneSetups2 = ['You may find', 'You may not find'];
const fortuneFinishers = ['achieve greatness', 'be drowning in success'];
const fortuneFinishers2 = ['peace', 'tranquility', 'love'];

// Joke setups
const jokeStart = ['the chicken', 'Spongebob', 'Goku'];
const jokeSetups = ['Why did ' + jokeStart[0] + ' cross the road?', 'Why did ' + jokeStart[1] + ' cross the road?', 'Why did ' + jokeStart[2] + ' cross the road?'];
const jokeFinishers = ['To get to the other side!', 'to go jellyfishing', 'to save the world', 'peace', 'tranquility', 'love'];
const allSetups = [fortuneSetups, fortuneSetups2, jokeSetups];
const allFinishers = [fortuneFinishers, fortuneFinishers2, jokeFinishers];

console.log(constructedMessage(fortuneSetups,fortuneFinishers));
console.log(constructedMessage(fortuneSetups2,fortuneFinishers2));
console.log(constructedMessage(jokeSetups,jokeFinishers));
