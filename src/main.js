/* eslint-disable no-unused-vars */
//STYLESHEET WON'T CONNECT
import './styles.css';
import './haiku.js';
import $ from 'jquery';
import getSyllableCount from './getSyllableCount';
import { totalSyllablesArray } from './haiku';
import { haikuChecker } from './haiku';

$(document).ready(function() {
  //JQUERY ISN'T WORKING
  console.log('jquery is working!');
  $("#haiku-form").submit(function(event) {
    /* Get user input and run it through our function */
    const haiku = $("#haiku-input").val();
    const isHaiku = haikuChecker(haiku);

    /* Display result to user */
    const outputDiv = $("div#result");
    if (isHaiku === true) {
      outputDiv.append(`Your poem is a haiku`);
    } else if (isHaiku === false) {
      outputDiv.append(`Your poem is not a haiku`);
    } else {
      outputDiv.append(`There was a technical error. Try again later.`);
    }
    event.preventDefault();
  });

});