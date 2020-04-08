let testHaiku = `Once I had a dog
he was very beautiful
and his name was Joe.`

const checkHaiku = (str) => {
  const lines = str.split('\n');

  const firstLineArr = lines[0].split(" ");
  const secondLineArr = lines[1].split(" ");
  const thirdLineArr = lines[2].split(" ");

  const testWord = firstLineArr[0];

  const verifyWord = (word) => fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=ca1d155c-0904-45b3-ab4a-c3e87282f319`)
    .then(
      function (response) {
        if (response.status !== 200) {
          console.log('There was an error. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          //console.log(data);
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });


  // const numSyllables = (arr, lineNumber) => {
  //   arr.map((e) => {
  //     //put our main function here
  //   })
  // }

}

console.log(checkHaiku(testHaiku));

//UI Logic
// $(document).ready(function() {
//   $("form").submit(function(event) {

//     let inputtedString = $("#string-input").val();

//     let result = checkHaiku(inputtedString);
//     $("#result").append(result);

//     event.preventDefault();
//   });
// });

/* Steps */
/*
Path 1:
First, we need to validate that each word is actually a valid english word, by querying the dictionary api.

Path 2:
-Split into lines
-Verify that each word is valid, but do it by line and return the num of syllables at the same time
-Return an array of syllable count (use map);
-Use reduce on each line to count the styllables.


*/