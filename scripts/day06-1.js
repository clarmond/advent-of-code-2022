// Import modules
const fs = require('fs');
const path = require('path');

// Put in test data
const testData =`
mjqjpqmgbljsphdztnvjfqwrcgsmlb
bvwbjplbgvbhsrlpgdmjqwftvncz
nppdvjthqldpwncqszvftbrmjlhg
nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg
zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw
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
	let marker = 0;
	for (i = 0; i < line.length - 4; i++) {
		const testString = line.substring(i, i + 4);
		const letters = new Set();
		testString.split('').forEach((letter) => {
			letters.add(letter);
		})
		if (letters.size === 4) {
			marker = i + 4;
			break;
		}
	}
	console.log(`🎄 Marker ${marker}`);
});
