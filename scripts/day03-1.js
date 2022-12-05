const fs = require('fs');
const rawData = fs.readFileSync('../data/day03.txt').toString();
const data = rawData.split(/\n/);

let sum = 0;
data.forEach((row) => {
	if (!row) return;
	const len = row.length / 2;
	const compartment1 = row.substring(0, len);
	const compartment2 = row.substring(len, row.length);
	let dupe = '';
	compartment1.split('').forEach((letter) => {
		if (dupe) return;
		if (compartment2.includes(letter)) {
			dupe = letter;
		}
	});
	if (!dupe) {
		console.log(compartment1)
		console.log(compartment2)
		process.exit();
	}
	const asciiCode = dupe.charCodeAt(0);
	let priority = 0;
	if (asciiCode < 91) {
		priority = asciiCode - 38;
	} else {
		priority = asciiCode - 96;
	}
	sum = sum + priority;
});

console.log(`🎄 Sum is ${sum}`);
