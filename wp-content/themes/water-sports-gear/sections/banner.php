<?php
if ( ! get_theme_mod( 'water_sports_gear_enable_banner_section', false ) ) {
	return;
}

$water_sports_gear_slider_content_ids  = array();
$water_sports_gear_slider_content_type = get_theme_mod( 'water_sports_gear_banner_slider_content_type', 'post' );

for ( $water_sports_gear_i = 1; $water_sports_gear_i <= 3; $water_sports_gear_i++ ) {
	$water_sports_gear_slider_content_ids[] = get_theme_mod( 'water_sports_gear_banner_slider_content_' . $water_sports_gear_slider_content_type . '_' . $water_sports_gear_i );
}
// Get the category for the banner slider from theme mods or a default category
$water_sports_gear_banner_slider_category = get_theme_mod('water_sports_gear_banner_slider_category', 'slider');

// Modify query to fetch posts from a specific category
$water_sports_gear_banner_slider_args = array(
    'post_type'           => $water_sports_gear_slider_content_type,
    'post__in'            => array_filter( $water_sports_gear_slider_content_ids ),
    'orderby'             => 'post__in',
    'posts_per_page'      => absint(3),
    'ignore_sticky_posts' => true,
);

// Apply category filter only if content type is 'post'
if ( 'post' === $water_sports_gear_slider_content_type && ! empty( $water_sports_gear_banner_slider_category ) ) {
    $water_sports_gear_banner_slider_args['category_name'] = $water_sports_gear_banner_slider_category;
}
$water_sports_gear_banner_slider_args = apply_filters( 'water_sports_gear_banner_section_args', $water_sports_gear_banner_slider_args );

water_sports_gear_render_banner_section( $water_sports_gear_banner_slider_args );

/**
 * Render Banner Section.
 */
function water_sports_gear_render_banner_section( $water_sports_gear_banner_slider_args ) {     ?>

	<section id="water_sports_gear_banner_section" class="banner-section banner-style-1">
		<?php
		if ( is_customize_preview() ) :
			water_sports_gear_section_link( 'water_sports_gear_banner_section' );
		endif;
		?>
		<div class="banner-section-wrapper">
			<?php
			$query = new WP_Query( $water_sports_gear_banner_slider_args );
			if ( $query->have_posts() ) :
				?>
				<div class="asterthemes-banner-wrapper banner-slider water-sports-gear-carousel-navigation" data-slick='{"autoplay": false }'>
					<?php 
					$water_sports_gear_i = 1;
					while ( $query->have_posts() ) :
						$query->the_post();
						$water_sports_gear_button_label = get_theme_mod( 'water_sports_gear_banner_button_label_' . $water_sports_gear_i);
						$water_sports_gear_button_link  = get_theme_mod( 'water_sports_gear_banner_button_link_' . $water_sports_gear_i);
						$water_sports_gear_banner_short_heading = get_theme_mod( 'water_sports_gear_banner_short_heading' . $water_sports_gear_i);
						$water_sports_gear_button_link  = ! empty( $water_sports_gear_button_link ) ? $water_sports_gear_button_link : get_the_permalink();
						$water_sports_gear_default_image_url_head = get_theme_mod('water_sports_gear_about_left_image_1'. $water_sports_gear_i);
						?>
						<div class="banner-single-outer">
							<div class="banner-single">
								<div class="banner-main-image">
									<div class="banner-left">
										<div class="water_sports_gear_banner_left_image">
											<?php if ( ! empty( $water_sports_gear_default_image_url_head ) ) { ?>
												<img src="<?php echo esc_url( $water_sports_gear_default_image_url_head ); ?>">
											<?php } ?>
										</div>
									</div>
									<div class="banner-img">
										<?php the_post_thumbnail( 'full' ); ?>
									</div>								
								</div>
								<div class="banner-caption">
									<div class="banner-catption-wrapper">
										<h1 class="banner-caption-title">
											<a href="<?php the_permalink(); ?>">
						                        <?php the_title(); ?>
						                    </a>
										</h1>
										<?php if ( ! empty( $water_sports_gear_banner_short_heading ) ) { ?>
											<h4><?php echo esc_html( $water_sports_gear_banner_short_heading ); ?></h4>
										<?php } ?>
										<?php if ( ! empty( $water_sports_gear_button_label ) ) { ?>
											<div class="banner-slider-btn">
												<a href="<?php echo esc_url( $water_sports_gear_button_link ); ?>" class="asterthemes-button"><?php echo esc_html( $water_sports_gear_button_label ); ?></a>
											</div>
										<?php } ?>
										<div class="socail-search">
			                                <div class="social-icons">
			                                    <?php
			                                    if ( has_nav_menu( 'social' ) ) {
			                                        wp_nav_menu(
			                                            array(
			                                                'menu_class'     => 'menu social-links',
			                                                'link_before'    => '<span class="screen-reader-text">',
			                                                'link_after'     => '</span>',
			                                                'theme_location' => 'social',
			                                            )
			                                        );
			                                    }
			                                    ?>
			                                </div>
			                            </div>
									</div>
								</div>
							</div>
						</div>
						<?php
						$water_sports_gear_i++;
					endwhile;
					wp_reset_postdata();
					?>
				</div>
				<?php
			endif;
			?>
		</div>
	</section>

	<?php
}