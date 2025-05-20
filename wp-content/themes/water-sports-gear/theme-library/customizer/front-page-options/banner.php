<?php

/**
 * Banner Section
 *
 * @package water_sports_gear
 */

$wp_customize->add_section(
	'water_sports_gear_banner_section',
	array(
		'panel'    => 'water_sports_gear_front_page_options',
		'title'    => esc_html__( 'Banner Section', 'water-sports-gear' ),
		'priority' => 10,
	)
);

// Banner Section - Enable Section.
$wp_customize->add_setting(
	'water_sports_gear_enable_banner_section',
	array(
		'default'           => FALSE,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_enable_banner_section',
		array(
			'label'    => esc_html__( 'Enable Banner Section', 'water-sports-gear' ),
			'section'  => 'water_sports_gear_banner_section',
			'settings' => 'water_sports_gear_enable_banner_section',
		)
	)
);

if ( isset( $wp_customize->selective_refresh ) ) {
	$wp_customize->selective_refresh->add_partial(
		'water_sports_gear_enable_banner_section',
		array(
			'selector' => '#water_sports_gear_banner_section .section-link',
			'settings' => 'water_sports_gear_enable_banner_section',
		)
	);
}


// Banner Section - Banner Slider Content Type.
$wp_customize->add_setting(
	'water_sports_gear_banner_slider_content_type',
	array(
		'default'           => 'post',
		'sanitize_callback' => 'water_sports_gear_sanitize_select',
	)
);

$wp_customize->add_control(
	'water_sports_gear_banner_slider_content_type',
	array(
		'label'           => esc_html__( 'Select Banner Slider Content Type', 'water-sports-gear' ),
		'section'         => 'water_sports_gear_banner_section',
		'settings'        => 'water_sports_gear_banner_slider_content_type',
		'type'            => 'select',
		'active_callback' => 'water_sports_gear_is_banner_slider_section_enabled',
		'choices'         => array(
			'page' => esc_html__( 'Page', 'water-sports-gear' ),
			'post' => esc_html__( 'Post', 'water-sports-gear' ),
		),
	)
);

// Banner Slider Category Setting.
$wp_customize->add_setting('water_sports_gear_banner_slider_category', array(
	'default'           => 'slider',
	'sanitize_callback' => 'sanitize_text_field',
));

// Add custom control for Banner Slider Category with conditional visibility.
$wp_customize->add_control(new Water_Sports_Gear_Customize_Category_Dropdown_Control($wp_customize, 'water_sports_gear_banner_slider_category', array(
	'label'    => __('Select Banner Category', 'water-sports-gear'),
	'section'  => 'water_sports_gear_banner_section',
	'settings' => 'water_sports_gear_banner_slider_category',
	'active_callback' => function() use ($wp_customize) {
		return $wp_customize->get_setting('water_sports_gear_banner_slider_content_type')->value() === 'post';
	},
)));

for ( $water_sports_gear_i = 1; $water_sports_gear_i <= 3; $water_sports_gear_i++ ) {

	// Banner Section - Select Banner Post.
	$wp_customize->add_setting(
		'water_sports_gear_banner_slider_content_post_' . $water_sports_gear_i,
		array(
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'water_sports_gear_banner_slider_content_post_' . $water_sports_gear_i,
		array(
			/* translators: %d: Posts Count. */
			'label'           => sprintf( esc_html__( 'Select Post %d', 'water-sports-gear' ), $water_sports_gear_i ),
			'description'     => sprintf( esc_html__( 'Kindly :- Select a Post based on the category selected in the upper settings', 'water-sports-gear' ), $water_sports_gear_i ),
			'section'         => 'water_sports_gear_banner_section',
			'settings'        => 'water_sports_gear_banner_slider_content_post_' . $water_sports_gear_i,
			'active_callback' => 'water_sports_gear_is_banner_slider_section_and_content_type_post_enabled',
			'type'            => 'select',
			'choices'         => water_sports_gear_get_post_choices(),
		)
	);

	// Banner Section - Select Banner Page.
	$wp_customize->add_setting(
		'water_sports_gear_banner_slider_content_page_' . $water_sports_gear_i,
		array(
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'water_sports_gear_banner_slider_content_page_' . $water_sports_gear_i,
		array(
			/* translators: %d: Pages Count. */
			'label'           => sprintf( esc_html__( 'Select Page %d', 'water-sports-gear' ), $water_sports_gear_i ),
			'section'         => 'water_sports_gear_banner_section',
			'settings'        => 'water_sports_gear_banner_slider_content_page_' . $water_sports_gear_i,
			'active_callback' => 'water_sports_gear_is_banner_slider_section_and_content_type_page_enabled',
			'type'            => 'select',
			'choices'         => water_sports_gear_get_page_choices(),
		)
	);

	// Service Section - Services Icons.
	$wp_customize->add_setting(
		'water_sports_gear_about_left_image_1' . $water_sports_gear_i,
		array(
			'sanitize_callback' => 'water_sports_gear_sanitize_image',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Image_Control(
			$wp_customize,
			'water_sports_gear_about_left_image_1' . $water_sports_gear_i,
			array(
				/* translators: %d: Banner Image Count. */
				'label'           => sprintf( esc_html__( 'Banner Image %d', 'water-sports-gear' ), $water_sports_gear_i ),
				'section'         => 'water_sports_gear_banner_section',
				'settings'        => 'water_sports_gear_about_left_image_1' . $water_sports_gear_i,
				'active_callback' => 'water_sports_gear_is_banner_slider_section_enabled',
			)
		)
	);

	// Banner Section - Short Label.
	$wp_customize->add_setting(
		'water_sports_gear_banner_short_heading' . $water_sports_gear_i,
		array(
			'default'           => '',
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	$wp_customize->add_control(
		'water_sports_gear_banner_short_heading' . $water_sports_gear_i,
		array(
			'label'           => esc_html__( 'Banner Extra Heading', 'water-sports-gear' ),
			'section'         => 'water_sports_gear_banner_section',
			'settings'        => 'water_sports_gear_banner_short_heading' . $water_sports_gear_i,
			'active_callback' => 'water_sports_gear_is_banner_slider_section_enabled',
			'type'            => 'text',
		)
	);

	// Banner Section - Button Label.
	$wp_customize->add_setting(
		'water_sports_gear_banner_button_label_' . $water_sports_gear_i,
		array(
			'default'           => '',
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	$wp_customize->add_control(
		'water_sports_gear_banner_button_label_' . $water_sports_gear_i,
		array(
			/* translators: %d: Button Label Count. */
			'label'           => sprintf( esc_html__( 'Button Label %d', 'water-sports-gear' ), $water_sports_gear_i ),
			'section'         => 'water_sports_gear_banner_section',
			'settings'        => 'water_sports_gear_banner_button_label_' . $water_sports_gear_i,
			'type'            => 'text',
			'active_callback' => 'water_sports_gear_is_banner_slider_section_enabled',
		)
	);

	// Banner Section - Button Link.
	$wp_customize->add_setting(
		'water_sports_gear_banner_button_link_' . $water_sports_gear_i,
		array(
			'default'           => '',
			'sanitize_callback' => 'esc_url_raw',
		)
	);

	$wp_customize->add_control(
		'water_sports_gear_banner_button_link_' . $water_sports_gear_i,
		array(
			/* translators: %d: Button Link Count. */
			'label'           => sprintf( esc_html__( 'Button Link %d', 'water-sports-gear' ), $water_sports_gear_i ),
			'section'         => 'water_sports_gear_banner_section',
			'settings'        => 'water_sports_gear_banner_button_link_' . $water_sports_gear_i,
			'type'            => 'url',
			'active_callback' => 'water_sports_gear_is_banner_slider_section_enabled',
		)
	);
}