/* eslint-disable no-unused-vars */
import { getSyllableCount } from './getSyllableCount';

export const haikuChecker = (haiku) => {
  Promise.all(haiku.split(`\n`).map(async line => {
  const lineSyllablesArray = line.split(` `).map(async word => await getSyllableCount(word));
  return Promise.all(lineSyllablesArray);
})).then(syllables => console.log(syllables.map(line => line.reduce((a, b) => a + b, 0))));
}