/**
 * project: wpapi test
 * documentation: https://github.com/WP-API/node-wpapi#using-the-client
 **/

// Create WPAPI instance and add endpoint to /wp-json
const wp = new WPAPI({
  endpoint: 'https://multimusen.dk/wpsandbox/wp-json',
});

// Request methods return Promises.
wp
.posts()
.perPage(7)
.get()

.then(function(data) {
    // do something with the returned posts
    // console.log(data)

    for (i = 0; i < data.length; i++) {
      viewPosts.innerHTML += `
      <article>
        <h1> ${data[i].title.rendered} </h1>
        <div class="content">
          ${data[i].content.rendered}
        </div>
      </article>
      ` }

  })

  .catch(function(err) {
    console.log(err)
  });
