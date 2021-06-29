/**
* file: navigation.js
* purpuse: detect a click and fetch a page
**/
console.log('Hi from navigation.js')

// add navigation items
// the linked pages are not active
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

document.body.onload = function(){
  // present the menu in nav
  for (let i=0; i<navItems.length; i++){
      topNav.innerHTML += navItems[i]
  }

  // load the posts in #viewPosts
  getPosts()
}


// load posts
const getUrl = "https://multimusen.dk/wpsandbox/wp-json/wp/v2/posts/"

function getPosts() {

  console.log('fetching posts')

  fetch( getUrl ).then(
    response => {
      return response.json(); // get JSON data$
    }).then(data => {

    console.log(data); // what's in the JSON string?

    // create HTML here
    /*
    viewPosts.innerHTML = '<div>'
    + '<h2>' + data.title.rendered + '</h2>'
    + '<div>'
    + data.content.rendered
    + '</div>'
    + '</div>'
    */

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
    // Do something with error here
    console.log('Error: ' + err)
  })
}
