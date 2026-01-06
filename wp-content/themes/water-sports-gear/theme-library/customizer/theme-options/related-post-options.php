<?php

/**
 * Related Post Options
 *
 * @package water_sports_gear
 */

$wp_customize->add_section(
	'water_sports_gear_related_post_options',
	array(
		'title' => esc_html__( 'Related Post Options', 'water-sports-gear' ),
		'panel' => 'water_sports_gear_theme_options',
	)
);

// Add Separator Custom Control
$wp_customize->add_setting( 'water_sports_gear_related_post_separator', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_related_post_separator', array(
	'label' => __( 'Enable / Disable Related Post Section', 'water-sports-gear' ),
	'section' => 'water_sports_gear_related_post_options',
	'settings' => 'water_sports_gear_related_post_separator',
) ) );

// Post Options - Show / Hide Related Posts.
$wp_customize->add_setting(
	'water_sports_gear_post_hide_related_posts',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_post_hide_related_posts',
		array(
			'label'   => esc_html__( 'Show / Hide Related Posts', 'water-sports-gear' ),
			'section' => 'water_sports_gear_related_post_options',
		)
	)
);

// Register setting for number of related posts
$wp_customize->add_setting(
	'water_sports_gear_related_posts_count',
	array(
		'default'           => 3,
		'sanitize_callback' => 'absint', // Ensure it's an integer
	)
);

// Add control for number of related posts
$wp_customize->add_control(
	'water_sports_gear_related_posts_count',
	array(
		'type'        => 'number',
		'label'       => esc_html__( 'Number of Related Posts to Display', 'water-sports-gear' ),
		'section'     => 'water_sports_gear_related_post_options',
		'input_attrs' => array(
			'min'  => 1,
			'max'  => 5, // Adjust maximum based on your preference
			'step' => 1,
		),
	)
);

// Post Options - Related Post Label.
$wp_customize->add_setting(
	'water_sports_gear_post_related_post_label',
	array(
		'default'           => 'Related Posts',
		'sanitize_callback' => 'sanitize_text_field',
	)
);

$wp_customize->add_control(
	'water_sports_gear_post_related_post_label',
	array(
		'label'    => esc_html__( 'Related Posts Label', 'water-sports-gear' ),
		'section'  => 'water_sports_gear_related_post_options',
		'settings' => 'water_sports_gear_post_related_post_label',
		'type'     => 'text',
	)
);