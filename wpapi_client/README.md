# WPAPI Client

WPAPI and Vanilla JavaScript.

## Installation

In your terminal do this:

~~~~
npm install
~~~~

The command will download the necessary npm modules. The WPAPI files are in node_modules/wpapi/

## Discussion

Ease of use - however, with a steep learning curve. The documentation could be better. The average web user may have a hard time figuring out which files to use.

## Where are the correct scripts?

* /node_modules/wpapi/browser/wpapi.min.js

## Usage: Posts

Here is a working sample for recent posts with promises and an error catch:

~~~~
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
~~~~
