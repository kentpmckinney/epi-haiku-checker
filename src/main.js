/* eslint-disable no-unused-vars */
import './styles.css';
import $ from 'jquery';
import getSyllableCount from './getSyllableCount';
import { haikuChecker } from './haikuChecker';

$(document).ready(function() {
  $("form#haiku-form").submit(function(event) {
    event.preventDefault();

    /* Get user input and run it through our function */
    const haiku = $("#haiku-input").val();
    const isHaiku = haikuChecker(haiku);

    console.log(isHaiku);  
    /* Display result to user */
    // const outputDiv = $("#result");
    // // TEST TEST
    // outputDiv.append(haiku);

    // if (isHaiku === true) {
    //   outputDiv.append(`Your poem is a haiku`);
    // } else if (isHaiku === false) {
    //   outputDiv.append(`Your poem is not a haiku`);
    // } else {
    //   outputDiv.append(`There was a technical error. Try again later.`);
    // }
 
  });

});


// $(document).ready(function() {

// });


// console.log('javascript is working');
// // $(document).ready(function() {
// //   //JQUERY ISN'T WORKING
// //   console.log('jquery is working!');
// document.getElementById('haiku-input').addEventListener('submit', function(event) {
//   /* Get user input and run it through our function */
//   // const haiku = $("#haiku-input").val();
//   const haiku = document.getElementById('haiku-input').innerText();
//   const isHaiku = haikuChecker(haiku);

//   /* Display result to user */
//   const outputDiv = document.getElementById("result");
  
//   if (isHaiku === true) {
//     outputDiv.innerText(`Your poem is a haiku`);
//   } else if (isHaiku === false) {
//     outputDiv.innerText(`Your poem is not a haiku`);
//   } else {
//     outputDiv.innerText(`There was a technical error. Try again later.`);
//   }
//   // event.preventDefault();
// });

// });