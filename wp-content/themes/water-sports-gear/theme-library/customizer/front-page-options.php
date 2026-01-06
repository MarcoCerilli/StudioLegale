<?php

/**
 * Front Page Options
 *
 * @package Water Sports Gear
 */

$wp_customize->add_panel(
	'water_sports_gear_front_page_options',
	array(
		'title'    => esc_html__( 'Front Page Options', 'water-sports-gear' ),
		'priority' => 20,
	)
);

// Banner Section.
require get_template_directory() . '/theme-library/customizer/front-page-options/banner.php';

// Tranding Choose Us Section.
require get_template_directory() . '/theme-library/customizer/front-page-options/choose-us.php';