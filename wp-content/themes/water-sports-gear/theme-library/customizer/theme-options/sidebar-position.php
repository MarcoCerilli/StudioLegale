<?php

/**
 * Sidebar Position
 *
 * @package water_sports_gear
 */

$wp_customize->add_section(
	'water_sports_gear_sidebar_position',
	array(
		'title' => esc_html__( 'Sidebar Position', 'water-sports-gear' ),
		'panel' => 'water_sports_gear_theme_options',
	)
);

// Add Separator Custom Control
$wp_customize->add_setting( 'water_sports_gear_global_sidebar_separator', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_global_sidebar_separator', array(
	'label' => __( 'Global Sidebar Position', 'water-sports-gear' ),
	'section' => 'water_sports_gear_sidebar_position',
	'settings' => 'water_sports_gear_global_sidebar_separator',
)));

// Sidebar Position - Global Sidebar Position.
$wp_customize->add_setting(
	'water_sports_gear_sidebar_position',
	array(
		'sanitize_callback' => 'water_sports_gear_sanitize_select',
		'default'           => 'right-sidebar',
	)
);

$wp_customize->add_control(
	'water_sports_gear_sidebar_position',
	array(
		'label'   => esc_html__( 'Select Sidebar Position', 'water-sports-gear' ),
		'section' => 'water_sports_gear_sidebar_position',
		'type'    => 'select',
		'choices' => array(
			'right-sidebar' => esc_html__( 'Right Sidebar', 'water-sports-gear' ),
			'left-sidebar'  => esc_html__( 'Left Sidebar', 'water-sports-gear' ),
			'no-sidebar'    => esc_html__( 'No Sidebar', 'water-sports-gear' ),
		),
	)
);

// Add Separator Custom Control
$wp_customize->add_setting( 'water_sports_gear_post_sidebar_separator', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_post_sidebar_separator', array(
	'label' => __( 'Post Sidebar Position', 'water-sports-gear' ),
	'section' => 'water_sports_gear_sidebar_position',
	'settings' => 'water_sports_gear_post_sidebar_separator',
)));

// Sidebar Position - Post Sidebar Position.
$wp_customize->add_setting(
	'water_sports_gear_post_sidebar_position',
	array(
		'sanitize_callback' => 'water_sports_gear_sanitize_select',
		'default'           => 'right-sidebar',
	)
);

$wp_customize->add_control(
	'water_sports_gear_post_sidebar_position',
	array(
		'label'   => esc_html__( 'Select Sidebar Position', 'water-sports-gear' ),
		'section' => 'water_sports_gear_sidebar_position',
		'type'    => 'select',
		'choices' => array(
			'right-sidebar' => esc_html__( 'Right Sidebar', 'water-sports-gear' ),
			'left-sidebar'  => esc_html__( 'Left Sidebar', 'water-sports-gear' ),
			'no-sidebar'    => esc_html__( 'No Sidebar', 'water-sports-gear' ),
		),
	)
);

// Add Separator Custom Control
$wp_customize->add_setting( 'water_sports_gear_page_sidebar_separator', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_page_sidebar_separator', array(
	'label' => __( 'Page Sidebar Position', 'water-sports-gear' ),
	'section' => 'water_sports_gear_sidebar_position',
	'settings' => 'water_sports_gear_page_sidebar_separator',
)));


// Sidebar Position - Page Sidebar Position.
$wp_customize->add_setting(
	'water_sports_gear_page_sidebar_position',
	array(
		'sanitize_callback' => 'water_sports_gear_sanitize_select',
		'default'           => 'right-sidebar',
	)
);

$wp_customize->add_control(
	'water_sports_gear_page_sidebar_position',
	array(
		'label'   => esc_html__( 'Select Sidebar Position', 'water-sports-gear' ),
		'section' => 'water_sports_gear_sidebar_position',
		'type'    => 'select',
		'choices' => array(
			'right-sidebar' => esc_html__( 'Right Sidebar', 'water-sports-gear' ),
			'left-sidebar'  => esc_html__( 'Left Sidebar', 'water-sports-gear' ),
			'no-sidebar'    => esc_html__( 'No Sidebar', 'water-sports-gear' ),
		),
	)
);


// Add Separator Custom Control
$wp_customize->add_setting( 'water_sports_gear_sidebar_width_separator', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_sidebar_width_separator', array(
	'label' => __( 'Sidebar Width Setting', 'water-sports-gear' ),
	'section' => 'water_sports_gear_sidebar_position',
	'settings' => 'water_sports_gear_sidebar_width_separator',
)));


$wp_customize->add_setting( 'water_sports_gear_sidebar_width', array(
	'default'           => '30',
	'sanitize_callback' => 'water_sports_gear_sanitize_range_value',
) );

$wp_customize->add_control(new Water_Sports_Gear_Customize_Range_Control($wp_customize, 'water_sports_gear_sidebar_width', array(
	'section'     => 'water_sports_gear_sidebar_position',
	'label'       => __( 'Adjust Sidebar Width', 'water-sports-gear' ),
	'description' => __( 'Adjust the width of the sidebar.', 'water-sports-gear' ),
	'input_attrs' => array(
		'min'  => 10,
		'max'  => 50,
		'step' => 1,
	),
)));

$wp_customize->add_setting( 'water_sports_gear_sidebar_widget_font_size', array(
    'default'           => 24,
    'sanitize_callback' => 'absint',
) );

// Add control for site title size
$wp_customize->add_control( 'water_sports_gear_sidebar_widget_font_size', array(
    'type'        => 'number',
    'section'     => 'water_sports_gear_sidebar_position',
    'label'       => __( 'Sidebar Widgets Heading Font Size ', 'water-sports-gear' ),
    'input_attrs' => array(
        'min'  => 10,
        'max'  => 100,
        'step' => 1,
    ),
));