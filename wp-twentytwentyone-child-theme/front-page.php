<?php
/**
 * file: frontpage.php
 * purpose: custom frontpage
 */
get_header();
?>

<!-- BOOTSTRAP MARKUP  BELOW -->
<div class="container">

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

    <!-- Right column: News flow -->
    <div class="col-sm-3">
      <h4>New Articles</h4>
      <!-- REST API content below -->
      <ul id="newArt"></ul>
    </div>
  </div> <!-- /.row -->
</div> <!-- /.container -->

<!-- /BOOTSTRAP MARKUP -->
<script>
/**
* purpose: fecth recent blog posts
**/
const wpSite = "https://multimusen.dk/wp-json/wp/v2/posts/?per_page=5"

fetch( wpSite ).then(
  response => {
    return response.json(); // get JSON data
  }).then(data => {

  console.log(data); // inspect in the console

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
