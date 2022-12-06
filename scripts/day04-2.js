// Import modules
const fs = require('fs');
const path = require('path');

// Put in test data
const testData =`
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
`;

// Read puzzle data from file
const day = path.basename(__filename).split('-')[0];
const puzzleData = fs.readFileSync(`../data/${day}.txt`).toString();

// Parse data into array
const parseData = rawData => rawData.replace(/^\n+/, '').replace(/\n+$/, '').split(/\n/);

// Determine whether to use test data or puzzle data
const args = process.argv.slice(2);
const data = args[0]?.match(/test/) ? parseData(testData) : parseData(puzzleData);

const minMax = (set) => {
	const [min, max] = set.split('-');
	return { min: parseInt(min), max: parseInt(max) };
}

// Solution
let total = 0;
data.forEach((line) => {
	const [ set1, set2 ] = line.split(',');
	const mm1 = minMax(set1);
	const mm2 = minMax(set2);
	let overlap = 0;
	if (mm1.min >= mm2.min && mm1.min <= mm2.max) {
		overlap = 1;
	}
	if (mm1.max >= mm2.min && mm1.max <= mm2.max) {
		overlap = 1;
	}
	if (mm2.min >= mm1.min && mm2.min <= mm1.max) {
		overlap = 1;
	}
	if (mm2.max >= mm1.min && mm2.max <= mm1.max) {
		overlap = 1;
	}
	if (overlap) console.log(line)
	total += overlap;
});

console.log(`🎄 ${total}`);
