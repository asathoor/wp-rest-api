/**
* file: get-posts.js
* purpuse: fecth JSON via WP REST API

How to get the id?
In the Dashboard edit the category.
**/

const wpSite = "https://multimusen.dk/wp-json/wp/v2/"

function fetchCategory( slug ) {

let endpoint = "categories/?slug=" + slug
let getPosts = wpSite + endpoint // endpoint: posts

fetch(getPosts).then(
  response => {
    return response.json(); // get JSON data$
  }).then(data => {

  console.log(data); // what's in the JSON string?

  // loop out content
  for (let i = 0; i < data.length; i++) {

    viewPosts.innerHTML = `
      <article class="categoryInfo">
      <h2> Category: ${data[i].name} </h2>
      <p> ${data[i].description} </p>
      <p> <a href="${data[i].link}"> See all posts </p>
      </article>
    `
  }
}).catch(err => {
  // Do something with error here
  console.log('There was an error ...')
})

} // end fetchPostsx

// use the functiom
// fetchCategory( slug )
fetchCategory( 'wordpress' )
