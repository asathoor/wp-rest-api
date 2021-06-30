'use strict'

/**
* file: get-posts-gutenberg.js
**/

const getPosts = "https://multimusen.dk/wpsandbox/wp-json/wp/v2/posts" // endpoint: posts

fetch(getPosts).then(
  response => {
    return response.json(); // get JSON data
  }).then(data => {

  // the posts array must be looped out
  // and the data is rendered inside the HTML
  for (let i = 0; i < data.length; i++) {
    viewPosts.innerHTML += '<div class="posts">'
    + '<h2>' + data[i].title.rendered + '</h2>'
    + '<div className="posts_content">'
    + data[i].content.rendered
    + '</div>'
    + '</div>'
  }
}).catch(err => {
  console.log('Error: ' + err) // err will tell about the error
})
