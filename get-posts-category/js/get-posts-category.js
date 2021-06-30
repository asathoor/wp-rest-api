
'use strict'

/**
* file: get-posts-category.js
**/

// filter
const endPoint = "https://multimusen.dk/wp-json/wp/v2/posts/?categories=134&per_page=3"

fetch( endPoint ).then(
    response => {
      return response.json(); // get JSON data
    }).then(data => {

        for (let i = 0; i < data.length; i++) {

          // links to posts
          viewPosts.innerHTML += `<article>
            <h3>
              <a href="${data[i].link}">
                ${data[i].title.rendered}
              </a>
            </h3>
            <div id="post-content">
              ${data[i].excerpt.rendered}
            <div>
            </article>`

            dataInfo.innerHTML = data[i]
        }
}).catch(err => {
  viewPosts.innerHTML = "<span class='error'>Error.</span>"
  viewPosts.innerHTML += "<p class='error'>Endpoint: <br>" + endPoint
  + 'Error: ' + err
})
