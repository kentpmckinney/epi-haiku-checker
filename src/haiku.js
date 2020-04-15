/* eslint-disable no-unused-vars */
import getSyllableCount from './getSyllableCount';

const haiku1 = `It was a pretty sunny day
he was very smart
and his name was Joe.`;

export const haikuChecker = Promise.all(haiku1.split(`\n`).map(async line => {
  const lineSyllablesArray = line.split(` `).map(async word => await getSyllableCount(word));
  return Promise.all(lineSyllablesArray);
})).then(syllables => console.log(syllables.map(line => line.reduce((a, b) => a + b, 0))));