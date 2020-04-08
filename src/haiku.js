// const checkLines = (str) => {
// 	let linesArr = str.split('\n');

// 	let line0 = linesArr[0];
// 	let line1 = linesArr[1];
// 	let line2 = linesArr[2];

// 	let wordArr0 = words(line0);

// 	let numVowels = wordArr0.map((e) => {
// 		return e.match(/[aeiou]+/gi).length;
// 	})

// 	let reduceVowels = numVowels.reduce((a, b) => a + b);


// 	console.log(wordArr0);
// 	console.log(numVowels);
// 	console.log(reduceVowels);

// };

// const words = (line) => {
// 	let words = line.split(' ');
// 	return words;
// };

// let testHaiku = `Once I had a dog
// he was very beautiful
// and his name was Joe.`

// checkLines(maybeHaiku);

//https://codepen.io/wrunion/pen/oNjvRYN?editors=0012

// const checkHaiku = (str) => {
const lines = str.split('\n');

const firstLineArr = lines[0].split(" ");
const secondLineArr = lines[1].split(" ");
const thirdLineArr = lines[2].split(" ");

/* Get the syllables from each word in the first line, and put them in an array */
let firstLineSyllablesArr = [];
firstLineArr.forEach(function (word) {

});

const getSyllables = (word) => fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=ca1d155c-0904-45b3-ab4a-c3e87282f319`)
	.then(
		function (response) {
			if (response.status !== 200) {
				console.log('There was an error. Status Code: ' +
					response.status);
				return;
			}

			// Examine the text in the response
			response.json().then(function (data) {
				let theDataPointWeWant = data[0]["hwi"]["hw"];
				let numberOfSyllables = (theDataPointWeWant.match(/[\*]/gi).length) + 1;
				console.log(numberOfSyllables);
			});
		}
	)
	.catch(function (err) {
		console.log('Fetch Error :-S', err);
	});

getSyllables("crocodile");