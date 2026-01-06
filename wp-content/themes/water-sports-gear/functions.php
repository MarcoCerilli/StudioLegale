<?php
/**
 * Water Sports Gear functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package water_sports_gear
 */

$water_sports_gear_theme_data = wp_get_theme();
if( ! defined( 'WATER_SPORTS_GEAR_THEME_VERSION' ) ) define ( 'WATER_SPORTS_GEAR_THEME_VERSION', $water_sports_gear_theme_data->get( 'Version' ) );
if( ! defined( 'WATER_SPORTS_GEAR_THEME_NAME' ) ) define( 'WATER_SPORTS_GEAR_THEME_NAME', $water_sports_gear_theme_data->get( 'Name' ) );
if( ! defined( 'WATER_SPORTS_GEAR_THEME_TEXTDOMAIN' ) ) define( 'WATER_SPORTS_GEAR_THEME_TEXTDOMAIN', $water_sports_gear_theme_data->get( 'TextDomain' ) );

if ( ! defined( 'WATER_SPORTS_GEAR_VERSION' ) ) {
	define( 'WATER_SPORTS_GEAR_VERSION', '1.0.0' );
}

if ( ! function_exists( 'water_sports_gear_setup' ) ) :
	
	function water_sports_gear_setup() {
		
		load_theme_textdomain( 'water-sports-gear', get_template_directory() . '/languages' );

		add_theme_support( 'woocommerce' );

		add_theme_support( 'automatic-feed-links' );
		
		add_theme_support( 'title-tag' );

		add_theme_support( 'post-thumbnails' );

		register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary', 'water-sports-gear' ),
				'social'  => esc_html__( 'Social', 'water-sports-gear' ),
			)
		);

		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
				'woocommerce',
			)
		);

		add_theme_support( 'post-formats', array(
			'image',
			'video',
			'gallery',
			'audio', 
		) );

		add_theme_support(
			'custom-background',
			apply_filters(
				'water_sports_gear_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		add_theme_support( 'customize-selective-refresh-widgets' );

		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);

		add_theme_support( 'align-wide' );

		add_theme_support( 'responsive-embeds' );
	}
endif;
add_action( 'after_setup_theme', 'water_sports_gear_setup' );

function water_sports_gear_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'water_sports_gear_content_width', 640 );
}
add_action( 'after_setup_theme', 'water_sports_gear_content_width', 0 );

function water_sports_gear_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'water-sports-gear' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'water-sports-gear' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title"><span>',
			'after_title'   => '</span></h2>',
		)
	);

	// Regsiter 4 footer widgets.
	$water_sports_gear_footer_widget_column = get_theme_mod('water_sports_gear_footer_widget_column','4');
	for ($water_sports_gear_i=1; $water_sports_gear_i<=$water_sports_gear_footer_widget_column; $water_sports_gear_i++) {
		register_sidebar( array(
			'name' => __( 'Footer  ', 'water-sports-gear' )  . $water_sports_gear_i,
			'id' => 'water-sports-gear-footer-widget-' . $water_sports_gear_i,
			'description' => __( 'The Footer Widget Area', 'water-sports-gear' )  . $water_sports_gear_i,
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget' => '</aside>',
			'before_title' => '<div class="widget-header"><h4 class="widget-title">',
			'after_title' => '</h4></div>',
		) );
	}
}
add_action( 'widgets_init', 'water_sports_gear_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function water_sports_gear_scripts() {
	// Append .min if SCRIPT_DEBUG is false.
	$min = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

	// Slick style.
	wp_enqueue_style( 'slick-style', get_template_directory_uri() . '/resource/css/slick' . $min . '.css', array(), '1.8.1' );

	// Fontawesome style.
	wp_enqueue_style( 'fontawesome-style', get_template_directory_uri() . '/resource/css/fontawesome' . $min . '.css', array(), '5.15.4' );

	// Main style.
	wp_enqueue_style( 'water-sports-gear-style', get_template_directory_uri() . '/style.css', array(), WATER_SPORTS_GEAR_VERSION );
	
	wp_style_add_data('water-sports-gear-style', 'rtl', 'replace');

	// Navigation script.
	wp_enqueue_script( 'water-sports-gear-navigation-script', get_template_directory_uri() . '/resource/js/navigation' . $min . '.js', array(), WATER_SPORTS_GEAR_VERSION, true );

	// Slick script.
	wp_enqueue_script( 'slick-script', get_template_directory_uri() . '/resource/js/slick' . $min . '.js', array( 'jquery' ), '1.8.1', true );

	// Custom script
	wp_enqueue_script( 'water-sports-gear-custom-script', get_template_directory_uri() . '/resource/js/custom.js', array( 'jquery' ), WATER_SPORTS_GEAR_VERSION, true );

	// Localize the sticky header setting
	$water_sports_gear_enable_sticky_header = get_theme_mod('water_sports_gear_enable_sticky_header', false);
	wp_localize_script( 'water-sports-gear-custom-script', 'stickyHeaderSettings', array(
		'isEnabled' => $water_sports_gear_enable_sticky_header,
	));

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	// Include the file.
	require_once get_theme_file_path( 'theme-library/function-files/wptt-webfont-loader.php' );

	// Load the webfont. font-family: "Jost", sans-serif;  font-family: "Bebas Neue", sans-serif;
	wp_enqueue_style(
		'jost',
		wptt_get_webfont_url( 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap' ),
		array(),
		'1.0'
	);

	wp_enqueue_style(
		'work-sans',
		wptt_get_webfont_url( 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap' ),
		array(),
		'1.0'
	);

	wp_enqueue_style(
		'bebas-neue',
		wptt_get_webfont_url( 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap' ),
		array(),
		'1.0'
	);

	wp_enqueue_style(
		'carter-one',
		wptt_get_webfont_url( 'https://fonts.googleapis.com/css2?family=Carter+One&display=swap' ),
		array(),
		'1.0'
	);

}
add_action( 'wp_enqueue_scripts', 'water_sports_gear_scripts' );

//Change number of products per page 
add_filter( 'loop_shop_per_page', 'water_sports_gear_products_per_page' );
function water_sports_gear_products_per_page( $cols ) {
  	return  get_theme_mod( 'water_sports_gear_products_per_page',9);
}

// Change number or products per row 
add_filter('loop_shop_columns', 'water_sports_gear_loop_columns');
	if (!function_exists('water_sports_gear_loop_columns')) {
	function water_sports_gear_loop_columns() {
		return get_theme_mod( 'water_sports_gear_products_per_row', 3 );
	}
}

// Featured Image Dimension
function water_sports_gear_blog_post_featured_image_dimension(){
	if(get_theme_mod('water_sports_gear_blog_post_featured_image_dimension') == 'custom' ) {
		return true;
	}
	return false;
}

/**
 * Include wptt webfont loader.
 */
require_once get_theme_file_path( 'theme-library/function-files/wptt-webfont-loader.php' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/theme-library/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/theme-library/function-files/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/theme-library/function-files/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/theme-library/customizer.php';

/**
 * Breadcrumb
 */
require get_template_directory() . '/theme-library/function-files/class-breadcrumb-trail.php';

/**
 * Getting Started
*/
require get_template_directory() . '/theme-library/getting-started/getting-started.php';

/**
 * Google Fonts
 */
require get_template_directory() . '/theme-library/function-files/google-fonts.php';

/**
 * Dynamic CSS
 */
require get_template_directory() . '/theme-library/dynamic-css.php';

/* Demo Import. */
add_action( 'init', 'water_sports_gear_load_theme_wizard' );
function water_sports_gear_load_theme_wizard() {
    require get_parent_theme_file_path( '/theme-wizard/config.php' );
}

/**
 * Customizer Settings Functions
*/
require get_template_directory() . '/theme-library/function-files/customizer-settings-functions.php';