'use strict'
/**
* file: navigation.js
* purpuse: detect a click and fetch a page
**/

// posts endpoint
const getUrl = "https://multimusen.dk/wpsandbox/wp-json/wp/v2/posts/"


// add navigation items
const navItems = [
  `
  <li>
    <a href="home.html"> Home </a>
  </li>
  `,
  `
  <li>
    <a href="resume.html"> Resume </a>
  </li>
  `,
  `
  <li>
    <a href="about.html"> About </a>
  </li>
  `
]

/* document ready */
document.body.onload = function(){

  // add links to navigation
  for (let i=0; i<navItems.length; i++){
      topNav.innerHTML += navItems[i]
  }
  // load the posts in #viewPosts
  getPosts()
}

function getPosts() {

  fetch( getUrl ).then(
    response => {
      return response.json(); // get JSON data$
    }).then(data => {

    // add content to #viewPosts
    for (var n = 0; n < data.length; n++){
    viewPosts.innerHTML += `
      <article>
        <h1> ${ data[n].title.rendered } </h1>
        <div>
          ${ data[n].content.rendered }
        </div>
      </article>
    `
  }

  }).catch(err => {
    console.log('Error: ' + err) // error message
  })
}
