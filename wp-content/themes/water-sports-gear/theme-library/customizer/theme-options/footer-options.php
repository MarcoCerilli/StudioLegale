<?php

/**
 * Footer Options
 *
 * @package water_sports_gear
 */

$wp_customize->add_section(
	'water_sports_gear_footer_options',
	array(
		'panel' => 'water_sports_gear_theme_options',
		'title' => esc_html__( 'Footer Options', 'water-sports-gear' ),
	)
);


// Add Separator Custom Control
$wp_customize->add_setting( 'water_sports_gear_footer_separators', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_footer_separators', array(
	'label' => __( 'Footer Settings', 'water-sports-gear' ),
	'section' => 'water_sports_gear_footer_options',
	'settings' => 'water_sports_gear_footer_separators',
)));

// Footer Section - Enable Section.
$wp_customize->add_setting(
	'water_sports_gear_enable_footer_section',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_enable_footer_section',
		array(
			'label'    => esc_html__( 'Show / Hide Footer', 'water-sports-gear' ),
			'section'  => 'water_sports_gear_footer_options',
			'settings' => 'water_sports_gear_enable_footer_section',
		)
	)
);


// column // 
$wp_customize->add_setting(
	'water_sports_gear_footer_widget_column',
	array(
        'default'			=> '4',
		'capability'     	=> 'edit_theme_options',
		'sanitize_callback' => 'water_sports_gear_sanitize_select',
		
	)
);	

$wp_customize->add_control(
	'water_sports_gear_footer_widget_column',
	array(
	    'label'   		=> __('Select Widget Column','water-sports-gear'),
		'description' => __('Note: Default footer widgets are shown. Add your preferred widgets in (Appearance > Widgets > Footer) to see changes.', 'water-sports-gear'),	
	    'section' 		=> 'water_sports_gear_footer_options',
		'type'			=> 'select',
		'choices'        => 
		array(
			'' => __( 'None', 'water-sports-gear' ),
			'1' => __( '1 Column', 'water-sports-gear' ),
			'2' => __( '2 Column', 'water-sports-gear' ),
			'3' => __( '3 Column', 'water-sports-gear' ),
			'4' => __( '4 Column', 'water-sports-gear' )
		) 
	) 
);

//  BG Color // 
$wp_customize->add_setting('water_sports_gear_footer_background_color_setting', array(
    'default' => '',
    'sanitize_callback' => 'sanitize_hex_color',
));

$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'water_sports_gear_footer_background_color_setting', array(
    'label' => __('Footer Background Color', 'water-sports-gear'),
    'section' => 'water_sports_gear_footer_options',
)));

// Footer Background Image Setting
$wp_customize->add_setting('water_sports_gear_footer_background_image_setting', array(
    'default' => '',
    'sanitize_callback' => 'esc_url_raw',
));

$wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'water_sports_gear_footer_background_image_setting', array(
    'label' => __('Footer Background Image', 'water-sports-gear'),
    'section' => 'water_sports_gear_footer_options',
)));

// Footer Background Attachment
$wp_customize->add_setting(
	'water_sports_gear_footer_image_attachment_setting',
	array(
		'default'=> 'scroll',
		'sanitize_callback' => 'water_sports_gear_sanitize_choices'
	)
);

$wp_customize->add_control(
	'water_sports_gear_footer_image_attachment_setting',
	array(
		'type' => 'select',
		'label' => __('Footer Background Attatchment','water-sports-gear'),
		'choices' => array(
			'fixed' => __('fixed','water-sports-gear'),
			'scroll' => __('scroll','water-sports-gear'),
		),
		'section'=> 'water_sports_gear_footer_options',
  	)
);

$wp_customize->add_setting( 'water_sports_gear_scroll_top_position', array(
    'default'           => 'bottom-right',
    'sanitize_callback' => 'water_sports_gear_sanitize_scroll_top_position',
) );

$wp_customize->add_setting('water_sports_gear_footer_text_transform', array(
    'default' => 'none',
    'sanitize_callback' => 'sanitize_text_field',
));

// Add Footer Text Transform Control
$wp_customize->add_control('water_sports_gear_footer_text_transform', array(
    'label' => __('Footer Heading Text Transform', 'water-sports-gear'),
    'section' => 'water_sports_gear_footer_options',
    'settings' => 'water_sports_gear_footer_text_transform',
    'type' => 'select',
    'choices' => array(
        'none' => __('None', 'water-sports-gear'),
        'capitalize' => __('Capitalize', 'water-sports-gear'),
        'uppercase' => __('Uppercase', 'water-sports-gear'),
        'lowercase' => __('Lowercase', 'water-sports-gear'),
    ),
));

// Add control for Scroll Top Button Position
$wp_customize->add_control( 'water_sports_gear_scroll_top_position', array(
    'label'    => __( 'Scroll Top Button Position', 'water-sports-gear' ),
    'section'  => 'water_sports_gear_footer_options',
    'settings' => 'water_sports_gear_scroll_top_position',
    'type'     => 'select',
    'choices'  => array(
        'bottom-right' => __( 'Bottom Right', 'water-sports-gear' ),
        'bottom-left'  => __( 'Bottom Left', 'water-sports-gear' ),
        'bottom-center'=> __( 'Bottom Center', 'water-sports-gear' ),
    ),
) );

$wp_customize->add_setting(
	'water_sports_gear_footer_copyright_text',
	array(
		'sanitize_callback' => 'wp_kses_post',
		'transport'         => 'refresh',
	)
);

$wp_customize->add_control(
	'water_sports_gear_footer_copyright_text',
	array(
		'label'    => esc_html__( 'Copyright Text', 'water-sports-gear' ),
		'section'  => 'water_sports_gear_footer_options',
		'settings' => 'water_sports_gear_footer_copyright_text',
		'type'     => 'textarea',
	)
);

//Copyright Alignment
$wp_customize->add_setting(
	'water_sports_gear_footer_bottom_align',
	array(
		'default' 			=> 'center',
		'sanitize_callback' => 'sanitize_text_field'
	)
);

$wp_customize->add_control(
	'water_sports_gear_footer_bottom_align',
	array(
		'label' => __('Copyright Alignment ','water-sports-gear'),
		'section' => 'water_sports_gear_footer_options',
		'type'			=> 'select',
		'choices' => 
		array(
			'left' => __('Left','water-sports-gear'),
			'right' => __('Right','water-sports-gear'),
			'center' => __('Center','water-sports-gear'),
		),
	)
);

// Add Separator Custom Control
$wp_customize->add_setting( 'water_sports_gear_scroll_separators', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_scroll_separators', array(
	'label' => __( 'Scroll Top Settings', 'water-sports-gear' ),
	'section' => 'water_sports_gear_footer_options',
	'settings' => 'water_sports_gear_scroll_separators',
)));


// Footer Options - Scroll Top.
$wp_customize->add_setting(
	'water_sports_gear_scroll_top',
	array(
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
		'default'           => true,
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_scroll_top',
		array(
			'label'   => esc_html__( 'Enable Scroll Top Button', 'water-sports-gear' ),
			'section' => 'water_sports_gear_footer_options',
		)
	)
);

// icon // 
$wp_customize->add_setting(
	'water_sports_gear_scroll_btn_icon',
	array(
        'default' => 'fas fa-chevron-up',
		'sanitize_callback' => 'sanitize_text_field',
		'capability' => 'edit_theme_options',
		
	)
);	

$wp_customize->add_control(new Water_Sports_Gear_Icon_Control($wp_customize, 
	'water_sports_gear_scroll_btn_icon',
	array(
	    'label'   		=> __('Scroll Top Icon','water-sports-gear'),
	    'section' 		=> 'water_sports_gear_footer_options',
		'iconset' => 'fa',
	))
);

$wp_customize->add_setting( 'water_sports_gear_scroll_top_position', array(
    'default'           => 'bottom-right',
    'sanitize_callback' => 'water_sports_gear_sanitize_scroll_top_position',
) );

// Add control for Scroll Top Button Position
$wp_customize->add_control( 'water_sports_gear_scroll_top_position', array(
    'label'    => __( 'Scroll Top Button Position', 'water-sports-gear' ),
    'section'  => 'water_sports_gear_footer_options',
    'settings' => 'water_sports_gear_scroll_top_position',
    'type'     => 'select',
    'choices'  => array(
        'bottom-right' => __( 'Bottom Right', 'water-sports-gear' ),
        'bottom-left'  => __( 'Bottom Left', 'water-sports-gear' ),
        'bottom-center'=> __( 'Bottom Center', 'water-sports-gear' ),
    ),
));

$wp_customize->add_setting( 'water_sports_gear_scroll_top_shape', array(
	'default'           => 'box',
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( 'water_sports_gear_scroll_top_shape', array(
	'label'    => __( 'Scroll to Top Button Shape', 'water-sports-gear' ),
	'section'  => 'water_sports_gear_footer_options',
	'settings' => 'water_sports_gear_scroll_top_shape',
	'type'     => 'radio',
	'choices'  => array(
		'box'        => __( 'Box', 'water-sports-gear' ),
		'curved-box' => __( 'Curved Box', 'water-sports-gear' ),
		'circle'     => __( 'Circle', 'water-sports-gear' ),
	),
) );