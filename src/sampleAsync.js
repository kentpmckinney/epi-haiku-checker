let promisesArray = [];
let valuesArray = [];

/* Simple function to use as callback. Could also be included within the apiCall. */
async function apiCall(keyword) {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${keyword}/`);
    let parsedResponse;
    if (response.ok && response.status === 200) {
      parsedResponse = await response.json();
      return parsedResponse.name;
    } else {
      parsedResponse = false;
    }
  } catch(e) {
    console.log(e.message);
  }
}
 
/* Create multiple promises */
const promise1 = apiCall(1);
const promise2 = apiCall(2);
const promise3 = apiCall(3);
const promise4 = apiCall(4);

/* Store them in an array */
promisesArray = [promise1, promise2, promise3, promise4];

/* Run them all at once */
Promise.all(promisesArray).then(function(values) {
  valuesArray.push(values);
  console.log(valuesArray);
  // return(valuesArray);
});