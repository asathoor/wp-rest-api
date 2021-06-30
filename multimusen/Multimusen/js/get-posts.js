/**
* file: get-posts.js
* purpuse: fecth JSON via WP REST API
**/
const getPosts = "https://multimusen.dk/wp-json/wp/v2/posts" // endpoint: posts

fetch(getPosts).then(
  response => {
    return response.json(); // get JSON data$
  }).then(data => {

  console.log(data); // obj. info

  // loop out something

  for (let i = 0; i < data.length; i++) {

    viewPosts.innerHTML += '<div class="posts">' // contentwrapper
    viewPosts.innerHTML += '<header><h1 class="entry-title">' + data[i].title.rendered + '</h1></header>' // title
    viewPosts.innerHTML += '<div class="entry-content">'
    viewPosts.innerHTML += data[i].content.rendered
    viewPosts.innerHTML += '</div>' // end content
    viewPosts.innerHTML += '</div>' // end contentwrapper
    viewPosts.innerHTML += '<hr class="whitespace">' // end contentwrapper
    

  }

}).catch(err => {
  // Do something with error here
  console.log('There was an error ...')
})