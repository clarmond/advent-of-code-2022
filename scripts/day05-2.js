// Import modules
const fs = require('fs');
const path = require('path');

// Initial config
// const stacks = [
// 	null,
// 	['Z', 'N'],
// 	['M', 'C', 'D'],
// 	['P']
// ];
const stacks = [
	null,
	['S', 'Z', 'P', 'D', 'L', 'B', 'F', 'C'],
	['N', 'V', 'G', 'P', 'H', 'W', 'B'],
	['F', 'W', 'B', 'J', 'G'],
	['G', 'J', 'N', 'F', 'L', 'W', 'C', 'S'],
	['W', 'J', 'L', 'T', 'P', 'M', 'S', 'H'],
	['B', 'C', 'W', 'G', 'F', 'S'],
	['H', 'T', 'P', 'M', 'Q', 'B', 'W'],
	['F', 'S', 'W', 'T'],
	['N', 'C', 'R'],
];

// Put in test data
const testData =`
move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
`;

// Read puzzle data from file
const day = path.basename(__filename).split('-')[0];
const puzzleData = fs.readFileSync(`../data/${day}.txt`).toString();

// Parse data into array
const parseData = rawData => rawData.replace(/^\n+/, '').replace(/\n+$/, '').split(/\n/);

// Determine whether to use test data or puzzle data
const args = process.argv.slice(2);
const data = args[0]?.match(/test/) ? parseData(testData) : parseData(puzzleData);

// Solution
data.forEach((line) => {
	const results = line.match(/move (\d+) from (\d+) to (\d+)/);
	const [ move, count, src, dest ] = results;
	let stack = [];
	for (let i = 0; i < count; i++) {
		const letter = stacks[src].pop();
		stack.push(letter);
	}
	stack.reverse();
	stacks[dest].push(...stack);
});

let finalArrangement = '';
for (let i = 1; i < stacks.length; i++) {
	finalArrangement += stacks[i].pop();
}

console.log(`🎄 ${finalArrangement}`);
