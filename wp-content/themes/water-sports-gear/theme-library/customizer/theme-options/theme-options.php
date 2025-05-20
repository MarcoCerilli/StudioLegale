<?php

/**
 * Header Options
 *
 * @package water_sports_gear
 */

// General Options
$wp_customize->add_section(
	'water_sports_gear_general_options',
	array(
		'panel' => 'water_sports_gear_theme_options',
		'title' => esc_html__( 'General Options', 'water-sports-gear' ),
	)
);

// Add Separator Custom Control
$wp_customize->add_setting( 'water_sports_gear_preloader_separator', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_preloader_separator', array(
	'label' => __( 'Enable / Disable Site Preloader Section', 'water-sports-gear' ),
	'section' => 'water_sports_gear_general_options',
	'settings' => 'water_sports_gear_preloader_separator',
) ) );

// General Options - Enable Preloader.
$wp_customize->add_setting(
	'water_sports_gear_enable_preloader',
	array(
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
		'default'           => false,
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_enable_preloader',
		array(
			'label'   => esc_html__( 'Enable Preloader', 'water-sports-gear' ),
			'section' => 'water_sports_gear_general_options',
		)
	)
);

// Preloader Style Setting
$wp_customize->add_setting(
    'water_sports_gear_preloader_style',
    array(
        'default'           => 'style1',
        'sanitize_callback' => 'sanitize_text_field',
    )
);

$wp_customize->add_control(
    'water_sports_gear_preloader_style',
    array(
        'type'     => 'select',
        'label'    => esc_html__('Select Preloader Styles', 'water-sports-gear'),
		'active_callback' => 'water_sports_gear_is_preloader_style',
        'section'  => 'water_sports_gear_general_options',
        'choices'  => array(
            'style1' => esc_html__('Style 1', 'water-sports-gear'),
            'style2' => esc_html__('Style 2', 'water-sports-gear'),
            'style3' => esc_html__('Style 3', 'water-sports-gear'),
        ),
    )
);

// ---------------------------------------- PAGINATION ----------------------------------------------------


// Add Separator Custom Control
$wp_customize->add_setting( 'water_sports_gear_pagination_separator', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_pagination_separator', array(
	'label' => __( 'Enable / Disable Pagination Section', 'water-sports-gear' ),
	'section' => 'water_sports_gear_general_options',
	'settings' => 'water_sports_gear_pagination_separator',
) ) );


// Pagination - Enable Pagination.
$wp_customize->add_setting(
	'water_sports_gear_enable_pagination',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_enable_pagination',
		array(
			'label'    => esc_html__( 'Enable Pagination', 'water-sports-gear' ),
			'section'  => 'water_sports_gear_general_options',
			'settings' => 'water_sports_gear_enable_pagination',
			'type'     => 'checkbox',
		)
	)
);

// Pagination - Pagination Type.
$wp_customize->add_setting(
	'water_sports_gear_pagination_type',
	array(
		'default'           => 'default',
		'sanitize_callback' => 'water_sports_gear_sanitize_select',
	)
);

$wp_customize->add_control(
	'water_sports_gear_pagination_type',
	array(
		'label'           => esc_html__( 'Pagination Type', 'water-sports-gear' ),
		'section'         => 'water_sports_gear_general_options',
		'settings'        => 'water_sports_gear_pagination_type',
		'active_callback' => 'water_sports_gear_is_pagination_enabled',
		'type'            => 'select',
		'choices'         => array(
			'default' => __( 'Default (Older/Newer)', 'water-sports-gear' ),
			'numeric' => __( 'Numeric', 'water-sports-gear' ),
		),
	)
);

// ---------------------------------------- BREADCRUMB ----------------------------------------------------


// Add Separator Custom Control
$wp_customize->add_setting( 'water_sports_gear_breadcrumb_separators', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_breadcrumb_separators', array(
	'label' => __( 'Enable / Disable Breadcrumb Section', 'water-sports-gear' ),
	'section' => 'water_sports_gear_general_options',
	'settings' => 'water_sports_gear_breadcrumb_separators',
)));

// Breadcrumb - Enable Breadcrumb.
$wp_customize->add_setting(
	'water_sports_gear_enable_breadcrumb',
	array(
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
		'default'           => true,
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_enable_breadcrumb',
		array(
			'label'   => esc_html__( 'Enable Breadcrumb', 'water-sports-gear' ),
			'section' => 'water_sports_gear_general_options',
		)
	)
);

// Breadcrumb - Separator.
$wp_customize->add_setting(
	'water_sports_gear_breadcrumb_separator',
	array(
		'sanitize_callback' => 'sanitize_text_field',
		'default'           => '/',
	)
);

$wp_customize->add_control(
	'water_sports_gear_breadcrumb_separator',
	array(
		'label'           => esc_html__( 'Separator', 'water-sports-gear' ),
		'active_callback' => 'water_sports_gear_is_breadcrumb_enabled',
		'section'         => 'water_sports_gear_general_options',
	)
);



// ---------------------------------------- Website layout ----------------------------------------------------


// Add Separator Custom Control
$wp_customize->add_setting( 'water_sports_gear_layuout_separator', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new water_sports_gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_layuout_separator', array(
	'label' => __( 'Website Layout Setting', 'water-sports-gear' ),
	'section' => 'water_sports_gear_general_options',
	'settings' => 'water_sports_gear_layuout_separator',
)));


$wp_customize->add_setting(
	'water_sports_gear_website_layout',
	array(
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
		'default'           => false,
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_website_layout',
		array(
			'label'   => esc_html__('Boxed Layout', 'water-sports-gear'),
			'section' => 'water_sports_gear_general_options',
		)
	)
);


$wp_customize->add_setting('water_sports_gear_layout_width_margin', array(
	'default'           => 50,
	'sanitize_callback' => 'water_sports_gear_sanitize_range_value',
));

$wp_customize->add_control(new Water_Sports_Gear_Customize_Range_Control($wp_customize, 'water_sports_gear_layout_width_margin', array(
		'label'       => __('Set Width', 'water-sports-gear'),
		'description' => __('Adjust the width around the website layout by moving the slider. Use this setting to customize the appearance of your site to fit your design preferences.', 'water-sports-gear'),
		'section'     => 'water_sports_gear_general_options',
		'settings'    => 'water_sports_gear_layout_width_margin',
		'active_callback' => 'water_sports_gear_is_layout_enabled',
		'input_attrs' => array(
			'min'  => 0,
			'max'  => 130,
			'step' => 1,
		),
)));


// ---------------------------------------- HEADER OPTIONS ----------------------------------------------------	

// Header Options
$wp_customize->add_section(
	'water_sports_gear_header_options',
	array(
		'panel' => 'water_sports_gear_theme_options',
		'title' => esc_html__( 'Header Options', 'water-sports-gear' ),
	)
);

// Add setting for sticky header
$wp_customize->add_setting(
	'water_sports_gear_enable_sticky_header',
	array(
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
		'default'           => false,
	)
);

// Add control for sticky header setting
$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_enable_sticky_header',
		array(
			'label'   => esc_html__( 'Enable Sticky Header', 'water-sports-gear' ),
			'section' => 'water_sports_gear_header_options',
		)
	)
);

// Banner Section - Enable Section.
$wp_customize->add_setting(
	'water_sports_gear_enable_header_search_section',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_enable_header_search_section',
		array(
			'label'    => esc_html__( 'Enable Search Section', 'water-sports-gear' ),
			'section'  => 'water_sports_gear_header_options',
			'settings' => 'water_sports_gear_enable_header_search_section',
		)
	)
);

// Banner Section - Button Label.
$wp_customize->add_setting(
	'water_sports_gear_header_button_label_',
	array(
		'default'           => '',
		'sanitize_callback' => 'sanitize_text_field',
	)
);

$wp_customize->add_control(
	'water_sports_gear_header_button_label_',
	array(
		'label'           => esc_html__( 'Button Label', 'water-sports-gear'  ),
		'section'         => 'water_sports_gear_header_options',
		'settings'        => 'water_sports_gear_header_button_label_',
		'type'            => 'text',
	)
);

// Banner Section - Button Link.
$wp_customize->add_setting(
	'water_sports_gear_banner_button_link_',
	array(
		'default'           => '',
		'sanitize_callback' => 'esc_url_raw',
	)
);

$wp_customize->add_control(
	'water_sports_gear_banner_button_link_',
	array(
		'label'           => esc_html__( 'Button Link', 'water-sports-gear' ),
		'section'         => 'water_sports_gear_header_options',
		'settings'        => 'water_sports_gear_banner_button_link_',
		'type'            => 'url',
	)
);

// Add Separator Custom Control
$wp_customize->add_setting( 'water_sports_gear_menu_separator', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_menu_separator', array(
	'label' => __( 'Menu Settings', 'water-sports-gear' ),
	'section' => 'water_sports_gear_header_options',
	'settings' => 'water_sports_gear_menu_separator',
))); 

$wp_customize->add_setting( 'water_sports_gear_menu_font_size', array(
    'default'           => 16,
    'sanitize_callback' => 'absint',
) );

// Add control for site title size
$wp_customize->add_control( 'water_sports_gear_menu_font_size', array(
    'type'        => 'number',
    'section'     => 'water_sports_gear_header_options',
    'label'       => __( 'Menu Font Size ', 'water-sports-gear' ),
    'input_attrs' => array(
        'min'  => 10,
        'max'  => 100,
        'step' => 1,
    ),
));

$wp_customize->add_setting( 'water_sports_gear_menu_text_transform', array(
    'default'           => 'capitalize', // Default value for text transform
    'sanitize_callback' => 'sanitize_text_field',
) );

// Add control for menu text transform
$wp_customize->add_control( 'water_sports_gear_menu_text_transform', array(
    'type'     => 'select',
    'section'  => 'water_sports_gear_header_options', // Adjust the section as needed
    'label'    => __( 'Menu Text Transform', 'water-sports-gear' ),
    'choices'  => array(
        'none'       => __( 'None', 'water-sports-gear' ),
        'capitalize' => __( 'Capitalize', 'water-sports-gear' ),
        'uppercase'  => __( 'Uppercase', 'water-sports-gear' ),
        'lowercase'  => __( 'Lowercase', 'water-sports-gear' ),
    ),
) );

// Menu Text Color 
$wp_customize->add_setting(
	'water_sports_gear_menu_text_color', 
	array(
		'default' => '',
		'sanitize_callback' => 'sanitize_hex_color',
	)
);

$wp_customize->add_control(
	new WP_Customize_Color_Control(
		$wp_customize, 
		'water_sports_gear_menu_text_color', 
		array(
			'label' => __('Menu Color', 'water-sports-gear'),
			'section' => 'water_sports_gear_header_options',
		)
	)
);

// Sub Menu Text Color 
$wp_customize->add_setting(
	'water_sports_gear_sub_menu_text_color', 
	array(
		'default' => '',
		'sanitize_callback' => 'sanitize_hex_color',
	)
);

$wp_customize->add_control(
	new WP_Customize_Color_Control(
		$wp_customize, 
		'water_sports_gear_sub_menu_text_color', 
		array(
			'label' => __('Sub Menu Color', 'water-sports-gear'),
			'section' => 'water_sports_gear_header_options',
		)
	)
);

// ----------------------------------------SITE IDENTITY---------------------------------------------------



// Site Logo - Enable Setting.
$wp_customize->add_setting(
	'water_sports_gear_enable_site_logo',
	array(
		'default'           => true, // Default is to display the logo.
		'sanitize_callback' => 'water_sports_gear_sanitize_switch', // Sanitize using a custom switch function.
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_enable_site_logo',
		array(
			'label'    => esc_html__( 'Enable Site Logo', 'water-sports-gear' ),
			'section'  => 'title_tagline', // Section to add this control.
			'settings' => 'water_sports_gear_enable_site_logo',
		)
	)
);

// Site Title - Enable Setting.
$wp_customize->add_setting(
	'water_sports_gear_enable_site_title_setting',
	array(
		'default'           => false,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_enable_site_title_setting',
		array(
			'label'    => esc_html__( 'Enable Site Title', 'water-sports-gear' ),
			'section'  => 'title_tagline',
			'settings' => 'water_sports_gear_enable_site_title_setting',
		)
	)
);

$wp_customize->add_setting( 'water_sports_gear_site_title_size', array(
    'default'           => 30, // Default font size in pixels
    'sanitize_callback' => 'absint', // Sanitize the input as a positive integer
) );

// Add control for site title size
$wp_customize->add_control( 'water_sports_gear_site_title_size', array(
    'type'        => 'number',
    'section'     => 'title_tagline', // You can change this section to your preferred section
    'label'       => __( 'Site Title Font Size ', 'water-sports-gear' ),
    'input_attrs' => array(
        'min'  => 10,
        'max'  => 100,
        'step' => 1,
    ),
) );

// Tagline - Enable Setting.
$wp_customize->add_setting(
	'water_sports_gear_enable_tagline_setting',
	array(
		'default'           => false,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_enable_tagline_setting',
		array(
			'label'    => esc_html__( 'Enable Tagline', 'water-sports-gear' ),
			'section'  => 'title_tagline',
			'settings' => 'water_sports_gear_enable_tagline_setting',
		)
	)
);

$wp_customize->add_setting('water_sports_gear_site_logo_width', array(
    'default'           => 200,
    'sanitize_callback' => 'water_sports_gear_sanitize_range_value',
));

$wp_customize->add_control(new Water_Sports_Gear_Customize_Range_Control($wp_customize, 'water_sports_gear_site_logo_width', array(
    'label'       => __('Adjust Site Logo Width', 'water-sports-gear'),
    'description' => __('This setting controls the Width of Site Logo', 'water-sports-gear'),
    'section'     => 'title_tagline',
    'settings'    => 'water_sports_gear_site_logo_width',
    'input_attrs' => array(
        'min'  => 0,
        'max'  => 400,
        'step' => 5,
    ),
)));