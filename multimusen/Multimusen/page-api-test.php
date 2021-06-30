<?php
/**
 * file: page-api-test
 * purpose: get blog posts via rest api on a costum page.
 */
get_header(); ?>

	<!-- Posts will display below -->
	<div id="viewPosts"></div>

    <!-- REST API Script - the WP PHP "tag" will add the path of your childtheme -->
	<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/get-posts.js"></script> 

<?php get_footer(); ?>
