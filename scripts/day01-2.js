const fs = require('fs');
const rawData = fs.readFileSync('../data/day01.txt').toString();

const data = rawData.split(/\n{2,}/);
const totals = [];
data.forEach((calories) => {
	const entries = calories.split(/\n/);
	let total = 0;
	for (let i = 0; i < entries.length; i++) {
		const entry = entries[i];
		if (entry) {
			total = total + parseInt(entry);
		}
	}
	totals.push(total);
});
totals.sort(function(a, b){return b-a});
const maxCalories = totals[0] + totals[1] + totals[2];
console.log(`🎄 Max calories = ${maxCalories}`);
