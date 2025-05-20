<?php

/**
 * Color Option
 *
 * @package water_sports_gear
 */

// Primary Color.
    // Add setting for primary color
    $wp_customize->add_setting(
        'primary_color',
        array(
            'default'           => '#00326E',
            'sanitize_callback' => 'sanitize_hex_color',
        )
    );

    // Add control for primary color
    $wp_customize->add_control(
        new WP_Customize_Color_Control(
            $wp_customize,
            'primary_color',
            array(
                'label'    => __( 'Primary Color', 'water-sports-gear' ),
                'section'  => 'colors',
                'settings' => 'primary_color',
                'priority' => 5,
            )
        )
    );