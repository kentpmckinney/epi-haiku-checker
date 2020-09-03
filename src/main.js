/* eslint-disable no-unused-vars */
import './styles.css';
import $ from 'jquery';
import getSyllableCount from './getSyllableCount';
import { haikuChecker } from './haikuChecker';

$(document).ready(function () {
  $("form#haiku-form").submit(function (event) {
    event.preventDefault();

    /* Get user input and run it through our function */
    const haiku = $("#haiku-input").val();
    const isHaiku = haikuChecker(haiku);

    /* Display result to user */
    const outputDiv = $("#result");
    outputDiv.append(haiku);

    if (isHaiku === true) {
      outputDiv.append(`Your poem is a haiku`);
    } else if (isHaiku === false) {
      outputDiv.append(`Your poem is not a haiku`);
    } else {
      //outputDiv.append(`There was a technical error. Try again later.`);
    }

  });

});