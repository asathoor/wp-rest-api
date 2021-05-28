/**
* file: get-posts.js
* purpuse: fecth JSON via WP REST API

How: fetch posts and filter via the category name

In the Dashboard edit the category, note the id here:
https://multimusen.dk/wp-admin/term.php?taxonomy=category&tag_ID=134&post_type=post&wp_http_referer=%2Fwp-admin%2Fedit-tags.php%3Ftaxonomy%3Dcategory%26post_type%3Dpost%26s%3Dwordp

The tag_ID is the number of the category.
**/

// filter
const endPoint = "https://multimusen.dk/wp-json/wp/v2/posts/?categories=134&per_page=3"

fetch( endPoint ).then(
    response => {
      return response.json(); // get JSON data
    }).then(data => {

        console.log( data ); // test


        // loop out content

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
        }
}).catch(err => {
  viewPosts.innerHTML = "<span class='error'>Error.</span>"
  viewPosts.innerHTML += "<p class='error'>Endpoint: <br>" + endPoint
})
