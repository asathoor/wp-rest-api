'use strict'

/**
* file: get-posts-gutenberg.js
**/

// define endpoint
const getPosts = "https://multimusen.dk/wpsandbox/wp-json/wp/v2/posts" // endpoint: posts

// get the data
fetch(getPosts).then(
  response => {
    return response.json(); // get JSON data
  }).then(data => {

  // loop & view data in #viewPosts
  for (let i = 0; i < data.length; i++) {

    viewPosts.innerHTML += `
      <article>
      <h1> ${data[i].title.rendered} </h1>
      <div class="content">
        ${data[i].content.rendered}
      </div>
      </article>
    `
  }

}).catch(err => {
  console.log('Error: ' + err) // err will tell about the error
})
