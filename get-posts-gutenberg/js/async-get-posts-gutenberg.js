'use strict'

/**
 * file: async-get-posts-gutenberg.js
 **/

const makeRequest = async () => {
  let data = await fetch("https://multimusen.dk/wpsandbox/wp-json/wp/v2/posts")
  console.log(data)
  return "done"
}

makeRequest()
