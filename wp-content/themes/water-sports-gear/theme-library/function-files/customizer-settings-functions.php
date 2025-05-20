<?php

/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package water_sports_gear
 */

function water_sports_gear_customize_css() {
    ?>
    <style type="text/css">
        :root {
            --primary-color: <?php echo esc_html( get_theme_mod( 'primary_color', '#00326E' ) ); ?>;
        }
    </style>
    <?php
}
add_action( 'wp_head', 'water_sports_gear_customize_css' );

// Retrieve the slider visibility setting
$water_sports_gear_slider = get_theme_mod('water_sports_gear_enable_banner_section', false);

// Function to output custom CSS directly in the head section
function water_sports_gear_custom_css() {
    global $water_sports_gear_slider;
    if ($water_sports_gear_slider == true) {
        echo '<style type="text/css">
            .home header.site-header .header-main-wrapper .bottom-header-outer-wrapper .bottom-header-part {
                position: absolute;
	            border-bottom: none !important;
                background: transparent;
            }
        </style>';
    }
}

// Hook the function into the wp_head action
add_action('wp_head', 'water_sports_gear_custom_css');

function water_sports_gear_enqueue_selected_fonts() {
    $water_sports_gear_fonts_url = water_sports_gear_get_fonts_url();
    if (!empty($water_sports_gear_fonts_url)) {
        wp_enqueue_style('water-sports-gear-google-fonts', $water_sports_gear_fonts_url, array(), null);
    }
}
add_action('wp_enqueue_scripts', 'water_sports_gear_enqueue_selected_fonts');

function water_sports_gear_layout_customizer_css() {
    $water_sports_gear_margin = get_theme_mod('water_sports_gear_layout_width_margin', 50);
    ?>
    <style type="text/css">
        body.site-boxed--layout #page  {
            margin: 0 <?php echo esc_attr($water_sports_gear_margin); ?>px;
        }
    </style>
    <?php
}
add_action('wp_head', 'water_sports_gear_layout_customizer_css');

function water_sports_gear_blog_layout_customizer_css() {
    // Retrieve the blog layout option
    $water_sports_gear_blog_layout_option = get_theme_mod('water_sports_gear_blog_layout_option_setting', 'Left');

    // Initialize custom CSS variable
    $water_sports_gear_custom_css = '';

    // Generate custom CSS based on the layout option
    if ($water_sports_gear_blog_layout_option === 'Default') {
        $water_sports_gear_custom_css .= '.mag-post-detail { text-align: center; }';
    } elseif ($water_sports_gear_blog_layout_option === 'Left') {
        $water_sports_gear_custom_css .= '.mag-post-detail { text-align: left; }';
    } elseif ($water_sports_gear_blog_layout_option === 'Right') {
        $water_sports_gear_custom_css .= '.mag-post-detail { text-align: right; }';
    }

    // Output the combined CSS
    ?>
    <style type="text/css">
        <?php echo wp_kses($water_sports_gear_custom_css, array( 'style' => array(), 'text-align' => array() )); ?>
    </style>
    <?php
}
add_action('wp_head', 'water_sports_gear_blog_layout_customizer_css');

// Featured Image Dimension
function water_sports_gear_custom_featured_image_css() {
    $water_sports_gear_dimension = get_theme_mod('water_sports_gear_blog_post_featured_image_dimension', 'default');
    $water_sports_gear_width = get_theme_mod('water_sports_gear_blog_post_featured_image_custom_width', '');
    $water_sports_gear_height = get_theme_mod('water_sports_gear_blog_post_featured_image_custom_height', '');
    
    if ($water_sports_gear_dimension === 'custom' && $water_sports_gear_width && $water_sports_gear_height) {
        $water_sports_gear_custom_css = "body:not(.single-post) .mag-post-single .mag-post-img img { width: {$water_sports_gear_width}px !important; height: {$water_sports_gear_height}px !important; }";
        wp_add_inline_style('water-sports-gear-style', $water_sports_gear_custom_css);
    }
}
add_action('wp_enqueue_scripts', 'water_sports_gear_custom_featured_image_css');

function water_sports_gear_sidebar_width_customizer_css() {
    $water_sports_gear_sidebar_width = get_theme_mod('water_sports_gear_sidebar_width', '30');
    ?>
    <style type="text/css">
        .right-sidebar .asterthemes-wrapper .asterthemes-page {
            grid-template-columns: auto <?php echo esc_attr($water_sports_gear_sidebar_width); ?>%;
        }
        .left-sidebar .asterthemes-wrapper .asterthemes-page {
            grid-template-columns: <?php echo esc_attr($water_sports_gear_sidebar_width); ?>% auto;
        }
    </style>
    <?php
}
add_action('wp_head', 'water_sports_gear_sidebar_width_customizer_css');

if ( ! function_exists( 'water_sports_gear_get_page_title' ) ) {
    function water_sports_gear_get_page_title() {
        $water_sports_gear_title = '';

        if (is_404()) {
            $water_sports_gear_title = esc_html__('Page Not Found', 'water-sports-gear');
        } elseif (is_search()) {
            $water_sports_gear_title = esc_html__('Search Results for: ', 'water-sports-gear') . esc_html(get_search_query());
        } elseif (is_home() && !is_front_page()) {
            $water_sports_gear_title = esc_html__('Blogs', 'water-sports-gear');
        } elseif (function_exists('is_shop') && is_shop()) {
            $water_sports_gear_title = esc_html__('Shop', 'water-sports-gear');
        } elseif (is_page()) {
            $water_sports_gear_title = get_the_title();
        } elseif (is_single()) {
            $water_sports_gear_title = get_the_title();
        } elseif (is_archive()) {
            $water_sports_gear_title = get_the_archive_title();
        } else {
            $water_sports_gear_title = get_the_archive_title();
        }

        return apply_filters('water_sports_gear_page_title', $water_sports_gear_title);
    }
}

if ( ! function_exists( 'water_sports_gear_has_page_header' ) ) {
    function water_sports_gear_has_page_header() {
        // Default to true (display header)
        $water_sports_gear_return = true;

        // Custom conditions for disabling the header
        if ('hide-all-devices' === get_theme_mod('water_sports_gear_page_header_visibility', 'all-devices')) {
            $water_sports_gear_return = false;
        }

        // Apply filters and return
        return apply_filters('water_sports_gear_display_page_header', $water_sports_gear_return);
    }
}

if ( ! function_exists( 'water_sports_gear_page_header_style' ) ) {
    function water_sports_gear_page_header_style() {
        $water_sports_gear_style = get_theme_mod('water_sports_gear_page_header_style', 'default');
        return apply_filters('water_sports_gear_page_header_style', $water_sports_gear_style);
    }
}

function water_sports_gear_page_title_customizer_css() {
    $water_sports_gear_layout_option = get_theme_mod('water_sports_gear_page_header_layout', 'left');
    ?>
    <style type="text/css">
        .asterthemes-wrapper.page-header-inner {
            <?php if ($water_sports_gear_layout_option === 'flex') : ?>
                display: flex;
                justify-content: space-between;
                align-items: center;
            <?php else : ?>
                text-align: <?php echo esc_attr($water_sports_gear_layout_option); ?>;
            <?php endif; ?>
        }
    </style>
    <?php
}
add_action('wp_head', 'water_sports_gear_page_title_customizer_css');

function water_sports_gear_pagetitle_height_css() {
    $water_sports_gear_height = get_theme_mod('water_sports_gear_pagetitle_height', 50);
    ?>
    <style type="text/css">
        header.page-header {
            padding: <?php echo esc_attr($water_sports_gear_height); ?>px 0;
        }
    </style>
    <?php
}
add_action('wp_head', 'water_sports_gear_pagetitle_height_css');

function water_sports_gear_site_logo_width() {
    $water_sports_gear_site_logo_width = get_theme_mod('water_sports_gear_site_logo_width', 200);
    ?>
    <style type="text/css">
        .site-logo img {
            max-width: <?php echo esc_attr($water_sports_gear_site_logo_width); ?>px;
        }
    </style>
    <?php
}
add_action('wp_head', 'water_sports_gear_site_logo_width');

function water_sports_gear_menu_font_size_css() {
    $water_sports_gear_menu_font_size = get_theme_mod('water_sports_gear_menu_font_size', 16);
    ?>
    <style type="text/css">
        .main-navigation a {
            font-size: <?php echo esc_attr($water_sports_gear_menu_font_size); ?>px;
        }
    </style>
    <?php
}
add_action('wp_head', 'water_sports_gear_menu_font_size_css');

function water_sports_gear_sidebar_widget_font_size_css() {
    $water_sports_gear_sidebar_widget_font_size = get_theme_mod('water_sports_gear_sidebar_widget_font_size', 24);
    ?>
    <style type="text/css">
        h2.wp-block-heading,aside#secondary .widgettitle,aside#secondary .widget-title {
            font-size: <?php echo esc_attr($water_sports_gear_sidebar_widget_font_size); ?>px;
        }
    </style>
    <?php
}
add_action('wp_head', 'water_sports_gear_sidebar_widget_font_size_css');

// Woocommerce Related Products Settings
function water_sports_gear_related_product_css() {
    $water_sports_gear_related_product_show_hide = get_theme_mod('water_sports_gear_related_product_show_hide', true);

    if ( $water_sports_gear_related_product_show_hide != true) {
        ?>
        <style type="text/css">
            .related.products {
                display: none;
            }
        </style>
        <?php
    }
}
add_action('wp_head', 'water_sports_gear_related_product_css');

// Woocommerce Product Sale Position 
function water_sports_gear_product_sale_position_customizer_css() {
    $water_sports_gear_layout_option = get_theme_mod('water_sports_gear_product_sale_position', 'left');
    ?>
    <style type="text/css">
        .woocommerce ul.products li.product .onsale {
            <?php if ($water_sports_gear_layout_option === 'left') : ?>
                right: auto;
                left: 0px;
            <?php else : ?>
                left: auto;
                right: 0px;
            <?php endif; ?>
        }
    </style>
    <?php
}
add_action('wp_head', 'water_sports_gear_product_sale_position_customizer_css'); 

//Copyright Alignment
function water_sports_gear_footer_copyright_alignment_css() {
    $water_sports_gear_footer_bottom_align = get_theme_mod( 'water_sports_gear_footer_bottom_align', 'center' );   
    ?>
    <style type="text/css">
        .site-footer .site-footer-bottom .site-footer-bottom-wrapper {
            justify-content: <?php echo esc_attr( $water_sports_gear_footer_bottom_align ); ?> 
        }

        /* Mobile Specific */
        @media screen and (max-width: 575px) {
            .site-footer .site-footer-bottom .site-footer-bottom-wrapper {
                justify-content: center;
                text-align:center;
            }
        }
    </style>
    <?php
}
add_action( 'wp_head', 'water_sports_gear_footer_copyright_alignment_css' );