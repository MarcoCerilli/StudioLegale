<?php
/**
 * 404 page Customizer settings
 *
 * @package water_sports_gear
 */

/*=========================================
404 Page Section
=========================================*/
$wp_customize->add_section(
    '404_pg_options', array(
        'title' => esc_html__('404 Page', 'water-sports-gear'),
        'panel' => 'water_sports_gear_theme_options',
    )
);

$wp_customize->add_setting( 'water_sports_gear_404_separators', array(
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Water_Sports_Gear_Separator_Custom_Control( $wp_customize, 'water_sports_gear_404_separators', array(
	'label' => __( '4040 Page Settings', 'water-sports-gear' ),
	'section' => '404_pg_options',
	'settings' => 'water_sports_gear_404_separators',
)));

// Title
$wp_customize->add_setting(
    'water_sports_gear_pg_404_ttl', array(
        'default'           => __('404 Page Not Found', 'water-sports-gear'),
        'capability'        => 'edit_theme_options',
        'sanitize_callback' => 'sanitize_text_field',
    )
);

$wp_customize->add_control(
    'water_sports_gear_pg_404_ttl', array(
        'label'   => __('404 Page Title', 'water-sports-gear'),
        'section' => '404_pg_options',
        'type'    => 'text',
    )
);

// Image
$wp_customize->add_setting(
    'water_sports_gear_pg_404_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    )
);

$wp_customize->add_control(new WP_Customize_Image_Control(
    $wp_customize, 'water_sports_gear_pg_404_image', array(
        'label'    => __('404 Page Image', 'water-sports-gear'),
        'section'  => '404_pg_options',
        'settings' => 'water_sports_gear_pg_404_image',
    )
));

// Text
$wp_customize->add_setting(
    'water_sports_gear_pg_404_text', array(
        'default'           => __('Apologies, but the page you are seeking cannot be found.', 'water-sports-gear'),
        'sanitize_callback' => 'sanitize_textarea_field',
    )
);

$wp_customize->add_control(
    'water_sports_gear_pg_404_text', array(
        'label'    => __('404 Page Text', 'water-sports-gear'),
        'section' => '404_pg_options',
        'settings' => 'water_sports_gear_pg_404_text',
        'type'     => 'textarea',
    )
);

// Button Label
$wp_customize->add_setting(
    'water_sports_gear_pg_404_btn_lbl', array(
        'default'           => __('Go Back Home', 'water-sports-gear'),
        'sanitize_callback' => 'sanitize_text_field',
    )
);

$wp_customize->add_control(
    'water_sports_gear_pg_404_btn_lbl', array(
        'label'    => __('404 Button Label', 'water-sports-gear'),
        'section' => '404_pg_options',
        'settings' => 'water_sports_gear_pg_404_btn_lbl',
    )
);

// Button Link
$wp_customize->add_setting(
    'water_sports_gear_pg_404_btn_link', array(
        'default'           => esc_url(home_url('/')),
        'sanitize_callback' => 'esc_url_raw',
    )
);

$wp_customize->add_control(
    'water_sports_gear_pg_404_btn_link', array(
        'label'    => __('404 Button Link', 'water-sports-gear'),
        'section' => '404_pg_options',
        'settings' => 'water_sports_gear_pg_404_btn_link',
    )
);
?>
