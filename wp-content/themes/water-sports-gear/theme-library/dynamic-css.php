<?php

/**
 * Dynamic CSS
 */
function water_sports_gear_dynamic_css() {
	$water_sports_gear_primary_color = get_theme_mod( 'primary_color', '#00326E' );

	$water_sports_gear_site_title_font       = get_theme_mod( 'water_sports_gear_site_title_font', 'Raleway' );
	$water_sports_gear_site_description_font = get_theme_mod( 'water_sports_gear_site_description_font', 'Raleway' );
	$water_sports_gear_header_font           = get_theme_mod( 'water_sports_gear_header_font', 'Oswald' );
	$water_sports_gear_content_font             = get_theme_mod( 'water_sports_gear_content_font', 'Work Sans' );

	// Enqueue Google Fonts
	$water_sports_gear_fonts_url = water_sports_gear_get_fonts_url();
	if ( ! empty( $water_sports_gear_fonts_url ) ) {
		wp_enqueue_style( 'water-sports-gear-google-fonts', esc_url( $water_sports_gear_fonts_url ), array(), null );
	}

	$water_sports_gear_custom_css  = '';
	$water_sports_gear_custom_css .= '
    /* Color */
    :root {
        --primary-color: ' . esc_attr( $water_sports_gear_primary_color ) . ';
        --header-text-color: ' . esc_attr( '#' . get_header_textcolor() ) . ';
    }
    ';

	$water_sports_gear_custom_css .= '
    /* Typography */
    :root {
        --font-heading: "' . esc_attr( $water_sports_gear_header_font ) . '", serif;
        --font-main: -apple-system, BlinkMacSystemFont, "' . esc_attr( $water_sports_gear_content_font ) . '", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }

    body,
	button, input, select, optgroup, textarea, p {
        font-family: "' . esc_attr( $water_sports_gear_content_font ) . '", serif;
	}

	.site-identity p.site-title, h1.site-title a, h1.site-title, p.site-title a, .site-branding h1.site-title a {
        font-family: "' . esc_attr( $water_sports_gear_site_title_font ) . '", serif;
	}
    
	p.site-description {
        font-family: "' . esc_attr( $water_sports_gear_site_description_font ) . '", serif !important;
	}
    ';

	wp_add_inline_style( 'water-sports-gear-style', $water_sports_gear_custom_css );
}
add_action( 'wp_enqueue_scripts', 'water_sports_gear_dynamic_css', 99 );