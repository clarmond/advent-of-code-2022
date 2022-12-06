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

const findStart = (line, index, testLength) => {
	const testString = line.substring(index, index + testLength);
	const letters = new Set();
	testString.split('').forEach((letter) => {
		letters.add(letter);
	})
	if (letters.size === testLength) {
		return index + testLength;
	}
	return 0;
}

// Solution
data.forEach((line) => {
	let startOfPacket = 0;
	let startOfMessage = 0;
	for (i = 0; i < line.length - 4; i++) {
		let index = findStart(line, i, 4);
		if (index > 0 && startOfPacket === 0) {
			startOfPacket = index;
		}
		index = findStart(line, i, 14);
		if (index > 0 && startOfMessage === 0) {
			startOfMessage = index;
		}
		if (startOfPacket > 0 && startOfMessage > 0) break;
	}
	console.log(`🎄 startOfPacket ${startOfPacket}`);
	console.log(`🎄 startOfMessage ${startOfMessage}`);
	console.log('\n');
});
