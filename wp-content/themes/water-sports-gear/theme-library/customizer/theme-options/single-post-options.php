<?php

/**
 * Single Post Options
 *
 * @package water_sports_gear
 */

$wp_customize->add_section(
	'water_sports_gear_single_post_options',
	array(
		'title' => esc_html__( 'Single Post Options', 'water-sports-gear' ),
		'panel' => 'water_sports_gear_theme_options',
	)
);


// Post Options - Show / Hide Date.
$wp_customize->add_setting(
	'water_sports_gear_single_post_hide_date',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_single_post_hide_date',
		array(
			'label'   => esc_html__( 'Show / Hide Date', 'water-sports-gear' ),
			'section' => 'water_sports_gear_single_post_options',
		)
	)
);

// Post Options - Show / Hide Author.
$wp_customize->add_setting(
	'water_sports_gear_single_post_hide_author',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_single_post_hide_author',
		array(
			'label'   => esc_html__( 'Show / Hide Author', 'water-sports-gear' ),
			'section' => 'water_sports_gear_single_post_options',
		)
	)
);

// Post Options - Show / Hide Comments.
$wp_customize->add_setting(
	'water_sports_gear_single_post_hide_comments',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_single_post_hide_comments',
		array(
			'label'   => esc_html__( 'Show / Hide Comments', 'water-sports-gear' ),
			'section' => 'water_sports_gear_single_post_options',
		)
	)
);

// Post Options - Show / Hide Time.
$wp_customize->add_setting(
	'water_sports_gear_single_post_hide_time',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_single_post_hide_time',
		array(
			'label'   => esc_html__( 'Show / Hide Time', 'water-sports-gear' ),
			'section' => 'water_sports_gear_single_post_options',
		)
	)
);

// Post Options - Show / Hide Category.
$wp_customize->add_setting(
	'water_sports_gear_single_post_hide_category',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_single_post_hide_category',
		array(
			'label'   => esc_html__( 'Show / Hide Category', 'water-sports-gear' ),
			'section' => 'water_sports_gear_single_post_options',
		)
	)
);

// Post Options - Show / Hide Tag.
$wp_customize->add_setting(
	'water_sports_gear_post_hide_tags',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_post_hide_tags',
		array(
			'label'   => esc_html__( 'Show / Hide Tag', 'water-sports-gear' ),
			'section' => 'water_sports_gear_single_post_options',
		)
	)
);

// Post Options - Comment Title.
$wp_customize->add_setting(
	'water_sports_gear_blog_post_comment_title',
	array(
		'default'=> 'Leave a Reply',
		'sanitize_callback'	=> 'sanitize_text_field'
	)
);

$wp_customize->add_control(
	'water_sports_gear_blog_post_comment_title',
	array(
		'label'	=> __('Comment Title','water-sports-gear'),
		'input_attrs' => array(
			'placeholder' => __( 'Leave a Reply', 'water-sports-gear' ),
		),
		'section'=> 'water_sports_gear_single_post_options',
		'type'=> 'text'
	)
);