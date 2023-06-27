export default class Gif {
    static getGif(phrase) {
    return new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com//gifs/search?q=${phrase}&api_key=K3hYf8L1myC9PKkAfOvw0RyRTbAqlFAN`;
  
    request.addEventListener("loadend", function () {
      const response = JSON.parse(this.responseText);
      if (this.status === 200) {
        resolve([response, phrase]);
      } else {
       reject([this, response, phrase]);
      }
    });
  
    request.open("GET", url, true);
    request.send();
  });
}
}