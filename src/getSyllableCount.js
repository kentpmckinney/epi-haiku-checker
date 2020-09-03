/* eslint-disable no-console */
export async function getSyllableCount(keyword) {
  try {
    let response = await fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=ca1d155c-0904-45b3-ab4a-c3e87282f319`);
    if (response.ok && response.status === 200) {
      const parsedResponse = await response.json();
      const theDataPointWeWant = parsedResponse[0]["hwi"]["hw"];
      let syllables = theDataPointWeWant.split("*");
      return syllables.length;
    } else {
      return 0;
    }
  } catch (e) {
    return 0;
  }
}