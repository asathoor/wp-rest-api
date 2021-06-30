'use strict'

/**
* file: get-posts.js
* purpose: show post titles and content
**/

// define the posts endpoint
const getPosts = "https://YOUR-DOMAIN.COM/wp-json/wp/v2/posts" 

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
