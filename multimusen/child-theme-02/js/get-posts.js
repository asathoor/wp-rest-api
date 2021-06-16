'use strict'
/**
* file: get-posts.js
* purpuse: fecth JSON via WP REST API
**/
const getPosts = "https://multimusen.dk/wp-json/wp/v2/posts" // endpoint: posts

// random speed
let Speed = function(){
  return (Math.floor(Math.random()*5))+1
}

// random left
let Left = function(){
  return Math.floor(Math.random()*50)
}

fetch(getPosts).then(
  response => {
    return response.json(); // get JSON data$
  }).then(data => {

  // console.log(data); // what's in the JSON string?

  // posts come as an array loop content out
  for (let i = 0; i < data.length; i++) {
    var aPost = document.createElement("div")
    aPost.innerHTML = data[i].title.rendered // add more when it works
    aPost.setAttribute("class", "rellax");
    aPost.setAttribute("data-rellax-zindex", (100 + i));
    aPost.setAttribute("data-rellax-speed", Speed());
    document.body.appendChild(aPost)
  }
}).catch(err => {
  console.log('Error ...' + err)
})
