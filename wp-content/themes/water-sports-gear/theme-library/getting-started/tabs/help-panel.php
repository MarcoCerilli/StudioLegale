<?php
/**
 * Help Panel.
 *
 * @package water_sports_gear
 */
?>

<div id="help-panel" class="panel-left visible">
    <div id="#help-panel" class="steps">  
        <h4 class="c">
            <?php esc_html_e( 'Quick Setup for Home Page', 'water-sports-gear' ); ?>
            <a href="<?php echo esc_url( 'https://demo.asterthemes.com/docs/water-sports-gear-free' ); ?>" class="button button-primary" style="margin-left: 5px; margin-right: 10px;" target="_blank"><?php esc_html_e( 'Free Documentation', 'water-sports-gear' ); ?></a>
        </h4>
        <hr class="quick-set">
        <p><?php esc_html_e( '1) Go to the Dashboard. navigate to pages, add a new one, and label it "home" or whatever else you like.The page has now been created.', 'water-sports-gear' ); ?></p>
        <p><?php esc_html_e( '2) Go back to the Dashboard and then select Settings.', 'water-sports-gear' ); ?></p>
        <p><?php esc_html_e( '3) Then Go to readings in the setting.', 'water-sports-gear' ); ?></p>
        <p><?php esc_html_e( '4) There are 2 options your latest post or static page.', 'water-sports-gear' ); ?></p>
        <p><?php esc_html_e( '5) Select static page and select from the dropdown you wish to use as your home page, save changes.', 'water-sports-gear' ); ?></p>
        <p><?php esc_html_e( '6) You can set the home page in this manner.', 'water-sports-gear' ); ?></p>
        <hr>
        <h4><?php esc_html_e( 'Setup Banner Section', 'water-sports-gear' ); ?></h4>
        <hr class="quick-set">
        <p><?php esc_html_e( '1) Go to Dashboard > Go to Appereance > then Go to Customizer.', 'water-sports-gear' ); ?></p>
        <p><?php esc_html_e( '2) In Customizer > Go to Front Page Options > Go to Banner Section.', 'water-sports-gear' ); ?></p>
        <p><?php esc_html_e( '3) For Setup Banner Section you have to create post in dashbord first.', 'water-sports-gear' ); ?></p>
        <p><?php esc_html_e( '4) In Banner Section > Enable the Toggle button > and fill the following details.', 'water-sports-gear' ); ?></p>
        <p><?php esc_html_e( '5) In this way you can set Banner Section.', 'water-sports-gear' ); ?></p>
        <hr>
        <h4><?php esc_html_e( 'Setup Choose Us Section', 'water-sports-gear' ); ?></h4>
        <hr class="quick-set">
        <p><?php esc_html_e( '1) Go to Dashboard > Go to Appereance > then Go to Customizer.', 'water-sports-gear' ); ?></p>
        <p><?php esc_html_e( '2) In Customizer > Go to Front Page Options > Go to Choose Us Section.', 'water-sports-gear' ); ?></p>
        <p><?php esc_html_e( '3) In Choose Us Section > Enable the Toggle button > and fill the following details which you want.', 'water-sports-gear' ); ?></p>
        <p><?php esc_html_e( '4) In this way you can set Choose Us Section.', 'water-sports-gear' ); ?></p>
    </div>
    <hr>
    <div class="custom-setting">
        <h4><?php esc_html_e( 'Quick Customizer Settings', 'water-sports-gear' ); ?></h4>
        <span><a href="<?php echo esc_url( admin_url( 'customize.php' ) ); ?>" target="_blank" class=""><?php esc_html_e( 'Customize', 'water-sports-gear' ); ?></a></span>
    </div>
    <hr>
   <div class="setting-box">
        <div class="custom-links">
            <div class="icon-box">
                <span class="dashicons dashicons-admin-site-alt3"></span>
            </div>
            <h5><?php esc_html_e( 'Site Logo', 'water-sports-gear' ); ?></h5>
            <a href="<?php echo esc_url( admin_url( 'customize.php?autofocus[control]=custom_logo' ) ); ?>" target="_blank" class=""><?php esc_html_e( 'Customize', 'water-sports-gear' ); ?></a>
            
        </div>
        <div class="custom-links">
            <div class="icon-box">
                <span class="dashicons dashicons-color-picker"></span>
            </div>
            <h5><?php esc_html_e( 'Color', 'water-sports-gear' ); ?></h5>
            <a href="<?php echo esc_url( admin_url( 'customize.php?autofocus[control]=primary_color' ) ); ?>" target="_blank" class=""><?php esc_html_e( 'Customize', 'water-sports-gear' ); ?></a>
            
        </div>
        <div class="custom-links">
            <div class="icon-box">
                <span class="dashicons dashicons-screenoptions"></span>
            </div>
            <h5><?php esc_html_e( 'Theme Options', 'water-sports-gear' ); ?></h5>
            <a href="<?php echo esc_url( admin_url( 'customize.php?autofocus[panel]=water_sports_gear_theme_options' ) ); ?>"target="_blank" class=""><?php esc_html_e( 'Customize', 'water-sports-gear' ); ?></a>
            
        </div>
    </div>
    <div class="setting-box">
        <div class="custom-links">
            <div class="icon-box">
                <span class="dashicons dashicons-format-image"></span>
            </div>
            <h5><?php esc_html_e( 'Header Image ', 'water-sports-gear' ); ?></h5>
            <a href="<?php echo esc_url( admin_url( 'customize.php?autofocus[control]=header_image' ) ); ?>" target="_blank" class=""><?php esc_html_e( 'Customize', 'water-sports-gear' ); ?></a>
            
        </div>
        <div class="custom-links">
            <div class="icon-box">
                <span class="dashicons dashicons-align-full-width"></span>
            </div>
            <h5><?php esc_html_e( 'Footer Options ', 'water-sports-gear' ); ?></h5>
            <a href="<?php echo esc_url( admin_url( 'customize.php?autofocus[control]=water_sports_gear_footer_copyright_text' ) ); ?>" target="_blank" class=""><?php esc_html_e( 'Customize', 'water-sports-gear' ); ?></a>
            
        </div>
        <div class="custom-links">
            <div class="icon-box">
                <span class="dashicons dashicons-admin-page"></span>
            </div>
            <h5><?php esc_html_e( 'Front Page Options', 'water-sports-gear' ); ?></h5>
            <a href="<?php echo esc_url( admin_url( 'customize.php?autofocus[panel]=water_sports_gear_front_page_options' ) ); ?>" target="_blank" class=""><?php esc_html_e( 'Customize', 'water-sports-gear' ); ?></a>
            
        </div>
    </div>
</div>