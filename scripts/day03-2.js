const fs = require('fs');
const rawData = fs.readFileSync('../data/day03.txt').toString();
// rawData = `
// vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw
// `;
const data = rawData.replace(/^\n+/, '').replace(/\n+$/, '').split(/\n/);

const findDupe = (line1, line2, line3) => {
	for (let i = 0; i < line1.length; i++) {
		const letter = line1.substring(i, i + 1);
		if (line2.includes(letter) && line3.includes(letter)) return letter;
	}
}

const priority = (letter) => {
	const asciiCode = letter.charCodeAt(0);
	let priority = 0;
	if (asciiCode < 91) {
		priority = asciiCode - 38;
	} else {
		priority = asciiCode - 96;
	}
	return priority;
}

let sum = 0;
for (let i = 0; i < data.length; i = i + 6) {
	const dupe1 = findDupe(data[i], data[i + 1], data[i + 2]);
	const dupe2 = findDupe(data[i + 3], data[i + 4], data[i + 5]);
	sum = sum + priority(dupe1) + priority(dupe2);
}

console.log(`🎄 Sum is ${sum}`);
