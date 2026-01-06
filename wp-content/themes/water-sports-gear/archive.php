<?php

/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package water_sports_gear
 */

get_header();

$water_sports_gear_column = get_theme_mod( 'water_sports_gear_archive_column_layout', 'column-1' );
?>
<main id="primary" class="site-main">
	<?php if ( have_posts() ) : ?>
		<div class="water-sports-gear-archive-layout grid-layout <?php echo esc_attr( $water_sports_gear_column ); ?>">
			<?php
			/* Start the Loop */
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content',  get_post_format() );

			endwhile;
			?>
		</div>
		<?php
		do_action( 'water_sports_gear_posts_pagination' );
	else :
		get_template_part( 'template-parts/content', 'none' );
	endif;
	?>
</main><!-- #main -->
<?php
if ( water_sports_gear_is_sidebar_enabled() ) {
	get_sidebar();
}
get_footer();