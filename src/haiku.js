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

let str = `It was a pretty sunny day
he was very smart
and his name was Joe.`

const lines = str.split('\n');

const firstLineArr = lines[0].split(" ");
const secondLineArr = lines[1].split(" ");
const thirdLineArr = lines[2].split(" ");

async function apiCall(keyword, callbackFunction, lineArr) {
	try {
		let response = await fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=ca1d155c-0904-45b3-ab4a-c3e87282f319`);
		let parsedResponse;
		if (response.ok && response.status === 200) {
			parsedResponse = await response.json();
		} else {
			parsedResponse = false;
		}
		callbackFunction(parsedResponse, lineArr);
	} catch (e) {
		callbackFunction(false);
		console.log(e.message);
	}
}

function returnSyllables(data, lineArr) {
	if (data && data[0]["hwi"]["hw"]) {
		let theDataPointWeWant = data[0]["hwi"]["hw"];
		console.log(theDataPointWeWant);
		let asteriskMatches = theDataPointWeWant.match(/\*/gi);
		let numberOfSyllables = asteriskMatches ? asteriskMatches.length + 1 : 1;
		lineArr.push(numberOfSyllables);
	} else {
		console.log('error');
		return (`There was an error`);
	}
}

let line1Arr = [];

let block = async () => {
	await firstLineArr.forEach(async (word) => {
		let syllables = await apiCall(word, returnSyllables, line1Arr);
	});
}

block();
let line1Syllables;
Promise.all(new Array(block)).then((result) => {
	console.log(result)
	/* THIS PART ISN'T WORKING */
	line1Syllables = line1Arr.reduce((a, b) => a + b);
});
console.log(line1Arr);

const arrOfWords = ["A", "dog", "is", "beautiful"];
let arrOfSyllables = [];
arrOfWords.forEach((word) => {
	/* Call the dictionary API to get the # of syllables in each word */
	apiCall(word, returnSyllables, arrOfSyllables);
});

setTimeout(() => {
	let numSyllables = arrOfSyllables.reduce((a, b) => a + b);
	console.log(`in set timeout: ${numSyllables}`);
}, 5000);

// countSyllables(arr)
// const totalSyllables = arrOfSyllables.reduce((a, b) => a + b);


// const getSyllables = (word) => fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=ca1d155c-0904-45b3-ab4a-c3e87282f319`)
// 	.then(
// 		function (response) {
// 			if (response.status !== 200) {
// 				console.log('There was an error. Status Code: ' +
// 					response.status);
// 				return;
// 			}

// 			// Examine the text in the response
// 			response.json().then(function (data) {
// 				let theDataPointWeWant = data[0]["hwi"]["hw"];
// 				// console.log(theDataPointWeWant);
// 				// console.log(theDataPointWeWant.match(/\*/gi));
// 				let asteriskMatches = theDataPointWeWant.match(/\*/gi);
// 				let numberOfSyllables = asteriskMatches ? asteriskMatches.length + 1 : 1;
// 				// console.log(numberOfSyllables);
// 				return numberOfSyllables;
// 			});
// 		}
// 	)
// 	.catch(function (err) {
// 		console.log('Fetch Error :-S', err);
// 	});
// // getSyllables("a");

// /* Get the syllables from each word in the first line, and put them in an array */
// let firstLineSyllablesArr = [];

// firstLineArr.forEach(function (word) {
// 	// console.log(word);
// 	const syllables = getSyllables(word);
// 	firstLineSyllablesArr.push(syllables);
// });

// console.log(firstLineSyllablesArr);

// Promise.all(firstLineSyllablesArr).then((args) => {
// 	console.log('promise all')
// 	console.log(args);
// });

// async function getData(word) {
// 	const result = await getSyllables(word);
// 	console.log(result);
// 	return result;
// }


// firstLineArr.forEach(async (word) => {
// 	const syllables = await firstLineSyllablesArr.push(getSyllables(word));
// 	// 	firstLineSyllablesArr.push(syllables);
// });