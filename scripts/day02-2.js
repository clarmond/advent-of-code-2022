const fs = require('fs');
const rawData = fs.readFileSync('../data/day02.txt').toString();
const testData = `
A Y
B X
C Z
`;
const data = rawData.split(/\n/);
// const data = testData.split(/\n/);

const shapeScore = {
	'A': 1,
	'B': 2,
	'C': 3
};

const outcomeScore = (opponentChoice, myChoice) => {
	if (opponentChoice === myChoice) return 3;
	if (myChoice === 'A' && opponentChoice === 'C') return 6;
	if (myChoice === 'B' && opponentChoice === 'A') return 6;
	if (myChoice === 'C' && opponentChoice === 'B') return 6;
	return 0;
}

const getMyShape = (opponentChoice, outcome) => {
	// Win
	if (outcome === 'Z') {
		if (opponentChoice === 'A') return 'B';
		if (opponentChoice === 'B') return 'C';
		if (opponentChoice === 'C') return 'A';
	}
	// Lose
	if (outcome === 'X') {
		if (opponentChoice === 'A') return 'C';
		if (opponentChoice === 'B') return 'A';
		if (opponentChoice === 'C') return 'B';
	}
	// Draw
	if (outcome === 'Y') {
		return opponentChoice;
	}
}

let totalScore = 0;
data.forEach((turn) => {
	if (!turn) return;
	const [ opponentChoice, outcome ] = turn.split(' ');
	const myShape = getMyShape(opponentChoice, outcome);
	const myScore = shapeScore[myShape] + outcomeScore(opponentChoice, myShape);
	console.log(`${shapeScore[myShape]} + ${outcomeScore(opponentChoice, myShape)} = ${myScore}`);
	totalScore = totalScore + myScore;
});
console.log(`🎄 Total Score: ${totalScore}`);
