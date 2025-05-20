<?php

/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package water_sports_gear
 */

function water_sports_gear_body_classes( $water_sports_gear_classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$water_sports_gear_classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$water_sports_gear_classes[] = 'no-sidebar';
	}

	$water_sports_gear_classes[] = water_sports_gear_sidebar_layout();

	return $water_sports_gear_classes;
}
add_filter( 'body_class', 'water_sports_gear_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function water_sports_gear_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'water_sports_gear_pingback_header' );


/**
 * Get all posts for customizer Post content type.
 */
function water_sports_gear_get_post_choices() {
	$water_sports_gear_choices = array( '' => esc_html__( '--Select--', 'water-sports-gear' ) );
	$water_sports_gear_args    = array( 'numberposts' => -1 );
	$water_sports_gear_posts   = get_posts( $water_sports_gear_args );

	foreach ( $water_sports_gear_posts as $post ) {
		$id             = $post->ID;
		$water_sports_gear_title          = $post->post_title;
		$water_sports_gear_choices[ $id ] = $water_sports_gear_title;
	}

	return $water_sports_gear_choices;
}


/**
 * Get all pages for customizer Page content type.
 */
function water_sports_gear_get_page_choices() {
	$water_sports_gear_choices = array( '' => esc_html__( '--Select--', 'water-sports-gear' ) );
	$water_sports_gear_pages   = get_pages();

	foreach ( $water_sports_gear_pages as $water_sports_gear_page ) {
		$water_sports_gear_choices[ $water_sports_gear_page->ID ] = $water_sports_gear_page->post_title;
	}

	return $water_sports_gear_choices;
}

/**
 * Get all categories for customizer Category content type.
 */
function water_sports_gear_get_post_cat_choices() {
	$water_sports_gear_choices = array( '' => esc_html__( '--Select--', 'water-sports-gear' ) );
	$water_sports_gear_cats    = get_categories();

	foreach ( $water_sports_gear_cats as $water_sports_gear_cat ) {
		$water_sports_gear_choices[ $water_sports_gear_cat->term_id ] = $water_sports_gear_cat->name;
	}

	return $water_sports_gear_choices;
}

/**
 * Get all donation forms for customizer form content type.
 */
function water_sports_gear_get_post_donation_form_choices() {
	$water_sports_gear_choices = array( '' => esc_html__( '--Select--', 'water-sports-gear' ) );
	$water_sports_gear_posts   = get_posts(
		array(
			'post_type'   => 'give_forms',
			'numberposts' => -1,
		)
	);
	foreach ( $water_sports_gear_posts as $water_sports_gear_post ) {
		$water_sports_gear_choices[ $water_sports_gear_post->ID ] = $water_sports_gear_post->post_title;
	}
	return $water_sports_gear_choices;
}

if ( ! function_exists( 'water_sports_gear_excerpt_length' ) ) :
	/**
	 * Excerpt length.
	 */
	function water_sports_gear_excerpt_length( $water_sports_gear_length ) {
		if ( is_admin() ) {
			return $water_sports_gear_length;
		}

		return get_theme_mod( 'water_sports_gear_excerpt_length', 20 );
	}
endif;
add_filter( 'excerpt_length', 'water_sports_gear_excerpt_length', 999 );

if ( ! function_exists( 'water_sports_gear_excerpt_more' ) ) :
	/**
	 * Excerpt more.
	 */
	function water_sports_gear_excerpt_more( $water_sports_gear_more ) {
		if ( is_admin() ) {
			return $water_sports_gear_more;
		}

		return '&hellip;';
	}
endif;
add_filter( 'excerpt_more', 'water_sports_gear_excerpt_more' );

if ( ! function_exists( 'water_sports_gear_sidebar_layout' ) ) {
	/**
	 * Get sidebar layout.
	 */
	function water_sports_gear_sidebar_layout() {
		$water_sports_gear_sidebar_position      = get_theme_mod( 'water_sports_gear_sidebar_position', 'right-sidebar' );
		$water_sports_gear_sidebar_position_post = get_theme_mod( 'water_sports_gear_post_sidebar_position', 'right-sidebar' );
		$water_sports_gear_sidebar_position_page = get_theme_mod( 'water_sports_gear_page_sidebar_position', 'right-sidebar' );

		if ( is_single() ) {
			$water_sports_gear_sidebar_position = $water_sports_gear_sidebar_position_post;
		} elseif ( is_page() ) {
			$water_sports_gear_sidebar_position = $water_sports_gear_sidebar_position_page;
		}

		return $water_sports_gear_sidebar_position;
	}
}

if ( ! function_exists( 'water_sports_gear_is_sidebar_enabled' ) ) {
	/**
	 * Check if sidebar is enabled.
	 */
	function water_sports_gear_is_sidebar_enabled() {
		$water_sports_gear_sidebar_position      = get_theme_mod( 'water_sports_gear_sidebar_position', 'right-sidebar' );
		$water_sports_gear_sidebar_position_post = get_theme_mod( 'water_sports_gear_post_sidebar_position', 'right-sidebar' );
		$water_sports_gear_sidebar_position_page = get_theme_mod( 'water_sports_gear_page_sidebar_position', 'right-sidebar' );

		$water_sports_gear_sidebar_enabled = true;
		if ( is_home() || is_archive() || is_search() ) {
			if ( 'no-sidebar' === $water_sports_gear_sidebar_position ) {
				$water_sports_gear_sidebar_enabled = false;
			}
		} elseif ( is_single() ) {
			if ( 'no-sidebar' === $water_sports_gear_sidebar_position || 'no-sidebar' === $water_sports_gear_sidebar_position_post ) {
				$water_sports_gear_sidebar_enabled = false;
			}
		} elseif ( is_page() ) {
			if ( 'no-sidebar' === $water_sports_gear_sidebar_position || 'no-sidebar' === $water_sports_gear_sidebar_position_page ) {
				$water_sports_gear_sidebar_enabled = false;
			}
		}
		return $water_sports_gear_sidebar_enabled;
	}
}

if ( ! function_exists( 'water_sports_gear_get_homepage_sections ' ) ) {
	/**
	 * Returns homepage sections.
	 */
	function water_sports_gear_get_homepage_sections() {
		$water_sports_gear_sections = array(
			'banner'  => esc_html__( 'Banner Section', 'water-sports-gear' ),
			'choose-us' => esc_html__( 'Choose Us Section', 'water-sports-gear' ),
		);
		return $water_sports_gear_sections;
	}
}

/**
 * Renders customizer section link
 */
function water_sports_gear_section_link( $water_sports_gear_section_id ) {
	$water_sports_gear_section_name      = str_replace( 'water_sports_gear_', ' ', $water_sports_gear_section_id );
	$water_sports_gear_section_name      = str_replace( '_', ' ', $water_sports_gear_section_name );
	$water_sports_gear_starting_notation = '#';
	?>
	<span class="section-link">
		<span class="section-link-title"><?php echo esc_html( $water_sports_gear_section_name ); ?></span>
	</span>
	<style type="text/css">
		<?php echo $water_sports_gear_starting_notation . $water_sports_gear_section_id; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>:hover .section-link {
			visibility: visible;
		}
	</style>
	<?php
}

/**
 * Adds customizer section link css
 */
function water_sports_gear_section_link_css() {
	if ( is_customize_preview() ) {
		?>
		<style type="text/css">
			.section-link {
				visibility: hidden;
				background-color: black;
				position: relative;
				top: 80px;
				z-index: 99;
				left: 40px;
				color: #fff;
				text-align: center;
				font-size: 20px;
				border-radius: 10px;
				padding: 20px 10px;
				text-transform: capitalize;
			}

			.section-link-title {
				padding: 0 10px;
			}

			.banner-section {
				position: relative;
			}

			.banner-section .section-link {
				position: absolute;
				top: 100px;
			}
		</style>
		<?php
	}
}
add_action( 'wp_head', 'water_sports_gear_section_link_css' );

/**
 * Breadcrumb.
 */
function water_sports_gear_breadcrumb( $water_sports_gear_args = array() ) {
	if ( ! get_theme_mod( 'water_sports_gear_enable_breadcrumb', true ) ) {
		return;
	}

	$water_sports_gear_args = array(
		'show_on_front' => false,
		'show_title'    => true,
		'show_browse'   => false,
	);
	breadcrumb_trail( $water_sports_gear_args );
}
add_action( 'water_sports_gear_breadcrumb', 'water_sports_gear_breadcrumb', 10 );

/**
 * Add separator for breadcrumb trail.
 */
function water_sports_gear_breadcrumb_trail_print_styles() {
	$water_sports_gear_breadcrumb_separator = get_theme_mod( 'water_sports_gear_breadcrumb_separator', '/' );

	$water_sports_gear_style = '
		.trail-items li::after {
			content: "' . $water_sports_gear_breadcrumb_separator . '";
		}'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

	$water_sports_gear_style = apply_filters( 'water_sports_gear_breadcrumb_trail_inline_style', trim( str_replace( array( "\r", "\n", "\t", '  ' ), '', $water_sports_gear_style ) ) );

	if ( $water_sports_gear_style ) {
		echo "\n" . '<style type="text/css" id="breadcrumb-trail-css">' . $water_sports_gear_style . '</style>' . "\n"; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}
add_action( 'wp_head', 'water_sports_gear_breadcrumb_trail_print_styles' );

/**
 * Pagination for archive.
 */
function water_sports_gear_render_posts_pagination() {
	$water_sports_gear_is_pagination_enabled = get_theme_mod( 'water_sports_gear_enable_pagination', true );
	if ( $water_sports_gear_is_pagination_enabled ) {
		$water_sports_gear_pagination_type = get_theme_mod( 'water_sports_gear_pagination_type', 'default' );
		if ( 'default' === $water_sports_gear_pagination_type ) :
			the_posts_navigation();
		else :
			the_posts_pagination();
		endif;
	}
}
add_action( 'water_sports_gear_posts_pagination', 'water_sports_gear_render_posts_pagination', 10 );



/**
 * GET START FUNCTION
 */

function water_sports_gear_getpage_css($hook) {
	wp_enqueue_script( 'water-sports-gear-admin-script', get_template_directory_uri() . '/resource/js/water-sports-gear-admin-notice-script.js', array( 'jquery' ) );
    wp_localize_script( 'water-sports-gear-admin-script', 'water_sports_gear_ajax_object',
        array( 'ajax_url' => admin_url( 'admin-ajax.php' ) )
    );
    wp_enqueue_style( 'water-sports-gear-notice-style', get_template_directory_uri() . '/resource/css/notice.css' );
}

add_action( 'admin_enqueue_scripts', 'water_sports_gear_getpage_css' );


add_action('wp_ajax_water_sports_gear_dismissable_notice', 'water_sports_gear_dismissable_notice');
function water_sports_gear_switch_theme() {
    delete_user_meta(get_current_user_id(), 'water_sports_gear_dismissable_notice');
}
add_action('after_switch_theme', 'water_sports_gear_switch_theme');
function water_sports_gear_dismissable_notice() {
    update_user_meta(get_current_user_id(), 'water_sports_gear_dismissable_notice', true);
    die();
}

function water_sports_gear_deprecated_hook_admin_notice() {
    global $water_sports_gear_pagenow;

    // Check if the current page is the one where you don't want the notice to appear
    if ( $water_sports_gear_pagenow === 'themes.php' && isset( $_GET['page'] ) && $_GET['page'] === 'water-sports-gear-getting-started' ) {
        return;
    }

    $water_sports_gear_dismissed = get_user_meta( get_current_user_id(), 'water_sports_gear_dismissable_notice', true );
    if ( !$water_sports_gear_dismissed ) { ?>
        <div class="water-sports-gear-updated notice notice-success is-dismissible notice-water-sports-gear-get-started">
            <div class="water-sports-gear-admin-content">
                <h2><?php esc_html_e('Welcome to Water Sports Gear', 'water-sports-gear'); ?></h2>
                <p><?php esc_html_e('Explore the features of our Pro Theme and take your Water Sports Gear journey to the next level.', 'water-sports-gear'); ?></p>
                <p><?php esc_html_e('Get Started With Theme By Clicking On Getting Started.', 'water-sports-gear'); ?></p>
                <div style="display: flex; justify-content: center;">
                    <a class="water-sports-gear-admin-notice-btn button button-primary button-hero" href="<?php echo esc_url( admin_url( 'themes.php?page=water-sports-gear-getting-started' )); ?>"><?php esc_html_e( 'Get started', 'water-sports-gear' ); ?></a>
                    <a class="water-sports-gear-admin-notice-btn button button-primary button-hero" target="_blank" href="https://demo.asterthemes.com/water-sports-gear/"><?php esc_html_e('View Demo', 'water-sports-gear'); ?></a>
                    <a class="water-sports-gear-admin-notice-btn button button-primary button-hero" target="_blank" href="https://asterthemes.com/products/water-sports-wordpress-theme"><?php esc_html_e('Buy Now', 'water-sports-gear'); ?></a>
                    <a class="water-sports-gear-admin-notice-btn button button-primary button-hero" target="_blank" href="https://demo.asterthemes.com/docs/water-sports-gear-free"><?php esc_html_e('Free Doc', 'water-sports-gear'); ?></a>
                </div>
            </div>
            <div class="water-sports-gear-admin-image">
                <img style="width: 100%; max-width: 320px; line-height: 40px; display: inline-block; vertical-align: top; border: 2px solid #ddd; border-radius: 4px;" src="<?php echo esc_url( get_stylesheet_directory_uri() . '/screenshot.png' ); ?>" alt="<?php esc_attr_e('Water Sports Gear Screenshot', 'water-sports-gear'); ?>" />
            </div>
        </div>
    <?php }
}

add_action( 'admin_notices', 'water_sports_gear_deprecated_hook_admin_notice' );

//Admin Notice For Getstart
function water_sports_gear_ajax_notice_handler() {
    if ( isset( $_POST['type'] ) ) {
        $type = sanitize_text_field( wp_unslash( $_POST['type'] ) );
        update_option( 'dismissed-' . $type, TRUE );
    }
}

/**
 * Pagination for single post.
 */
function water_sports_gear_render_post_navigation() {
	the_post_navigation(
		array(
			'prev_text' => '<span>&#10229;</span> <span class="nav-title">%title</span>',
			'next_text' => '<span class="nav-title">%title</span> <span>&#10230;</span>',
		)
	);
}
add_action( 'water_sports_gear_post_navigation', 'water_sports_gear_render_post_navigation' );

/**
 * Adds footer copyright text.
 */
function water_sports_gear_output_footer_copyright_content() {
    $water_sports_gear_theme_data = wp_get_theme();
    $water_sports_gear_copyright_text = get_theme_mod('water_sports_gear_footer_copyright_text');

    if (!empty($water_sports_gear_copyright_text)) {
        $water_sports_gear_text = $water_sports_gear_copyright_text;
    } else {
        $water_sports_gear_default_text = '<a href="'. esc_url(__('https://asterthemes.com/products/free-water-sports-wordpress-theme','water-sports-gear')) . '" target="_blank"> ' . esc_html($water_sports_gear_theme_data->get('Name')) . '</a>' . '&nbsp;' . esc_html__('by', 'water-sports-gear') . '&nbsp;<a target="_blank" href="' . esc_url($water_sports_gear_theme_data->get('AuthorURI')) . '">' . esc_html(ucwords($water_sports_gear_theme_data->get('Author'))) . '</a>';
		/* translators: %s: WordPress.org URL */
        $water_sports_gear_default_text .= sprintf(esc_html__(' | Powered by %s', 'water-sports-gear'), '<a href="' . esc_url(__('https://wordpress.org/', 'water-sports-gear')) . '" target="_blank">WordPress</a>. ');

        $water_sports_gear_text = $water_sports_gear_default_text;
    }
    ?>
    <span><?php echo wp_kses_post($water_sports_gear_text); ?></span>
    <?php
}
add_action('water_sports_gear_footer_copyright', 'water_sports_gear_output_footer_copyright_content');


if ( ! function_exists( 'water_sports_gear_footer_widget' ) ) :
	function water_sports_gear_footer_widget() {
		$water_sports_gear_footer_widget_column = get_theme_mod('water_sports_gear_footer_widget_column','4');

		$water_sports_gear_column_class = '';
		if ($water_sports_gear_footer_widget_column == '1') {
			$water_sports_gear_column_class = 'one-column';
		} elseif ($water_sports_gear_footer_widget_column == '2') {
			$water_sports_gear_column_class = 'two-columns';
		} elseif ($water_sports_gear_footer_widget_column == '3') {
			$water_sports_gear_column_class = 'three-columns';
		} else {
			$water_sports_gear_column_class = 'four-columns';
		}
	
		if($water_sports_gear_footer_widget_column !== ''): 
		?>
		<div class="dt_footer-widgets <?php echo esc_attr($water_sports_gear_column_class); ?>">
			<div class="footer-widgets-column">
				<?php
				$footer_widgets_active = false;

				// Loop to check if any footer widget is active
				for ($water_sports_gear_i = 1; $water_sports_gear_i <= $water_sports_gear_footer_widget_column; $water_sports_gear_i++) {
					if (is_active_sidebar('water-sports-gear-footer-widget-' . $water_sports_gear_i)) {
						$footer_widgets_active = true;
						break;
					}
				}

				if ($footer_widgets_active) {
					// Display active footer widgets
					for ($water_sports_gear_i = 1; $water_sports_gear_i <= $water_sports_gear_footer_widget_column; $water_sports_gear_i++) {
						if (is_active_sidebar('water-sports-gear-footer-widget-' . $water_sports_gear_i)) : ?>
							<div class="footer-one-column">
								<?php dynamic_sidebar('water-sports-gear-footer-widget-' . $water_sports_gear_i); ?>
							</div>
						<?php endif;
					}
				} else {
				?>
				<div class="footer-one-column default-widgets">
					<aside id="search-2" class="widget widget_search default_footer_search">
						<div class="widget-header">
							<h4 class="widget-title"><?php esc_html_e('Search Here', 'water-sports-gear'); ?></h4>
						</div>
						<?php get_search_form(); ?>
					</aside>
				</div>
				<div class="footer-one-column default-widgets">
					<aside id="recent-posts-2" class="widget widget_recent_entries">
						<h2 class="widget-title"><?php esc_html_e('Recent Posts', 'water-sports-gear'); ?></h2>
						<ul>
							<?php
							$recent_posts = wp_get_recent_posts(array(
								'numberposts' => 5,
								'post_status' => 'publish',
							));
							foreach ($recent_posts as $post) {
								echo '<li><a href="' . esc_url(get_permalink($post['ID'])) . '">' . esc_html($post['post_title']) . '</a></li>';
							}
							wp_reset_query();
							?>
						</ul>
					</aside>
				</div>
				<div class="footer-one-column default-widgets">
					<aside id="recent-comments-2" class="widget widget_recent_comments">
						<h2 class="widget-title"><?php esc_html_e('Recent Comments', 'water-sports-gear'); ?></h2>
						<ul>
							<?php
							$recent_comments = get_comments(array(
								'number' => 5,
								'status' => 'approve',
							));
							foreach ($recent_comments as $comment) {
								echo '<li><a href="' . esc_url(get_comment_link($comment)) . '">' .
									/* translators: %s: details. */
									sprintf(esc_html__('Comment on %s', 'water-sports-gear'), get_the_title($comment->comment_post_ID)) .
									'</a></li>';
							}
							?>
						</ul>
					</aside>
				</div>
				<div class="footer-one-column default-widgets">
					<aside id="calendar-2" class="widget widget_calendar">
						<h2 class="widget-title"><?php esc_html_e('Calendar', 'water-sports-gear'); ?></h2>
						<?php get_calendar(); ?>
					</aside>
				</div>
			</div>
			<?php } ?>
		</div>
		<?php
		endif;
	}
	endif;
add_action( 'water_sports_gear_footer_widget', 'water_sports_gear_footer_widget' );

function water_sports_gear_footer_text_transform_css() {
    $water_sports_gear_footer_text_transform = get_theme_mod('water_sports_gear_footer_text_transform', 'none');
    ?>
    <style type="text/css">
        .site-footer h4,footer#colophon h2.wp-block-heading,footer#colophon .widgettitle,footer#colophon .widget-title {
            text-transform: <?php echo esc_html($water_sports_gear_footer_text_transform); ?>;
        }
    </style>
    <?php
}
add_action('wp_head', 'water_sports_gear_footer_text_transform_css');