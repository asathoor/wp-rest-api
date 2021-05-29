<?php
/**
 * file: frontpage.php
 * purpose: custom frontpage
 */
get_header();
?>

<!-- BOOTSTRAP MARKUP  BELOW -->
<div class="container">

  <!-- Nav -->
  <div class="row">

    <!-- Main content -->
    <div class="col-sm-9">
      <?php
      /*  the Loop (from page.php) */
      while ( have_posts() ) :
      	the_post();
      	get_template_part( 'template-parts/content/content-page' );

      	// If comments are open or there is at least one comment, load up the comment template.
      	if ( comments_open() || get_comments_number() ) {
      		comments_template();
      	}
      endwhile; // End of the Loop.
      ?>
    </div>

    <!-- News flow -->
    <div class="col-sm-3">
      <!-- right -->
      <h4>New Articles</h4>
      <ul id="newArt"></ul>
    </div>
  </div>
</div>

<!-- /BOOTSTRAP MARKUP -->
<script>
/**
* purpose: fecth JSON via WP REST API
**/
const wpSite = "https://multimusen.dk/wp-json/wp/v2/posts/?per_page=5"

fetch( wpSite ).then(
  response => {
    return response.json(); // get JSON data$
  }).then(data => {

  console.log(data); // what's in the JSON string?

  // loop out content
  for (let i = 0; i < data.length; i++) {

    newArt.innerHTML += `
        <li><a href="${data[i].link}"> ${data[i].title.rendered} </a></li>
        `
  }
}).catch(err => {
  // Do something with error here
  console.log('There was an error ...')
})

</script>

<?php get_footer(); ?>
