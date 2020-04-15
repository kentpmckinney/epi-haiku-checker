/* Sample code for running parallel promises, which might be exactly what we need */
/* Code from this article: https://bitsofco.de/javascript-promises-101/ */

var arrayOfURLs = ['one.json', 'two.json', 'three.json', 'four.json'];
var arrayOfPromises = arrayOfURLs.map(get);

Promise.all(arrayOfPromises)
  .then(function (arrayOfResults) {
    /* Do something when all Promises are resolved */
  })
  .catch(function (err) {
    /* Handle error is any of Promises fails */
  })


//MDN article on this here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises


Promise.all([func1(), func2(), func3()])
  .then(([result1, result2, result3]) => { /* use result1, result2 and result3 */ });