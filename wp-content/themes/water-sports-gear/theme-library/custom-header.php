<?php
/**
 * Sample implementation of the Custom Header feature
 *
 * @link https://developer.wordpress.org/themes/functionality/custom-headers/
 *
 * @package water_sports_gear
 */

function water_sports_gear_custom_header_setup() {
	add_theme_support( 'custom-header', apply_filters( 'water_sports_gear_custom_header_args', array(
		'default-text-color'     => 'fff',
		'header-text' 			 =>	false,
		'width'                  => 1360,
		'height'                 => 110,
		'flex-width'         	=> true,
        'flex-height'        	=> true,
		'wp-head-callback'       => 'water_sports_gear_header_style',
	) ) );
}

add_action( 'after_setup_theme', 'water_sports_gear_custom_header_setup' );

if ( ! function_exists( 'water_sports_gear_header_style' ) ) :

add_action( 'wp_enqueue_scripts', 'water_sports_gear_header_style' );
function water_sports_gear_header_style() {
	if ( get_header_image() ) :
	$water_sports_gear_custom_css = "
        header.site-header .header-main-wrapper .bottom-header-outer-wrapper .bottom-header-part{
			background-image:url('".esc_url(get_header_image())."') !important;
			background-size: 100% 100%;
			background-position: center top;
		}";
	   	wp_add_inline_style( 'water-sports-gear-style', $water_sports_gear_custom_css );
	endif;
}
endif;