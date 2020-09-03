/* eslint-disable no-unused-vars */
import { getSyllableCount } from './getSyllableCount';

export function haikuChecker(haiku) {

  //let numLineSyllables = [3];
  const lines = haiku.split(`\n`);
  lines.forEach((line, i) => {
    let counter = 0;
    const words = line.split(` `);
    words.forEach(async word => {
      //console.log(word)
      const num = await getSyllableCount(word);
      if (num > 0) {
        //console.log(num);
        counter += num;
      }
      else {
        console.log("a word has a problem")
      }
      console.log(counter);
    })
  })
  // console.log(counter);
  return haiku;

}

// export const haikuChecker = (haiku) => {
//   Promise.all(haiku.split(`\n`).map(async line => {
//   const lineSyllablesArray = line.split(` `).map(async word => await getSyllableCount(word));
//   return Promise.all(lineSyllablesArray);
// })).then(syllables => console.log(syllables.map(line => line.reduce((a, b) => a + b, 0))));
//}