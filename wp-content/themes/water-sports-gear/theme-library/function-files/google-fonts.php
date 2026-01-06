<?php
function water_sports_gear_get_all_google_fonts() {
    $water_sports_gear_webfonts_json = get_template_directory() . '/theme-library/google-webfonts.json';
    if ( ! file_exists( $water_sports_gear_webfonts_json ) ) {
        return array();
    }

    $water_sports_gear_fonts_json_data = file_get_contents( $water_sports_gear_webfonts_json );
    if ( false === $water_sports_gear_fonts_json_data ) {
        return array();
    }

    $water_sports_gear_all_fonts = json_decode( $water_sports_gear_fonts_json_data, true );
    if ( json_last_error() !== JSON_ERROR_NONE ) {
        return array();
    }

    $water_sports_gear_google_fonts = array();
    foreach ( $water_sports_gear_all_fonts as $water_sports_gear_font ) {
        $water_sports_gear_google_fonts[ $water_sports_gear_font['family'] ] = array(
            'family'   => $water_sports_gear_font['family'],
            'variants' => $water_sports_gear_font['variants'],
        );
    }
    return $water_sports_gear_google_fonts;
}


function water_sports_gear_get_all_google_font_families() {
    $water_sports_gear_google_fonts  = water_sports_gear_get_all_google_fonts();
    $water_sports_gear_font_families = array();
    foreach ( $water_sports_gear_google_fonts as $water_sports_gear_font ) {
        $water_sports_gear_font_families[ $water_sports_gear_font['family'] ] = $water_sports_gear_font['family'];
    }
    return $water_sports_gear_font_families;
}

function water_sports_gear_get_fonts_url() {
    $water_sports_gear_fonts_url = '';
    $water_sports_gear_fonts     = array();

    $water_sports_gear_all_fonts = water_sports_gear_get_all_google_fonts();

    if ( ! empty( get_theme_mod( 'water_sports_gear_site_title_font', 'Raleway' ) ) ) {
        $water_sports_gear_fonts[] = get_theme_mod( 'water_sports_gear_site_title_font', 'Raleway' );
    }

    if ( ! empty( get_theme_mod( 'water_sports_gear_site_description_font', 'Raleway' ) ) ) {
        $water_sports_gear_fonts[] = get_theme_mod( 'water_sports_gear_site_description_font', 'Raleway' );
    }

    if ( ! empty( get_theme_mod( 'water_sports_gear_header_font', 'Oswald' ) ) ) {
        $water_sports_gear_fonts[] = get_theme_mod( 'water_sports_gear_header_font', 'Oswald' );
    }

    if ( ! empty( get_theme_mod( 'water_sports_gear_content_font', 'Work Sans' ) ) ) {
        $water_sports_gear_fonts[] = get_theme_mod( 'water_sports_gear_content_font', 'Work Sans' );
    }

    $water_sports_gear_fonts = array_unique( $water_sports_gear_fonts );

    foreach ( $water_sports_gear_fonts as $water_sports_gear_font ) {
        $water_sports_gear_variants      = $water_sports_gear_all_fonts[ $water_sports_gear_font ]['variants'];
        $water_sports_gear_font_family[] = $water_sports_gear_font . ':' . implode( ',', $water_sports_gear_variants );
    }

    $query_args = array(
        'family' => urlencode( implode( '|', $water_sports_gear_font_family ) ),
    );

    if ( ! empty( $water_sports_gear_font_family ) ) {
        $water_sports_gear_fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css' );
    }

    return $water_sports_gear_fonts_url;
}