
import './css/styles.css';
import Gif from './gif.js'
// Business Logic

function getGif(phrase) {
  let promise = Gif.getGif(phrase);
  promise.then(function(gifArray){
    printElements(gifArray);
  }, function (errorArray) {
    printError(errorArray);
  });
}



// UI Logic
function printError(error) {
  console.log(error);
  console.log(error[0].status);
  console.log(error[0].statusText)
  document.querySelector('#showResponse').innerHTML = `There was an error accessing the weather data for ${error[0].status}: ${error[0].status} ${error[0].statusText}`;
}

function printElements(results) {
  console.log(results);
  document.querySelector('#image').src = results[0].data[0].images.downsized.url; 
}
function handleFormSubmission(event) {
  event.preventDefault();
  const phrase = document.querySelector('#location').value;
  document.querySelector('#location').value = null;
  getGif(phrase);
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});