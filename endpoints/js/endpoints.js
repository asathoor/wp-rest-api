/**
* file: endpoints.js
* purpuse: fecth JSON via WP REST API
**/
console.log('Hi from endpoints.js')

fetch("https://multimusen.dk/wpsandbox/wp-json/wp/v2/").then(
  response => {
    return response.json(); // get JSON data$
  }).then(data => {

  console.log("--- Endpoints ---\n")
  console.log( data.routes ); // what's in the JSON string?

}).catch(err => {
  // Do something with error here
  console.log('There was an error ...')
})
