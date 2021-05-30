/**
* file: get-posts.js
* purpuse: fecth JSON via WP REST API
**/
const getPosts = "https://multimusen.dk/wpsandbox/wp-json/wp/v2/posts" // endpoint: posts

fetch(getPosts).then(
  response => {
    return response.json(); // get JSON data$
  }).then(data => {

  console.log(data); // what's in the JSON string?

  // loop out something

  for (let i = 0; i < data.length; i++) {

    viewPosts.innerHTML += '<div class="posts">' // contentwrapper
    viewPosts.innerHTML += '<h2>' + data[i].title.rendered + '</h2>' // title
    viewPosts.innerHTML += '<div className="posts_content">'
    viewPosts.innerHTML += data[i].content.rendered
    viewPosts.innerHTML += '</div>' // end content
    viewPosts.innerHTML += '</div>' // end contentwrapper

  }

}).catch(err => {
  // Do something with error here
  console.log('Error: ' + err)
})
