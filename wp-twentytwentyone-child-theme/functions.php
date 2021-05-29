<?php
/**
 * file: functions.php
 * purpose: add scripts, styles and functions to the theme
*/

if ( ! function_exists( 'suffice_child_enqueue_child_styles' ) ) {
	function Multimusen_enqueue_child_styles() {

		// Bootstrap CDN (petj)
		wp_enqueue_style(
	      'Bootstrap-4-6-0-CDN-styles',
	      'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css'
	    );

		wp_enqueue_script(
	      'Bootstrap-CDN-js',
	      'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js',
				array(),
				'4.6.0',
				true
	    );

		wp_enqueue_script(
				'Bootstrap-CDN-js-bundle',
				'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js',
				array(),
				'4.6.0',
				true
			);


	    // loading parent style
	    wp_register_style(
	      'parente2-style',
	      get_template_directory_uri() . '/style.css'
	    );

	    wp_enqueue_style( 'parente2-style' );
	    // loading child style
	    wp_register_style(
	      'childe2-style',
	      get_stylesheet_directory_uri() . '/style.css'
	    );
	    wp_enqueue_style( 'childe2-style');
	 }
}
add_action( 'wp_enqueue_scripts', 'Multimusen_enqueue_child_styles' );
