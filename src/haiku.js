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

// let str = `It was a pretty sunny day
// he was very smart
// and his name was Joe.`

// // const lines = str.split('\n');

// const firstLineArr = lines[0].split(" ");
// const secondLineArr = lines[1].split(" ");
// const thirdLineArr = lines[2].split(" ");

async function getSyllableCount(keyword) {
	try {
		let response = await fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=ca1d155c-0904-45b3-ab4a-c3e87282f319`);
		if (response.ok && response.status === 200) {
			const parsedResponse = await response.json();
			const theDataPointWeWant = parsedResponse[0]["hwi"]["hw"]
			let asteriskMatches = theDataPointWeWant.match(/\*/gi);
			let numberOfSyllables = asteriskMatches ? asteriskMatches.length + 1 : 1;
			return numberOfSyllables;
		} else {
			// numberOfSyllables = NaN;
		}
	} catch (e) {
		console.log(e.message);
	}
}

//sunn*y*side

// let asteriskMatches = theDataPointWeWant.match(/\*/gi);
// let numberOfSyllables = asteriskMatches ? asteriskMatches.length + 1 : 1;

// firstLineArr.forEach((word) => {

// });

const haiku1 = `It was a pretty sunny day
he was very smart
and his name was Joe.`;

// (async () => {
// 	const foo = await getSyllableCount('mouser');
// 	console.log(foo);
// })()


const totalSyllablesArray = Promise.all(haiku1.split(`\n`).map(async line => {
	const lineSyllablesArray = line.split(` `).map(async word => await getSyllableCount(word));
	return Promise.all(lineSyllablesArray);
})).then(syllables => console.log(syllables.map(line => line.reduce((a, b) => a + b, 0))));
// [[1, 1, 1, 2, 2, 1], [1, 1, 2, 1], [1, 1, 1, 1, 1]]


// const arrOfWords = ["A", "dog", "is", "beautiful"];

// let arrOfSyllables = [];
// arrOfWords.forEach((word) => {
// 	/* Call the dictionary API to get the # of syllables in each word */
// 	apiCall(word);
// });
// console.log(arrOfSyllables) // [1,1,1,3];

// /* THIS NEEDS TO WAIT */
// let totalSyllables = arrOfSyllables.reduce((a, b) => a + b);
// console.log(totalSyllables);

// setInterval(function () {
// 	console.log('here');
// 	if (arrOfWords.length === arrOfSyllables.length) {
// 		console.log(arrOfSyllables);
// 		clearTimeout();
// 	}
// 	else {
// 		console.log(`${arrOfWords.length} --- ${arrOfSyllables.length}`);
// 	}
// }, 100);

// setTimeout(() => {
// 	let numSyllables = arrOfSyllables.reduce((a, b) => a + b);
// 	console.log(`in set timeout: ${numSyllables}`);
// }, 5000);



/* THIS WAS OUR TEACHER'S RESPONSE */
/* WHEN IT DIDN'T WORK */
/* HE SHRUGGED AND LEFT */
// async function test() {
// 	const arrOfWords = ["A", "dog", "is", "beautiful"];

// 	let arrOfSyllables = [];
// 	await arrOfWords.forEach((word) => {
// 		/* Call the dictionary API to get the # of syllables in each word */
// 		apiCall(word, returnSyllables, arrOfSyllables);
// 	});

// 	/* THIS NEEDS TO WAIT */
// 	let totalSyllables = arrOfSyllables.reduce((a, b) => a + b);
// 	console.log(totalSyllables);
// }






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