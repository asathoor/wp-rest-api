/**
* file: endpoints.js
**/
console.log('Hi from endpoints.js')

fetch("https://multimusen.dk/wpsandbox/wp-json/wp/v2/").then(
  response => {
    return response.json(); // get JSON data$
  }).then(data => {

  console.log("--- Endpoints ---\n")
  console.log( data.routes ); // what's in the JSON string?

  // check out posts, endpoints, order, description ...
  // console.log( "Posts \n" + data.routes['/wp/v2/posts'].endpoints[0].args['order'].description );

}).catch(err => {
  // Do something with error here
  console.log('Error: ' + err)
})
