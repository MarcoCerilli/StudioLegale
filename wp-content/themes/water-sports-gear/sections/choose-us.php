<?php

if ( ! get_theme_mod( 'water_sports_gear_enable_service_section', false ) ) {
  return;
}

$water_sports_gear_content_ids  = array();
$water_sports_gear_content_type = get_theme_mod( 'water_sports_gear_service_content_type', 'post' );

for ( $water_sports_gear_i = 1; $water_sports_gear_i <= 8; $water_sports_gear_i++ ) {
  $water_sports_gear_content_ids[] = get_theme_mod( 'water_sports_gear_service_content_' . $water_sports_gear_content_type . '_' . $water_sports_gear_i );
}

// Get the category for the services slider from theme mods or a default category
$water_sports_gear_services_category = get_theme_mod('water_sports_gear_services_category', 'services');

// Modify query to fetch posts from a specific category
$water_sports_gear_args = array(
    'post_type'           => $water_sports_gear_content_type,
    'post__in'            => array_filter( $water_sports_gear_content_ids ),
    'orderby'             => 'post__in',
    'posts_per_page'      => absint(6),
    'ignore_sticky_posts' => true,
);

// Apply category filter only if content type is 'post'
if ( 'post' === $water_sports_gear_content_type && ! empty( $water_sports_gear_services_category ) ) {
    $water_sports_gear_args['category_name'] = $water_sports_gear_services_category;
}

$water_sports_gear_args = apply_filters( 'water_sports_gear_service_section_args', $water_sports_gear_args );

water_sports_gear_render_service_section( $water_sports_gear_args );

/**
 * Render Choose Us Section.
 */
function water_sports_gear_render_service_section( $water_sports_gear_args ) { ?>

  <section id="water_sports_gear_service_section" class="asterthemes-frontpage-section service-section service-style-1">
    <?php
    if ( is_customize_preview() ) :
      water_sports_gear_section_link( 'water_sports_gear_service_section' );
    endif;

    $water_sports_gear_trending_product_heading = get_theme_mod( 'water_sports_gear_trending_product_heading');
    ?>
    <div class="asterthemes-wrapper">
      <?php if ( ! empty( $water_sports_gear_trending_product_heading ) ) { ?>
        <div class="product-contact-inner">
          <h3 class="heading"><i class="fas fa-water"></i> <?php echo esc_html( $water_sports_gear_trending_product_heading ); ?></h3>
        </div>
      <?php } ?>
      <div class="video-main-box">
        <?php 
        $water_sports_gear_query = new WP_Query( $water_sports_gear_args );
        if ( $water_sports_gear_query->have_posts() ) :
          ?>
          <div class="section-body">
            <div class="service-section-wrapper">
              <?php
              $water_sports_gear_i = 1;
              while ( $water_sports_gear_query->have_posts() ) :
                $water_sports_gear_query->the_post();
                ?>
                <div class="service-single">
                  <div class="service-image-box">
                    <?php if ( has_post_thumbnail() ) { ?>
                      <div class="service-image">
                        <?php the_post_thumbnail( 'full' ); ?>
                      </div>
                    <?php }?>
                    <h3>
                      <a href="<?php the_permalink(); ?>">
                        <?php the_title(); ?>
                      </a>
                    </h3>
                  </div>
                </div>
                <?php
                $water_sports_gear_i++;
              endwhile;
              wp_reset_postdata();
              ?>
            </div>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </section>
  <?php
}