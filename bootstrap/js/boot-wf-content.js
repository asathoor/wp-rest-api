/**
 * file: navigation.js
 * purpuse: detect a click and fetch a page
 **/
console.log('Hi from navigation.js')

const getPosts = "https://multimusen.dk/wpsandbox/wp-json/wp/v2/pages/"

function getPage(pageId) {

  fetch(getPosts + pageId).then(
    response => {
      return response.json() // get JSON data$
    }).then(data => {

    console.log(data); // what's in the JSON string?

    // create HTML here
    viewPosts.innerHTML = `
      <div class="post-content-ttl">
        <h2> ${data.title.rendered}  </h2>
        <div class="post-content-rnd">
          ${data.content.rendered}
        <div>
      </div>
    `

  }).catch(err => {
    // Do something with error here
    console.log('Error: could not get page' + err)
  })
}

// initial content
getPage(2166)

/**
 * Navigation Buttons
 **/

// About
about_btn.addEventListener("click", function() {
  console.log('About click')
  getPage(2166) // getPage( aboutPageID )
});

// Resume
resume_btn.addEventListener("click", function() {
  console.log('Resumé click')
  getPage(2439) // getPage( aboutPageID )
});

// Publications
publications_btn.addEventListener("click", function() {
  console.log('Publications click')
  getPage(2465) // getPage( aboutPageID )
});

// Contact 2457
contact_btn.addEventListener("click", function() {
  console.log('Contact click')
  getPage(2457) // getPage( aboutPageID )
});

/**
 * News: get new blog posts
 **/
(function fetchPosts() {

  fetch('https://multimusen.dk/wpsandbox/wp-json/wp/v2/posts?per_page=5').then(
    response => {
      return response.json(); // get JSON data$
    }).then(data => {

    console.log(data); // what's in the JSON string?

    // loop out content
    for (let i = 0; i < data.length; i++) {

      blog_roll.innerHTML += `
         <div class="posts">
           <h5 class="title-rendered">   ${data[i].title.rendered} </h5>
           <div class="content-rendered">
                  ${data[i].content.rendered}
           </div>
         </div>
         `
    }
  }).catch(err => {
    // Do something with error here
    console.log('Error: got no posts ...' + err)
  })

})() // end fetchPostsx
