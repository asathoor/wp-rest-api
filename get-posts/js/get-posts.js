/**
* file: get-posts.js
* purpuse: fecth JSON via WP REST API
**/
const getPosts = "https://multimusen.dk/wpsandbox/wp-json/wp/v2/posts" // endpoint: posts

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
  // Do something with error here
  console.log('Error: ' + err)
})
