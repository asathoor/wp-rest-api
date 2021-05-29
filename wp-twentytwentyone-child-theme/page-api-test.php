<?php
/**
 * template: for a page with the slug api-test
 * file: page-api-test
 * purpose: get blog posts via rest api on a costum page.
 */

get_header(); ?>

    <main>
            <!-- Posts will display below -->
            <div id="viewPosts"></div>
    </main>

    <!-- REST API Script (use full path here) -->
    <script src="http://multimusen.dk/wp-content/themes/Multimusen/js/get-posts.js"></script>

<?php get_footer(); ?>
