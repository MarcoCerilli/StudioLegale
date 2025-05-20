<?php
/**
 * Getting Started Page.
 *
 * @package water_sports_gear
 */


if( ! function_exists( 'water_sports_gear_getting_started_menu' ) ) :
/**
 * Adding Getting Started Page in admin menu
 */
function water_sports_gear_getting_started_menu(){	
	add_theme_page(
		__( 'Getting Started', 'water-sports-gear' ),
		__( 'Getting Started', 'water-sports-gear' ),
		'manage_options',
		'water-sports-gear-getting-started',
		'water_sports_gear_getting_started_page'
	);
}
endif;
add_action( 'admin_menu', 'water_sports_gear_getting_started_menu' );

if( ! function_exists( 'water_sports_gear_getting_started_admin_scripts' ) ) :
/**
 * Load Getting Started styles in the admin
 */
function water_sports_gear_getting_started_admin_scripts( $hook ){
	// Load styles only on our page
	if( 'appearance_page_water-sports-gear-getting-started' != $hook ) return;

    wp_enqueue_style( 'water-sports-gear-getting-started', get_template_directory_uri() . '/resource/css/getting-started.css', false, WATER_SPORTS_GEAR_THEME_VERSION );

    wp_enqueue_script( 'water-sports-gear-getting-started', get_template_directory_uri() . '/resource/js/getting-started.js', array( 'jquery' ), WATER_SPORTS_GEAR_THEME_VERSION, true );
}
endif;
add_action( 'admin_enqueue_scripts', 'water_sports_gear_getting_started_admin_scripts' );

if( ! function_exists( 'water_sports_gear_getting_started_page' ) ) :
/**
 * Callback function for admin page.
*/
function water_sports_gear_getting_started_page(){ 
	$water_sports_gear_theme = wp_get_theme();?>
	<div class="wrap getting-started">
		<div class="intro-wrap">
			<div class="intro cointaner">
				<div class="intro-content">
					<h3><?php echo esc_html( 'Welcome to', 'water-sports-gear' );?> <span class="theme-name"><?php echo esc_html( WATER_SPORTS_GEAR_THEME_NAME ); ?></span></h3>
					<p class="about-text">
						<?php
						// Remove last sentence of description.
						$water_sports_gear_description = explode( '. ', $water_sports_gear_theme->get( 'Description' ) );

						$water_sports_gear_description = implode( '. ', $water_sports_gear_description );

						echo esc_html( $water_sports_gear_description . '' );
					?></p>
					<div class="btns-getstart">
						<a href="<?php echo esc_url( admin_url( 'customize.php' ) ); ?>"target="_blank" class="button button-primary"><?php esc_html_e( 'Customize', 'water-sports-gear' ); ?></a>
						<a class="button button-primary" href="<?php echo esc_url( 'https://wordpress.org/support/theme/water-sports-gear/reviews/#new-post' ); ?>" title="<?php esc_attr_e( 'Visit the Review', 'water-sports-gear' ); ?>" target="_blank">
							<?php esc_html_e( 'Review', 'water-sports-gear' ); ?>
						</a>
						<a class="button button-primary" href="<?php echo esc_url( 'https://wordpress.org/support/theme/water-sports-gear' ); ?>" title="<?php esc_attr_e( 'Visit the Support', 'water-sports-gear' ); ?>" target="_blank">
							<?php esc_html_e( 'Contact Support', 'water-sports-gear' ); ?>
						</a>
					</div>
					<div class="btns-wizard">
						<a class="wizard" href="<?php echo esc_url( admin_url( 'themes.php?page=watersportsgear-wizard' ) ); ?>"target="_blank" class="button button-primary"><?php esc_html_e( 'One Click Demo Setup', 'water-sports-gear' ); ?></a>
					</div>
				</div>
				<div class="intro-img">
					<img src="<?php echo esc_url(get_template_directory_uri()) .'/screenshot.png'; ?>" />
				</div>
				
			</div>
		</div>

		<div class="cointaner panels">
			<ul class="inline-list">
				<li class="current">
                    <a id="help" href="javascript:void(0);">
                        <?php esc_html_e( 'Getting Started', 'water-sports-gear' ); ?>
                    </a>
                </li>
				<li>
                    <a id="free-pro-panel" href="javascript:void(0);">
                        <?php esc_html_e( 'Free Vs Pro', 'water-sports-gear' ); ?>
                    </a>
                </li>
			</ul>
			<div id="panel" class="panel">
				<?php require get_template_directory() . '/theme-library/getting-started/tabs/help-panel.php'; ?>
				<?php require get_template_directory() . '/theme-library/getting-started/tabs/free-vs-pro-panel.php'; ?>
				<?php require get_template_directory() . '/theme-library/getting-started/tabs/link-panel.php'; ?>
			</div>
		</div>
	</div>
	<?php
}
endif;