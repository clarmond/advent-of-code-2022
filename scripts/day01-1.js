const fs = require('fs');
const rawData = fs.readFileSync('../data/day01.txt').toString();

const data = rawData.split(/\n{2,}/);
let maxCalories = 0;
data.forEach((calories) => {
	const entries = calories.split(/\n/);
	let total = 0;
	for (let i = 0; i < entries.length; i++) {
		const entry = entries[i];
		if (entry) {
			total = total + parseInt(entry);
		}
	}
	if (total > maxCalories) {
		maxCalories = total;
	}
});
console.log(`🎄 Max calories = ${maxCalories}`);
