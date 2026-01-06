<?php

/**
 * WooCommerce Settings
 *
 * @package water_sports_gear
 */

$wp_customize->add_section(
	'water_sports_gear_woocommerce_settings',
	array(
		'panel' => 'water_sports_gear_theme_options',
		'title' => esc_html__( 'WooCommerce Settings', 'water-sports-gear' ),
	)
);

//WooCommerce - Products per page.
$wp_customize->add_setting( 'water_sports_gear_products_per_page', array(
    'default'           => 9,
    'sanitize_callback' => 'absint',
));

$wp_customize->add_control( 'water_sports_gear_products_per_page', array(
    'type'        => 'number',
    'section'     => 'water_sports_gear_woocommerce_settings',
    'label'       => __( 'Products Per Page', 'water-sports-gear' ),
    'input_attrs' => array(
        'min'  => 0,
        'max'  => 50,
        'step' => 1,
    ),
));

//WooCommerce - Products per row.
$wp_customize->add_setting( 'water_sports_gear_products_per_row', array(
    'default'           => '3',
    'sanitize_callback' => 'water_sports_gear_sanitize_choices',
) );

$wp_customize->add_control( 'water_sports_gear_products_per_row', array(
    'label'    => __( 'Products Per Row', 'water-sports-gear' ),
    'section'  => 'water_sports_gear_woocommerce_settings',
    'settings' => 'water_sports_gear_products_per_row',
    'type'     => 'select',
    'choices'  => array(
        '2' => '2',
		'3' => '3',
		'4' => '4',
    ),
) );

//WooCommerce - Show / Hide Related Product.
$wp_customize->add_setting(
	'water_sports_gear_related_product_show_hide',
	array(
		'default'           => true,
		'sanitize_callback' => 'water_sports_gear_sanitize_switch',
	)
);

$wp_customize->add_control(
	new Water_Sports_Gear_Toggle_Switch_Custom_Control(
		$wp_customize,
		'water_sports_gear_related_product_show_hide',
		array(
			'label'   => esc_html__( 'Show / Hide Related product', 'water-sports-gear' ),
			'section' => 'water_sports_gear_woocommerce_settings',
		)
	)
);

//WooCommerce - Product Sale Position.
$wp_customize->add_setting(
	'water_sports_gear_product_sale_position', 
	array(
		'default' => 'left',
		'sanitize_callback' => 'sanitize_text_field',
	)
);

$wp_customize->add_control(
	'water_sports_gear_product_sale_position', 
	array(
		'label' => __('Product Sale Position', 'water-sports-gear'),
		'section' => 'water_sports_gear_woocommerce_settings',
		'settings' => 'water_sports_gear_product_sale_position',
		'type' => 'radio',
		'choices' => 
	array(
		'left' => __('Left', 'water-sports-gear'),
		'right' => __('Right', 'water-sports-gear'),
	),
));