<?php
/**
* Wizard
* @package Whizzie
* @since 1.0.0
*/

class Whizzie {
	protected $version = '1.1.0';
	protected $theme_name = '';
	protected $theme_title = '';
	protected $page_slug = '';
	protected $page_title = '';
	protected $config_steps = array();
	public $parent_slug;
	/**
	 * Constructor
	 * @param $config Configuration parameters
	 */
	public function __construct( $config ) {
		$this->set_vars( $config );
		$this->init();
	}

	/**
	 * Set variables based on configuration
	 * @param $config Configuration parameters
	 */
	public function set_vars( $config ) {
		if ( isset( $config['page_slug'] ) ) {
			$this->page_slug = esc_attr( $config['page_slug'] );
		}
		if ( isset( $config['page_title'] ) ) {
			$this->page_title = esc_attr( $config['page_title'] );
		}
		if ( isset( $config['steps'] ) ) {
			$this->config_steps = $config['steps'];
		}

		$current_theme = wp_get_theme();
		$this->theme_title = $current_theme->get( 'Name' );
		$this->theme_name = strtolower( preg_replace( '#[^a-zA-Z]#', '', $current_theme->get( 'Name' ) ) );
		$this->page_slug = apply_filters( $this->theme_name . '_theme_setup_wizard_page_slug', $this->theme_name . '-wizard' );
		$this->parent_slug = apply_filters( $this->theme_name . '_theme_setup_wizard_parent_slug', '' );
	}

	/*** Initialize hooks and actions ***/
	public function init() {
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_action( 'admin_menu', array( $this, 'menu_page' ) );
		add_action( 'wp_ajax_setup_widgets', array( $this, 'setup_widgets' ) );
	}

	public function enqueue_scripts() {
		wp_enqueue_style( 'theme-wizard-style', get_template_directory_uri() . '/theme-wizard/assets/css/theme-wizard-style.css');
		wp_register_script( 'theme-wizard-script', get_template_directory_uri() . '/theme-wizard/assets/js/theme-wizard-script.js', array( 'jquery' ));
		wp_localize_script(
			'theme-wizard-script',
			'water_sports_gear_whizzie_params',
			array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
				'verify_text' => esc_html( 'verifying', 'water-sports-gear' )
			)
		);
		wp_enqueue_script( 'theme-wizard-script' );
	}

	public function menu_page() {
		add_theme_page( esc_html( $this->page_title ), esc_html( $this->page_title ), 'manage_options', $this->page_slug, array( $this, 'water_sports_gear_setup_wizard' ) );
	}

	/*** Display the wizard page content ***/
	public function wizard_page() { ?>
		<div class="main-wrap">
			<div class="card whizzie-wrap">
				<ul class="whizzie-menu">
					<?php foreach ( $this->get_steps() as $step ) : ?>
						<li data-step="<?php echo esc_attr( $step['id'] ); ?>" class="step step-<?php echo esc_attr( $step['id'] ); ?>">
							<h2><?php echo esc_html( $step['title'] ); ?></h2>
							<?php $content = call_user_func( array( $this, $step['view'] ) ); ?>
							<?php if ( isset( $content['summary'] ) ) : ?>
								<div class="summary"><?php echo wp_kses_post( $content['summary'] ); ?></div>
							<?php endif; ?>
							<?php if ( isset( $content['detail'] ) ) : ?>
								<p><a href="#" class="more-info"><?php esc_html_e( 'More Info', 'water-sports-gear' ); ?></a></p>
								<div class="detail"><?php echo wp_kses_post( $content['detail'] ); ?></div>
							<?php endif; ?>
							<?php if ( isset( $step['button_text'] ) && $step['button_text'] ) : ?>
								<div class="button-wrap"><a href="#" class="button button-primary do-it" data-callback="<?php echo esc_attr( $step['callback'] ); ?>" data-step="<?php echo esc_attr( $step['id'] ); ?>"><?php echo esc_html( $step['button_text'] ); ?></a></div>
							<?php endif; ?>
						</li>
					<?php endforeach; ?>
				</ul>
				<div class="step-loading"><span class="spinner"></span></div>
			</div>
		</div>
	<?php }

	/*** Setup wizard page content and options ***/
	public function water_sports_gear_setup_wizard() { ?>
		<div class="wrapper-info get-stared-page-wrap">
			<div class="tab-sec theme-option-tab">
				<div id="demo_offer" class="tabcontent">
					<?php $this->wizard_page(); ?>
				</div>
			</div>
		</div>
	<?php }

	/**
	 * Get the steps for the wizard
	 * @return array
	 */
	public function get_steps() {
		$steps = array(
			'intro' => array(
				'id' => 'intro',
				'title' => __( 'Welcome to ', 'water-sports-gear' ) . $this->theme_title,
				'view' => 'get_step_intro',
				'callback' => 'do_next_step',
				'button_text' => __( 'Start Now', 'water-sports-gear' ),
				'can_skip' => false
			),
			'widgets' => array(
				'id' => 'widgets',
				'title' => __( 'Demo Importer', 'water-sports-gear' ),
				'view' => 'get_step_widgets',
				'callback' => 'install_widgets',
				'button_text' => __( 'Import Demo', 'water-sports-gear' ),
				'can_skip' => true
			),
			'done' => array(
				'id' => 'done',
				'title' => __( 'All Done', 'water-sports-gear' ),
				'view' => 'get_step_done'
			)
		);

		return $steps;
	}

	/*** Display the content for the intro step ***/
	public function get_step_intro() { ?>
		<div class="summary">
			<p style="text-align: center;"><?php esc_html_e( 'Thank you for choosing our theme! We are excited to help you get started with your new website.', 'water-sports-gear' ); ?></p>
			<p style="text-align: center;"><?php esc_html_e( 'To ensure you make the most of our theme, we recommend following the setup steps outlined here. This process will help you configure the theme to best suit your needs and preferences. Click on the "Start Now" button to begin the setup.', 'water-sports-gear' ); ?></p>
		</div>
	<?php }

	/*** Display the content for the widgets step ***/
	public function get_step_widgets() { ?>
		<div class="summary">
			<p><?php esc_html_e('To get started, use the button below to import demo content and add widgets to your site. After installation, you can manage settings and customize your site using the Customizer. Enjoy your new theme!', 'water-sports-gear'); ?></p>
		</div>
	<?php }

	/*** Display the content for the final step ***/
	public function get_step_done() { ?>
		<div id="aster-demo-setup-guid">
			<div class="aster-setup-menu">
				<h3><?php esc_html_e('Setup Navigation Menu','water-sports-gear'); ?></h3>
				<p><?php esc_html_e('Follow the following Steps to Setup Menu','water-sports-gear'); ?></p>
				<h4><?php esc_html_e('A) Create Pages','water-sports-gear'); ?></h4>
				<ol>
					<li><?php esc_html_e('Go to Dashboard >> Pages >> Add New','water-sports-gear'); ?></li>
					<li><?php esc_html_e('Enter Page Details And Save Changes','water-sports-gear'); ?></li>
				</ol>
				<h4><?php esc_html_e('B) Add Pages To Menu','water-sports-gear'); ?></h4>
				<ol>
					<li><?php esc_html_e('Go to Dashboard >> Appearance >> Menu','water-sports-gear'); ?></li>
					<li><?php esc_html_e('Click On The Create Menu Option','water-sports-gear'); ?></li>
					<li><?php esc_html_e('Select The Pages And Click On The Add to Menu Button','water-sports-gear'); ?></li>
					<li><?php esc_html_e('Select Primary Menu From The Menu Setting','water-sports-gear'); ?></li>
					<li><?php esc_html_e('Click On The Save Menu Button','water-sports-gear'); ?></li>
				</ol>
			</div>
			<div class="aster-setup-widget">
				<h3><?php esc_html_e('Setup Footer Widgets','water-sports-gear'); ?></h3>
				<p><?php esc_html_e('Follow the following Steps to Setup Footer Widgets','water-sports-gear'); ?></p>
				<ol>
					<li><?php esc_html_e('Go to Dashboard >> Appearance >> Widgets','water-sports-gear'); ?></li>
					<li><?php esc_html_e('Drag And Add The Widgets In The Footer Columns','water-sports-gear'); ?></li>
				</ol>
			</div>
			<div style="display:flex; justify-content: center; margin-top: 20px; gap:20px">
				<div class="aster-setup-finish">
					<a target="_blank" href="<?php echo esc_url(home_url()); ?>" class="button button-primary">Visit Site</a>
				</div>
				<div class="aster-setup-finish">
					<a target="_blank" href="<?php echo esc_url( admin_url('customize.php') ); ?>" class="button button-primary">Customize Your Demo</a>
				</div>
				<div class="aster-setup-finish">
					<a target="_blank" href="<?php echo esc_url( admin_url('themes.php?page=water-sports-gear-getting-started') ); ?>" class="button button-primary">Getting Started</a>
				</div>
			</div>
		</div>
	<?php }


	//                      ------------- MENUS -----------------                    //

	public function water_sports_gear_customizer_primary_menu(){
		// ------- Create Primary Menu --------
		$water_sports_gear_themename = 'Water Sports Gear'; // Ensure the theme name is set
		$water_sports_gear_menuname = $water_sports_gear_themename . ' Primary Menu';
		$water_sports_gear_bpmenulocation = 'primary';
		$water_sports_gear_menu_exists = wp_get_nav_menu_object($water_sports_gear_menuname);
	
		if( !$water_sports_gear_menu_exists ) {
			$water_sports_gear_menu_id = wp_create_nav_menu($water_sports_gear_menuname);
			
			// Home
			wp_update_nav_menu_item($water_sports_gear_menu_id, 0, array(
				'menu-item-title' => __('Home', 'water-sports-gear'),
				'menu-item-classes' => 'home',
				'menu-item-url' => home_url('/'),
				'menu-item-status' => 'publish'
			));
	
			// About Us
			$page_about = get_page_by_path('about'); // Preferred over get_page_by_title()
			if($page_about){
				wp_update_nav_menu_item($water_sports_gear_menu_id, 0, array(
					'menu-item-title' => __('About Us', 'water-sports-gear'),
					'menu-item-classes' => 'about',
					'menu-item-url' => get_permalink($page_about),
					'menu-item-status' => 'publish'
				));
			}
	
			// Our Team
			$page_team = get_page_by_path('team');
			if($page_team){
				wp_update_nav_menu_item($water_sports_gear_menu_id, 0, array(
					'menu-item-title' => __('Our Team', 'water-sports-gear'),
					'menu-item-classes' => 'team',
					'menu-item-url' => get_permalink($page_team),
					'menu-item-status' => 'publish'
				));
			}

			// Contact Us
			$page_contact = get_page_by_path('contact');
			if($page_contact){
				wp_update_nav_menu_item($water_sports_gear_menu_id, 0, array(
					'menu-item-title' => __('Contact Us', 'water-sports-gear'),
					'menu-item-classes' => 'contact',
					'menu-item-url' => get_permalink($page_contact),
					'menu-item-status' => 'publish'
				));
			}
	
			// Blogs
			$page_blog = get_page_by_path('blog');
			if($page_blog){
				wp_update_nav_menu_item($water_sports_gear_menu_id, 0, array(
					'menu-item-title' => __('Blogs', 'water-sports-gear'),
					'menu-item-classes' => 'blog',
					'menu-item-url' => get_permalink($page_blog),
					'menu-item-status' => 'publish'
				));
			}
	
			// Assign menu to location if not set
			if( !has_nav_menu($water_sports_gear_bpmenulocation) ){
				$locations = get_theme_mod('nav_menu_locations');
				$locations[$water_sports_gear_bpmenulocation] = $water_sports_gear_menu_id;
				set_theme_mod('nav_menu_locations', $locations);
			}
		}
	}

	public function water_sports_gear_customizer_socail_nav_menu() {

		// ------- Create Social Menu --------
		$water_sports_gear_menuname = $water_sports_gear_themename . 'Social Menu';
		$water_sports_gear_bpmenulocation = 'social';
		$water_sports_gear_menu_exists = wp_get_nav_menu_object( $water_sports_gear_menuname );

		if( !$water_sports_gear_menu_exists){
			$water_sports_gear_menu_id = wp_create_nav_menu($water_sports_gear_menuname);

			wp_update_nav_menu_item( $water_sports_gear_menu_id, 0, array(
				'menu-item-title'  => __( 'Facebook', 'water-sports-gear' ),
				'menu-item-url'    => 'https://www.facebook.com',
				'menu-item-status' => 'publish',
			) );
	
			wp_update_nav_menu_item( $water_sports_gear_menu_id, 0, array(
				'menu-item-title'  => __( 'Twitter', 'water-sports-gear' ),
				'menu-item-url'    => 'https://www.twitter.com',
				'menu-item-status' => 'publish',
			) );
	
			wp_update_nav_menu_item( $water_sports_gear_menu_id, 0, array(
				'menu-item-title'  => __( 'Instagram', 'water-sports-gear' ),
				'menu-item-url'    => 'https://www.instagram.com',
				'menu-item-status' => 'publish',
			) );
	
			wp_update_nav_menu_item( $water_sports_gear_menu_id, 0, array(
				'menu-item-title'  => __( 'Youtube', 'water-sports-gear' ),
				'menu-item-url'    => 'https://www.youtube.com',
				'menu-item-status' => 'publish',
			) );
			

			if( !has_nav_menu( $water_sports_gear_bpmenulocation ) ){
					$locations = get_theme_mod('nav_menu_locations');
					$locations[$water_sports_gear_bpmenulocation] = $water_sports_gear_menu_id;
					set_theme_mod( 'nav_menu_locations', $locations );
			}
		}
	}


	//                      ------------- /*** Imports demo content ***/ -----------------                    //

	public function setup_widgets() {

		// Create a front page and assign the template
		$water_sports_gear_home_title = 'Home';
		$water_sports_gear_home_check = get_page_by_path('home');
		if (!$water_sports_gear_home_check) {
			$water_sports_gear_home = array(
				'post_type'    => 'page',
				'post_title'   => $water_sports_gear_home_title,
				'post_status'  => 'publish',
				'post_author'  => 1,
				'post_name'    => 'home' // Unique slug for the home page
			);
			$water_sports_gear_home_id = wp_insert_post($water_sports_gear_home);

			// Set the static front page
			if (!is_wp_error($water_sports_gear_home_id)) {
				update_option('page_on_front', $water_sports_gear_home_id);
				update_option('show_on_front', 'page');
			}
		}

		// Create a posts page and assign the template
		$water_sports_gear_blog_title = 'Blogs';
		$water_sports_gear_blog_check = get_page_by_path('blog');
		if (!$water_sports_gear_blog_check) {
			$water_sports_gear_blog = array(
				'post_type'    => 'page',
				'post_title'   => $water_sports_gear_blog_title,
				'post_status'  => 'publish',
				'post_author'  => 1,
				'post_name'    => 'blog' // Unique slug for the blog page
			);
			$water_sports_gear_blog_id = wp_insert_post($water_sports_gear_blog);

			// Set the posts page
			if (!is_wp_error($water_sports_gear_blog_id)) {
				update_option('page_for_posts', $water_sports_gear_blog_id);
			}
		}

		// Create a About Us page and assign the template
		$water_sports_gear_about_title = 'About Us';
		$water_sports_gear_about_check = get_page_by_path('about');
		if (!$water_sports_gear_about_check) {
			$water_sports_gear_about = array(
				'post_type'    => 'page',
				'post_title'   => $water_sports_gear_about_title,
				'post_content' => '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
				'post_status'  => 'publish',
				'post_author'  => 1,
				'post_name'    => 'about' // Unique slug for the About Us page
			);
			wp_insert_post($water_sports_gear_about);
		}

		// Create a Our Team page and assign the template
		$water_sports_gear_team_title = 'Our Team';
		$water_sports_gear_team_check = get_page_by_path('team');
		if (!$water_sports_gear_team_check) {
			$water_sports_gear_team = array(
				'post_type'    => 'page',
				'post_title'   => $water_sports_gear_team_title,
				'post_content' => '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
				'post_status'  => 'publish',
				'post_author'  => 1,
				'post_name'    => 'team' // Unique slug for the Our Team page
			);
			wp_insert_post($water_sports_gear_team);
		}

		// Create a Contact Us page and assign the template
		$water_sports_gear_contact_title = 'Contact Us';
		$water_sports_gear_contact_check = get_page_by_path('contact');
		if (!$water_sports_gear_contact_check) {
			$water_sports_gear_contact = array(
				'post_type'    => 'page',
				'post_title'   => $water_sports_gear_contact_title,
				'post_content' => '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
				'post_status'  => 'publish',
				'post_author'  => 1,
				'post_name'    => 'contact' // Unique slug for the Contact Us page
			);
			wp_insert_post($water_sports_gear_contact);
		}


		/*----------------------------------------- Header Button --------------------------------------------------*/

			set_theme_mod( 'water_sports_gear_header_button_label_','CONTACT US');
			set_theme_mod( 'water_sports_gear_header_button_linl_','#');


		// ------------------------------------------ Blogs for Sections --------------------------------------

			// Create categories if not already created
			$water_sports_gear_category_banner = wp_create_category('Slider');
			$water_sports_gear_category_services = wp_create_category('Services');

			// Array of categories to assign to each set of posts
			$water_sports_gear_categories = array($water_sports_gear_category_banner, $water_sports_gear_category_services);

			// Array of image URLs for the "Services" category
			$services_images = array(
				get_template_directory_uri() . '/resource/img/service1.png',
				get_template_directory_uri() . '/resource/img/service2.png',
				get_template_directory_uri() . '/resource/img/service3.png',
				get_template_directory_uri() . '/resource/img/service4.png',
				get_template_directory_uri() . '/resource/img/service5.png',
				get_template_directory_uri() . '/resource/img/service6.png',
			);

			// Loop to create posts
			for ($i = 1; $i <= 9; $i++) { // Adjusted to 6 posts in total
				$title = array(
					'WATER SPORTS',
					'SCUBA DIVING',
					'JET SKIING',
					'Jet Skiing',
					'Surfing',
					'Kayaking',
					'Scuba Diving',
					'Kiteboarding',
					'Sailing',
				);

				$content = ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

				// Determine category and post index to use for title
				$category_index = ($i <= 3) ? 0 : 1; // First 3 for Banner, next 4 for Services
				$post_title = $title[$i - 1]; // Adjust for zero-based index in title array

				// Create post object
				$my_post = array(
					'post_title'    => wp_strip_all_tags($post_title),
					'post_content'  => $content,
					'post_status'   => 'publish',
					'post_type'     => 'post',
					'post_category' => array($water_sports_gear_categories[$category_index]), // Assign Banner to first 3, Services to next 4
				);

				// Insert the post into the database
				$post_id = wp_insert_post($my_post);

				if ($category_index === 0) { // Slider category
					// Use different images for each slider post
					$slider_index = $i % 3 + 1; // Cycles through 1, 2, 3
					$water_sports_gear_image_url = get_template_directory_uri() . "/resource/img/slider{$slider_index}.png";
					$water_sports_gear_image_name = "slider{$slider_index}.png";
				} else { // Services category
					// Use different images for each post in Services category
					$service_image_index = $i - 4; // Get the correct index for the Services images array (4, 5, 6, 7 corresponds to 0, 1, 2, 3)
					$water_sports_gear_image_url = $services_images[$service_image_index];
					$water_sports_gear_image_name = basename($water_sports_gear_image_url);
				}				

				$water_sports_gear_upload_dir = wp_upload_dir();
				$water_sports_gear_image_data = file_get_contents($water_sports_gear_image_url);
				$water_sports_gear_unique_file_name = wp_unique_filename($water_sports_gear_upload_dir['path'], $water_sports_gear_image_name);
				$filename = basename($water_sports_gear_unique_file_name);

				if (wp_mkdir_p($water_sports_gear_upload_dir['path'])) {
					$file = $water_sports_gear_upload_dir['path'] . '/' . $filename;
				} else {
					$file = $water_sports_gear_upload_dir['basedir'] . '/' . $filename;
				}

				if ( ! function_exists( 'WP_Filesystem' ) ) {
					require_once( ABSPATH . 'wp-admin/includes/file.php' );
				}
				
				WP_Filesystem();
				global $wp_filesystem;
				
				if ( ! $wp_filesystem->put_contents( $file, $water_sports_gear_image_data, FS_CHMOD_FILE ) ) {
					wp_die( 'Error saving file!' );
				}
				
				$wp_filetype = wp_check_filetype($filename, null);
				$attachment = array(
					'post_mime_type' => $wp_filetype['type'],
					'post_title'     => sanitize_file_name($filename),
					'post_content'   => '',
					'post_status'    => 'inherit'
				);

				$water_sports_gear_attach_id = wp_insert_attachment($attachment, $file, $post_id);

				require_once(ABSPATH . 'wp-admin/includes/image.php');

				$water_sports_gear_attach_data = wp_generate_attachment_metadata($water_sports_gear_attach_id, $file);
				wp_update_attachment_metadata($water_sports_gear_attach_id, $water_sports_gear_attach_data);
				set_post_thumbnail($post_id, $water_sports_gear_attach_id);
			}
		
		// ---------------------------------------- Slider --------------------------------------------------- //

			set_theme_mod('water_sports_gear_enable_banner_section',true);
			for($i=1; $i<=3; $i++) {
				set_theme_mod('water_sports_gear_banner_button_label_'.$i,'Explore');
				set_theme_mod('water_sports_gear_banner_button_link_'.$i,'');
				set_theme_mod('water_sports_gear_banner_short_heading'.$i,'LIVE LIFE ONCE AGAIN');
				set_theme_mod( 'water_sports_gear_about_left_image_1'.$i,get_template_directory_uri().'/resource/img/slider'.$i.'.png');
			}


		// ---------------------------------------- Services --------------------------------------------------- //

			set_theme_mod('water_sports_gear_enable_service_section',true);
			set_theme_mod('water_sports_gear_trending_product_heading','CHOOSE YOUR PASSION');
					

		// ---------------------------------------- Footer section --------------------------------------------------- //	
		
			set_theme_mod('water_sports_gear_footer_background_color_setting','#000000');
			
		// ---------------------------------------- Related post_tag --------------------------------------------------- //	
		
			set_theme_mod('water_sports_gear_post_related_post_label','Related Posts');
			set_theme_mod('water_sports_gear_related_posts_count','3');


		$this->water_sports_gear_customizer_primary_menu();
		$this->water_sports_gear_customizer_socail_nav_menu	();
	}
}