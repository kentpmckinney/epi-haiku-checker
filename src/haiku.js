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

const haiku1 = `It was a pretty sunny day
he was very smart
and his name was Joe.`;

const actualHaiku = `This is a haiku
it is not that good okay
But I like it still`

const totalSyllablesArray = Promise.all(haiku1.split(`\n`).map(async line => {
	const lineSyllablesArray = line.split(` `).map(async word => await getSyllableCount(word));
	return Promise.all(lineSyllablesArray);
})).then(syllables => console.log(syllables.map(line => line.reduce((a, b) => a + b, 0))));

