'use strict'

/**
* file: get-posts.js
* purpuse: fecth JSON via WP REST API
**/

// define the endpoint
const getPosts = "https://YOUR-DOMAIN.COM/wp-json/wp/v2/posts" // endpoint: posts

// fetch the data from the endpoint
fetch(getPosts).then(
  response => {
    return response.json(); // get JSON data$
  }).then(data => {

  for (let i = 0; i < data.length; i++) {

    viewPosts.innerHTML += '<div class="posts">' // contentwrapper
    + '<h2>' + data[i].title.rendered + '</h2>' // title
    + '<div className="posts_content">'
    + data[i].content.rendered
    + '</div>' // end content
    + '</div>' // end contentwrapper

  }

}).catch(err => {
  console.log('Error: ' + err) // error handle
})
