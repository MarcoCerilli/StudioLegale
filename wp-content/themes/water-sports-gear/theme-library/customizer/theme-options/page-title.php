<?php

/**
 * Pige Title Options
 *
 * @package water_sports_gear
 */



$wp_customize->add_section(
	'water_sports_gear_page_title_options',
	array(
		'panel' => 'water_sports_gear_theme_options',
		'title' => esc_html__( 'Page Title', 'water-sports-gear' ),
	)
);

$wp_customize->add_setting(
    'water_sports_gear_page_header_visibility',
    array(
        'default'           => 'all-devices',
        'sanitize_callback' => 'water_sports_gear_sanitize_select',
    )
);

$wp_customize->add_control(
    new WP_Customize_Control(
        $wp_customize,
        'water_sports_gear_page_header_visibility',
        array(
            'label'    => esc_html__( 'Page Header Visibility', 'water-sports-gear' ),
            'type'     => 'select',
            'section'  => 'water_sports_gear_page_title_options',
            'settings' => 'water_sports_gear_page_header_visibility',
            'priority' => 10,
            'choices'  => array(
                'all-devices'        => esc_html__( 'Show on all devices', 'water-sports-gear' ),
                'hide-tablet'        => esc_html__( 'Hide on Tablet', 'water-sports-gear' ),
                'hide-mobile'        => esc_html__( 'Hide on Mobile', 'water-sports-gear' ),
                'hide-tablet-mobile' => esc_html__( 'Hide on Tablet & Mobile', 'water-sports-gear' ),
                'hide-all-devices'   => esc_html__( 'Hide on all devices', 'water-sports-gear' ),
            ),
        )
    )
);


$wp_customize->add_setting( 'water_sports_gear_page_title_background_separator', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_page_title_background_separator', array(
	'label' => __( 'Page Title BG Image & Color Setting', 'water-sports-gear' ),
	'section' => 'water_sports_gear_page_title_options',
	'settings' => 'water_sports_gear_page_title_background_separator',
)));


$wp_customize->add_setting(
	'water_sports_gear_page_header_style',
	array(
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
		'default'           => False,
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_page_header_style',
		array(
			'label'   => esc_html__('Page Title Background Image', 'water-sports-gear'),
			'section' => 'water_sports_gear_page_title_options',
		)
	)
);

$wp_customize->add_setting( 'water_sports_gear_page_header_background_image', array(
    'default' => '',
    'sanitize_callback' => 'esc_url_raw',
) );

$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'water_sports_gear_page_header_background_image', array(
    'label'    => __( 'Background Image', 'water-sports-gear' ),
    'section'  => 'water_sports_gear_page_title_options',
    'description' => __('Choose either a background image or a color. If a background image is selected, the background color will not be visible.', 'water-sports-gear'),
    'settings' => 'water_sports_gear_page_header_background_image',
	'active_callback' => 'water_sports_gear_is_pagetitle_bcakground_image_enabled',
)));


$wp_customize->add_setting('water_sports_gear_page_header_image_height', array(
	'default'           => 200,
	'sanitize_callback' => 'water_sports_gear_sanitize_range_value',
));

$wp_customize->add_control(new Water_Sports_Gear_Customize_Range_Control($wp_customize, 'water_sports_gear_page_header_image_height', array(
		'label'       => __('Image Height', 'water-sports-gear'),
		'section'     => 'water_sports_gear_page_title_options',
		'settings'    => 'water_sports_gear_page_header_image_height',
		'active_callback' => 'water_sports_gear_is_pagetitle_bcakground_image_enabled',
		'input_attrs' => array(
			'min'  => 0,
			'max'  => 1000,
			'step' => 5,
		),
)));


$wp_customize->add_setting('water_sports_gear_page_title_background_color_setting', array(
    'default' => '#f5f5f5',
    'sanitize_callback' => 'sanitize_hex_color',
));

$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'water_sports_gear_page_title_background_color_setting', array(
    'label' => __('Page Title Background Color', 'water-sports-gear'),
    'section' => 'water_sports_gear_page_title_options',
)));

$wp_customize->add_setting('water_sports_gear_pagetitle_height', array(
    'default'           => 50,
    'sanitize_callback' => 'water_sports_gear_sanitize_range_value',
));

$wp_customize->add_control(new Water_Sports_Gear_Customize_Range_Control($wp_customize, 'water_sports_gear_pagetitle_height', array(
    'label'       => __('Set Height', 'water-sports-gear'),
    'description' => __('This setting controls the page title height when no background image is set. If a background image is set, this setting will not apply.', 'water-sports-gear'),
    'section'     => 'water_sports_gear_page_title_options',
    'settings'    => 'water_sports_gear_pagetitle_height',
    'input_attrs' => array(
        'min'  => 0,
        'max'  => 300,
        'step' => 5,
    ),
)));

$wp_customize->add_setting( 'water_sports_gear_page_title_style_separator', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_page_title_style_separator', array(
	'label' => __( 'Page Title Styling Setting', 'water-sports-gear' ),
	'section' => 'water_sports_gear_page_title_options',
	'settings' => 'water_sports_gear_page_title_style_separator',
)));


$wp_customize->add_setting( 'water_sports_gear_page_header_heading_tag', array(
	'default'   => 'h1',
	'sanitize_callback' => 'water_sports_gear_sanitize_select',
) );

$wp_customize->add_control( 'water_sports_gear_page_header_heading_tag', array(
	'label'   => __( 'Page Title Heading Tag', 'water-sports-gear' ),
	'section' => 'water_sports_gear_page_title_options',
	'type'    => 'select',
	'choices' => array(
		'h1' => __( 'H1', 'water-sports-gear' ),
		'h2' => __( 'H2', 'water-sports-gear' ),
		'h3' => __( 'H3', 'water-sports-gear' ),
		'h4' => __( 'H4', 'water-sports-gear' ),
		'h5' => __( 'H5', 'water-sports-gear' ),
		'h6' => __( 'H6', 'water-sports-gear' ),
		'p' => __( 'p', 'water-sports-gear' ),
		'a' => __( 'a', 'water-sports-gear' ),
		'div' => __( 'div', 'water-sports-gear' ),
		'span' => __( 'span', 'water-sports-gear' ),
	),
) );



$wp_customize->add_setting('water_sports_gear_page_header_layout', array(
	'default' => 'left',
	'sanitize_callback' => 'sanitize_text_field',
));

$wp_customize->add_control('water_sports_gear_page_header_layout', array(
	'label' => __('Style', 'water-sports-gear'),
	'section' => 'water_sports_gear_page_title_options',
	'description' => __('"Flex Layout Style" wont work below 600px (mobile media)', 'water-sports-gear'),
	'settings' => 'water_sports_gear_page_header_layout',
	'type' => 'radio',
	'choices' => array(
		'left' => __('Classic', 'water-sports-gear'),
		'right' => __('Aligned Right', 'water-sports-gear'),
		'center' => __('Centered Focus', 'water-sports-gear'),
		'flex' => __('Flex Layout', 'water-sports-gear'),
	),
));