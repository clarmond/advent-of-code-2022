const fs = require('fs');
const rawData = fs.readFileSync('../data/day02.txt').toString();
const data = rawData.split(/\n/);

const shapeScore = {
	'X': 1,
	'Y': 2,
	'Z': 3
};

const shapes = {
	'X': 'A',
	'Y': 'B',
	'Z': 'C',
};

const outcomeScore = (opponentChoice, myChoice) => {
	if (opponentChoice === myChoice) return 3;
	if (myChoice === 'A' && opponentChoice === 'C') return 6;
	if (myChoice === 'B' && opponentChoice === 'A') return 6;
	if (myChoice === 'C' && opponentChoice === 'B') return 6;
	return 0;
}

let totalScore = 0;
data.forEach((turn) => {
	if (!turn) return;
	const [ opponentChoice, myChoice ] = turn.split(' ');
	const myScore = shapeScore[myChoice] + outcomeScore(opponentChoice, shapes[myChoice]);
	console.log(`${shapeScore[myChoice]} + ${outcomeScore(opponentChoice, shapes[myChoice])} = ${myScore}`);
	totalScore = totalScore + myScore;
});
console.log(`🎄 Total Score: ${totalScore}`);
