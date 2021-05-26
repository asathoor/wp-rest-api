<?php
/**
 * file: page-api-test
 * purpose: get blog posts via rest api on a costum page.
 */

get_header(); ?>

    <main>
        
    <header>
    
    <h1>Demo: REST API</h1>
    
    </header>

    <article>

        <!-- Posts will display below -->
        <div id="viewPosts" style="width:550px;margin:auto;"></div>
    
    </article>
    
    </main>

    <!-- REST API Script (use full path here) -->
    <script src="http://multimusen.dk/wp-content/themes/Multimusen/js/get-posts.js"></script>
    
<?php get_footer(); ?>
