<?php

/**
 * Typography Settings
 *
 * @package water_sports_gear
 */

// Typography Settings
$wp_customize->add_section(
    'water_sports_gear_typography_setting',
    array(
        'panel' => 'water_sports_gear_theme_options',
        'title' => esc_html__( 'Typography Settings', 'water-sports-gear' ),
    )
);

$wp_customize->add_setting(
    'water_sports_gear_site_title_font',
    array(
        'default'           => 'Raleway',
        'sanitize_callback' => 'water_sports_gear_sanitize_google_fonts',
    )
);

$wp_customize->add_control(
    'water_sports_gear_site_title_font',
    array(
        'label'    => esc_html__( 'Site Title Font Family', 'water-sports-gear' ),
        'section'  => 'water_sports_gear_typography_setting',
        'settings' => 'water_sports_gear_site_title_font',
        'type'     => 'select',
        'choices'  => water_sports_gear_get_all_google_font_families(),
    )
);

// Typography - Site Description Font.
$wp_customize->add_setting(
	'water_sports_gear_site_description_font',
	array(
		'default'           => 'Raleway',
		'sanitize_callback' => 'water_sports_gear_sanitize_google_fonts',
	)
);

$wp_customize->add_control(
	'water_sports_gear_site_description_font',
	array(
		'label'    => esc_html__( 'Site Description Font Family', 'water-sports-gear' ),
		'section'  => 'water_sports_gear_typography_setting',
		'settings' => 'water_sports_gear_site_description_font',
		'type'     => 'select',
		'choices'  => water_sports_gear_get_all_google_font_families(),
	)
);

// Typography - Header Font.
$wp_customize->add_setting(
	'water_sports_gear_header_font',
	array(
		'default'           => 'Oswald',
		'sanitize_callback' => 'water_sports_gear_sanitize_google_fonts',
	)
);

$wp_customize->add_control(
	'water_sports_gear_header_font',
	array(
		'label'    => esc_html__( 'Heading Font Family', 'water-sports-gear' ),
		'section'  => 'water_sports_gear_typography_setting',
		'settings' => 'water_sports_gear_header_font',
		'type'     => 'select',
		'choices'  => water_sports_gear_get_all_google_font_families(),
	)
);

// Typography - Body Font.
$wp_customize->add_setting(
	'water_sports_gear_content_font',
	array(
		'default'           => 'Work Sans',
		'sanitize_callback' => 'water_sports_gear_sanitize_google_fonts',
	)
);

$wp_customize->add_control(
	'water_sports_gear_content_font',
	array(
		'label'    => esc_html__( 'Content Font Family', 'water-sports-gear' ),
		'section'  => 'water_sports_gear_typography_setting',
		'settings' => 'water_sports_gear_content_font',
		'type'     => 'select',
		'choices'  => water_sports_gear_get_all_google_font_families(),
	)
);