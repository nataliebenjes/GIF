
import './css/styles.css';

// Business Logic

function getGif(phrase) {
  let request = new XMLHttpRequest();
  const url = `https://api.giphy.com/v1/gifs/search?q=${phrase}&api_key=K3hYf8L1myC9PKkAfOvw0RyRTbAqlFAN`;

  request.addEventListener("loadend", function () {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response, phrase);
    } else {
      printError(this, response, phrase);
    }
  });

  request.open("GET", url, true);
  request.send();
}

// UI Logic
function printError(request, apiResponse, phrase) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the weather data for ${phrase}: ${request.status} ${request.statusText}: ${apiResponse.message}`;
}

function printElements(apiResponse) {
  document.querySelector('#image').src = apiResponse.data[4].images.downsized.url; 
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