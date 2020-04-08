const checkLines = (str) => {
	let linesArr = str.split('\n');

	let line0 = linesArr[0];
	let line1 = linesArr[1];
	let line2 = linesArr[2];

	let wordArr0 = words(line0);

	let numVowels = wordArr0.map((e) => {
		return e.match(/[aeiou]+/gi).length;
	})

	let reduceVowels = numVowels.reduce((a, b) => a + b);


	console.log(wordArr0);
	console.log(numVowels);
	console.log(reduceVowels);

};

const words = (line) => {
	let words = line.split(' ');
	return words;
};

let maybeHaiku = `mi gato es lindo
y mi otro gato es guapo
y mi pero es gordo.`;

checkLines(maybeHaiku);
