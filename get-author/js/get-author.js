/**
* file: get-author.js
**/

//console.log('Hi from get-author.js')

'use strict'

let getAuthor = (function () {

  // change this to your own domain
  const author = "https://multimusen.dk/wp-json/wp/v2/users/1"

  fetch( author ).then(
    response => {
      return response.json(); // get JSON data$
    }).then(data => {

    console.log(data); // what's in the JSON string?

    // create HTML here
    viewPosts.innerHTML = '<div>'
    + '<h2 class="author-title">' + data.name + '</h2>'
    + '<div class="author-description">'
    + data.description
    + '</div>'
    + '</div>'

  }).catch(err => {
    // Do something with error here
    console.log('Error: ' + err)
  })
})()
