<?php

/**
 * Excerpt
 *
 * @package water_sports_gear
 */

$wp_customize->add_section(
	'water_sports_gear_excerpt_options',
	array(
		'panel' => 'water_sports_gear_theme_options',
		'title' => esc_html__( 'Excerpt', 'water-sports-gear' ),
	)
);

// Excerpt - Excerpt Length.
$wp_customize->add_setting(
	'water_sports_gear_excerpt_length',
	array(
		'default'           => 20,
		'sanitize_callback' => 'absint',
		'transport'         => 'refresh',
	)
);

$wp_customize->add_control(
	'water_sports_gear_excerpt_length',
	array(
		'label'       => esc_html__( 'Excerpt Length (no. of words)', 'water-sports-gear' ),
		'section'     => 'water_sports_gear_excerpt_options',
		'settings'    => 'water_sports_gear_excerpt_length',
		'type'        => 'number',
		'input_attrs' => array(
			'min'  => 10,
			'max'  => 200,
			'step' => 1,
		),
	)
);