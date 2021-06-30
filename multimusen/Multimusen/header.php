
<?php
/**
 * The header.
 *
 * This is the template that displays all of the <head> section and everything up until main.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since 1.0.0
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> <?php twentytwentyone_the_html_classes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Meta tags -->
  <meta name="description" content="A large collection of free tutorials about: WordPress, REST API, JavaScript. Also you can get insight into the art of databases, PHP and much more.">
  <meta name="keywords" content="WordPress, Linux, REST API, JavaSScript, PHP, free tutorial">
  <meta name="copyright" content="Per Skolander Thykjaer Jensen">
  <meta name="language" content="EN">
  <!-- /meta tags -->

  <!-- Open Graph Begin -->
  <meta property="og:title" content="Multimusen - tips, tricks and tutorials about WordPress and UX">
  <meta property="og:site_name" content="Multimusen.dk">
  <meta property="og:url" content="https://multimusen.dk">
  <meta property="og:description" content="Hundreds of tutorials about WordPress development, REST API, JavaScript. Tutorials about WordPress backend, the database and PHP. By Per Skolander Thykjaer Jensen, MA IT.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://multimusen.dk/wp-content/uploads/cropped-cropped-cropped-multimusen-150-150-1.png">
  <!-- Open Graph End -->

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'twentytwentyone' ); ?></a>

	<?php get_template_part( 'template-parts/header/site-header' ); ?>

	<div id="content" class="site-content">
		<section id="primary" class="content-area">
			<main id="main" class="site-main" role="main">
