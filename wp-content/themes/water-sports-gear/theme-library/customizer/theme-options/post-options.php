<?php

/**
 * Post Options
 *
 * @package water_sports_gear
 */

$wp_customize->add_section(
	'water_sports_gear_post_options',
	array(
		'title' => esc_html__( 'Post Options', 'water-sports-gear' ),
		'panel' => 'water_sports_gear_theme_options',
	)
);

// Post Options - Add Post Date Icon
$wp_customize->add_setting(
    'water_sports_gear_post_date_icon',
    array(
        'default' => 'far fa-clock', 
        'sanitize_callback' => 'sanitize_text_field',
        'capability' => 'edit_theme_options',
    )
);

$wp_customize->add_control(new Water_Sports_Gear_Icon_Control(
    $wp_customize, 
    'water_sports_gear_post_date_icon',
    array(
        'label'    => __('Add Date Icon','water-sports-gear'),
        'section'  => 'water_sports_gear_post_options',
        'iconset'  => 'fa',
    )
));

// Post Options - Show / Hide Date.
$wp_customize->add_setting(
	'water_sports_gear_post_hide_date',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_post_hide_date',
		array(
			'label'   => esc_html__( 'Show / Hide Date', 'water-sports-gear' ),
			'section' => 'water_sports_gear_post_options',
		)
	)
);

// Post Options - Add Post Author Icon
$wp_customize->add_setting(
    'water_sports_gear_post_author_icon',
    array(
        'default' => 'fas fa-user', 
        'sanitize_callback' => 'sanitize_text_field',
        'capability' => 'edit_theme_options',
    )
);

$wp_customize->add_control(new Water_Sports_Gear_Icon_Control(
    $wp_customize, 
    'water_sports_gear_post_author_icon',
    array(
        'label'    => __('Add Author Icon','water-sports-gear'),
        'section'  => 'water_sports_gear_post_options',
        'iconset'  => 'fa',
    )
));

// Post Options - Show / Hide Author.
$wp_customize->add_setting(
	'water_sports_gear_post_hide_author',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_post_hide_author',
		array(
			'label'   => esc_html__( 'Show / Hide Author', 'water-sports-gear' ),
			'section' => 'water_sports_gear_post_options',
		)
	)
);

// Post Options - Add Post Comments Icon
$wp_customize->add_setting(
    'water_sports_gear_post_comments_icon',
    array(
        'default' => 'fas fa-comments', 
        'sanitize_callback' => 'sanitize_text_field',
        'capability' => 'edit_theme_options',
    )
);

$wp_customize->add_control(new Water_Sports_Gear_Icon_Control(
    $wp_customize, 
    'water_sports_gear_post_comments_icon',
    array(
        'label'    => __('Add Comments Icon','water-sports-gear'),
        'section'  => 'water_sports_gear_post_options',
        'iconset'  => 'fa',
    )
));

// Post Options - Show / Hide Comments.
$wp_customize->add_setting(
	'water_sports_gear_post_hide_comments',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_post_hide_comments',
		array(
			'label'   => esc_html__( 'Show / Hide Comments', 'water-sports-gear' ),
			'section' => 'water_sports_gear_post_options',
		)
	)
);

// Post Options - Add Post Time Icon
$wp_customize->add_setting(
    'water_sports_gear_post_time_icon',
    array(
        'default' => 'fas fa-clock', 
        'sanitize_callback' => 'sanitize_text_field',
        'capability' => 'edit_theme_options',
    )
);

$wp_customize->add_control(new Water_Sports_Gear_Icon_Control(
    $wp_customize, 
    'water_sports_gear_post_time_icon',
    array(
        'label'    => __('Add Time Icon','water-sports-gear'),
        'section'  => 'water_sports_gear_post_options',
        'iconset'  => 'fa',
    )
));

// Post Options - Show / Hide Time.
$wp_customize->add_setting(
	'water_sports_gear_post_hide_time',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_post_hide_time',
		array(
			'label'   => esc_html__( 'Show / Hide Time', 'water-sports-gear' ),
			'section' => 'water_sports_gear_post_options',
		)
	)
);

// Post Options - Show / Hide Category.
$wp_customize->add_setting(
	'water_sports_gear_post_hide_category',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_post_hide_category',
		array(
			'label'   => esc_html__( 'Show / Hide Category', 'water-sports-gear' ),
			'section' => 'water_sports_gear_post_options',
		)
	)
);


// ---------------------------------------- Post layout ----------------------------------------------------

// Add Separator Custom Control
$wp_customize->add_setting( 'water_sports_gear_archive_layuout_separator', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_archive_layuout_separator', array(
	'label' => __( 'Archive/Blogs Layout Setting', 'water-sports-gear' ),
	'section' => 'water_sports_gear_post_options',
	'settings' => 'water_sports_gear_archive_layuout_separator',
)));

// Archive Layout - Column Layout.
$wp_customize->add_setting(
	'water_sports_gear_archive_column_layout',
	array(
		'default'           => 'column-1',
		'sanitize_callback' => 'water_sports_gear_sanitize_select',
	)
);

$wp_customize->add_control(
	'water_sports_gear_archive_column_layout',
	array(
		'label'   => esc_html__( 'Select Posts Layout', 'water-sports-gear' ),
		'section' => 'water_sports_gear_post_options',
		'type'    => 'select',
		'choices' => array(
			'column-1' => __( 'Column 1', 'water-sports-gear' ),
			'column-2' => __( 'Column 2', 'water-sports-gear' ),
			'column-3' => __( 'Column 3', 'water-sports-gear' ),
		),
	)
);

$wp_customize->add_setting('water_sports_gear_blog_layout_option_setting',array(
	'default' => 'Left',
	'sanitize_callback' => 'water_sports_gear_sanitize_choices'
  ));
  $wp_customize->add_control(new Water_Sports_Gear_Image_Radio_Control($wp_customize, 'water_sports_gear_blog_layout_option_setting', array(
	'type' => 'select',
	'label' => __('Blog Content Alignment','water-sports-gear'),
	'section' => 'water_sports_gear_post_options',
	'choices' => array(
		'Left' => esc_url(get_template_directory_uri()).'/resource/img/layout-2.png',
		'Default' => esc_url(get_template_directory_uri()).'/resource/img/layout-1.png',
		'Right' => esc_url(get_template_directory_uri()).'/resource/img/layout-3.png',
))));

// Add Separator Custom Control
$wp_customize->add_setting( 'water_sports_gear_readmore_separators', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_readmore_separators', array(
	'label' => __( 'Read More Button Settings', 'water-sports-gear' ),
	'section' => 'water_sports_gear_post_options',
	'settings' => 'water_sports_gear_readmore_separators',
)));


// Post Options - Show / Hide Read More Button.
$wp_customize->add_setting(
	'water_sports_gear_post_readmore_button',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_post_readmore_button',
		array(
			'label'   => esc_html__( 'Show / Hide Read More Button', 'water-sports-gear' ),
			'section' => 'water_sports_gear_post_options',
		)
	)
);

$wp_customize->add_setting(
    'water_sports_gear_readmore_btn_icon',
    array(
        'default' => 'fas fa-chevron-right', // Set default icon here
        'sanitize_callback' => 'sanitize_text_field',
        'capability' => 'edit_theme_options',
    )
);

$wp_customize->add_control(new Water_Sports_Gear_Icon_Control(
    $wp_customize, 
    'water_sports_gear_readmore_btn_icon',
    array(
        'label'    => __('Read More Icon','water-sports-gear'),
        'section'  => 'water_sports_gear_post_options',
        'iconset'  => 'fa',
    )
));

$wp_customize->add_setting(
	'water_sports_gear_readmore_button_text',
	array(
		'default'           => 'Read More',
		'sanitize_callback' => 'sanitize_text_field',
	)
);

$wp_customize->add_control(
	'water_sports_gear_readmore_button_text',
	array(
		'label'           => esc_html__( 'Read More Button Text', 'water-sports-gear' ),
		'section'         => 'water_sports_gear_post_options',
		'settings'        => 'water_sports_gear_readmore_button_text',
		'type'            => 'text',
	)
);

// Featured Image Dimension
$wp_customize->add_setting(
	'water_sports_gear_blog_post_featured_image_dimension',
	array(
		'default' => 'default',
		'sanitize_callback' => 'water_sports_gear_sanitize_choices'
	)
);

$wp_customize->add_control(
	'water_sports_gear_blog_post_featured_image_dimension', 
	array(
		'type' => 'select',
		'label' => __('Featured Image Dimension','water-sports-gear'),
		'section' => 'water_sports_gear_post_options',
		'choices' => array(
			'default' => __('Default','water-sports-gear'),
			'custom' => __('Custom Image Size','water-sports-gear'),
		),
		'description' => __('Note: If you select "Custom Image Size", you can set a custom width and height up to 950px.', 'water-sports-gear')
	)
);
 
// Featured Image Custom Width
$wp_customize->add_setting(
	'water_sports_gear_blog_post_featured_image_custom_width',
	array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	)
);

$wp_customize->add_control(
	'water_sports_gear_blog_post_featured_image_custom_width',
	array(
		'label'	=> __('Featured Image Custom Width','water-sports-gear'),
		'section'=> 'water_sports_gear_post_options',
		'type'=> 'text',
		'input_attrs' => array(
			'placeholder' => __( '300', 'water-sports-gear' ),
		),
		'active_callback' => 'water_sports_gear_blog_post_featured_image_dimension'
	)
);

// Featured Image Custom Height
$wp_customize->add_setting(
	'water_sports_gear_blog_post_featured_image_custom_height',
	array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	)
);

$wp_customize->add_control(
	'water_sports_gear_blog_post_featured_image_custom_height',
	array(
		'label'	=> __('Featured Image Custom Height','water-sports-gear'),
		'section'=> 'water_sports_gear_post_options',
		'type'=> 'text',
		'input_attrs' => array(
			'placeholder' => __( '300', 'water-sports-gear' ),
		),
		'active_callback' => 'water_sports_gear_blog_post_featured_image_dimension'
	)
);