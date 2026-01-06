<?php

/**
 * Choose Us Section
 *
 * @package water_sports_gear
 */

$wp_customize->add_section(
	'water_sports_gear_services_section',
	array(
		'panel'    => 'water_sports_gear_front_page_options',
		'title'    => esc_html__( 'Choose Us Section', 'water-sports-gear' ),
		'priority' => 10,
	)
);

// Choose Us Section - Enable Section.
$wp_customize->add_setting(
	'water_sports_gear_enable_service_section',
	array(
		'default'           => false,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_enable_service_section',
		array(
			'label'    => esc_html__( 'Enable Choose Us Section', 'water-sports-gear' ),
			'section'  => 'water_sports_gear_services_section',
			'settings' => 'water_sports_gear_enable_service_section',
		)
	)
);

if ( isset( $wp_customize->selective_refresh ) ) {
	$wp_customize->selective_refresh->add_partial(
		'water_sports_gear_enable_service_section',
		array(
			'selector' => '#water_sports_gear_service_section .section-link',
			'settings' => 'water_sports_gear_enable_service_section',
		)
	);
}

// Choose Us Section - Button Label.
$wp_customize->add_setting(
	'water_sports_gear_trending_product_heading',
	array(
		'default'           => '',
		'sanitize_callback' => 'sanitize_text_field',
	)
);

$wp_customize->add_control(
	'water_sports_gear_trending_product_heading',
	array(
		'label'           => esc_html__( 'Heading', 'water-sports-gear' ),
		'section'         => 'water_sports_gear_services_section',
		'settings'        => 'water_sports_gear_trending_product_heading',
		'type'            => 'text',
		'active_callback' => 'water_sports_gear_is_service_section_enabled',
	)
);

// Choose Us Section - Content Type.
$wp_customize->add_setting(
	'water_sports_gear_service_content_type',
	array(
		'default'           => 'post',
		'sanitize_callback' => 'water_sports_gear_sanitize_select',
	)
);

$wp_customize->add_control(
	'water_sports_gear_service_content_type',
	array(
		'label'           => esc_html__( 'Select Content Type', 'water-sports-gear' ),
		'section'         => 'water_sports_gear_services_section',
		'settings'        => 'water_sports_gear_service_content_type',
		'type'            => 'select',
		'active_callback' => 'water_sports_gear_is_service_section_enabled',
		'choices'         => array(
			'page' => esc_html__( 'Page', 'water-sports-gear' ),
			'post' => esc_html__( 'Post', 'water-sports-gear' ),
		),
	)
);

// Services Category Setting.
$wp_customize->add_setting('water_sports_gear_services_category', array(
	'default'           => 'services',
	'sanitize_callback' => 'sanitize_text_field',
));

// Add custom control for Services Category with conditional visibility.
$wp_customize->add_control(new Water_Sports_Gear_Customize_Category_Dropdown_Control($wp_customize, 'water_sports_gear_services_category', array(
	'label'    => __('Select Services Category', 'water-sports-gear'),
	'section'  => 'water_sports_gear_services_section',
	'settings' => 'water_sports_gear_services_category',
	'active_callback' => function() use ($wp_customize) {
		return $wp_customize->get_setting('water_sports_gear_service_content_type')->value() === 'post';
	},
)));

for ( $water_sports_gear_i = 1; $water_sports_gear_i <= 6; $water_sports_gear_i++ ) {

	// Choose Us Section - Select Post.
	$wp_customize->add_setting(
		'water_sports_gear_service_content_post_' . $water_sports_gear_i,
		array(
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'water_sports_gear_service_content_post_' . $water_sports_gear_i,
		array(
			'label'           => esc_html__( 'Select Post ', 'water-sports-gear' ) . $water_sports_gear_i,
			'description'     => sprintf( esc_html__( 'Kindly :- Select a Post based on the category selected in the upper settings', 'water-sports-gear' ), $water_sports_gear_i ),
			'section'         => 'water_sports_gear_services_section',
			'settings'        => 'water_sports_gear_service_content_post_' . $water_sports_gear_i,
			'active_callback' => 'water_sports_gear_is_service_section_and_content_type_post_enabled',
			'type'            => 'select',
			'choices'         => water_sports_gear_get_post_choices(),
		)
	);

	// Choose Us Section - Select Page.
	$wp_customize->add_setting(
		'water_sports_gear_service_content_page_' . $water_sports_gear_i,
		array(
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'water_sports_gear_service_content_page_' . $water_sports_gear_i,
		array(
			'label'           => esc_html__( 'Select Page ', 'water-sports-gear' ) . $water_sports_gear_i,
			'section'         => 'water_sports_gear_services_section',
			'settings'        => 'water_sports_gear_service_content_page_' . $water_sports_gear_i,
			'active_callback' => 'water_sports_gear_is_service_section_and_content_type_page_enabled',
			'type'            => 'select',
			'choices'         => water_sports_gear_get_page_choices(),
		)
	);
}
