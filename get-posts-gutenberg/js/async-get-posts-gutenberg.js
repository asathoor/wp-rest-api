'use strict'

/**
 * file: async-get-posts-gutenberg.js
 * purpose: more robust code
 **/

let __Init = (async function() {

  try {

    // fetch the posts data
    let response = await fetch("https://multimusen.dk/wpsandbox/wp-json/wp/v2/posts")

    // data to json
    let data = await response.json()

    // view posts in #viewPosts
    for (let i = 0; i < data.length; i++) {

      viewPosts.innerHTML += `
          <article>
            <h2> ${data[i].title.rendered} </h2>
            <div> ${data[i].content.rendered} </div>
          </article>
        `
    } // /for

    return 'Done'
  }

  catch (error){
      return viewPosts.innerHTML = `
      <div class="error-msg">
        <h2> Error message </h2>
        <p> ${error} </p>
      </div>
      `
  }

}())
