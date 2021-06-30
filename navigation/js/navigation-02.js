'use strict'
/**
 * file: navigation.js
 * purpuse: detect a click and fetch a page
 **/

// endpoints
const getUrl = "https://multimusen.dk/wpsandbox/wp-json/wp/v2/posts/"

/* document ready */
document.addEventListener("DOMContentLoaded", (event) => {
  console.log('The DOM is ready.')

  // create the menu buttons
  MenuAdd('btnHome', 'Home', 'https://multimusen.dk/wpsandbox/')
  MenuAdd('btnAbout', 'About', 'https://multimusen.dk/wpsandbox/about/')
  MenuAdd('btnResume', 'Resume', 'https://multimusen.dk/wpsandbox/cv/')
  MenuAdd('btnContact', 'Contact', 'https://multimusen.dk/wpsandbox/contact/')

  // add content
  GetPosts()
});

// Add buttons to the menu
let MenuAdd = function(btnId, btnText, openUrl) {
  return topNav.innerHTML += `
    <li>
      <button
        id="${btnId}"
        class="nav_btns"
        onclick="location.href='${ openUrl }'">
          ${btnText}
      </button>
    </li>
  `
}

// Get posts
let GetPosts = function() {

  fetch(getUrl).then(
    response => {
      return response.json(); // get JSON data$
    }).then(data => {

    // add content to #viewPosts
    for (var n = 0; n < data.length; n++) {
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
