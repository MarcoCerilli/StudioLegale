<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! water_sports_gear_has_page_header() ) {
    return;
}

$water_sports_gear_classes = array( 'page-header' );
$water_sports_gear_style = water_sports_gear_page_header_style();

if ( $water_sports_gear_style ) {
    $water_sports_gear_classes[] = $water_sports_gear_style . '-page-header';
}

$water_sports_gear_visibility = get_theme_mod( 'water_sports_gear_page_header_visibility', 'all-devices' );

if ( 'hide-all-devices' === $water_sports_gear_visibility ) {
    // Don't show the header at all
    return;
}

if ( 'hide-tablet' === $water_sports_gear_visibility ) {
    $water_sports_gear_classes[] = 'hide-on-tablet';
} elseif ( 'hide-mobile' === $water_sports_gear_visibility ) {
    $water_sports_gear_classes[] = 'hide-on-mobile';
} elseif ( 'hide-tablet-mobile' === $water_sports_gear_visibility ) {
    $water_sports_gear_classes[] = 'hide-on-tablet-mobile';
}

$water_sports_gear_PAGE_TITLE_background_color = get_theme_mod('water_sports_gear_page_title_background_color_setting', '');

// Get the toggle switch value
$water_sports_gear_background_image_enabled = get_theme_mod('water_sports_gear_page_header_style', true);

// Add background image to the header if enabled
$water_sports_gear_background_image = get_theme_mod( 'water_sports_gear_page_header_background_image', '' );
$water_sports_gear_background_height = get_theme_mod( 'water_sports_gear_page_header_image_height', '200' );
$water_sports_gear_inline_style = '';

if ( $water_sports_gear_background_image_enabled && ! empty( $water_sports_gear_background_image ) ) {
    $water_sports_gear_inline_style .= 'background-image: url(' . esc_url( $water_sports_gear_background_image ) . '); ';
    $water_sports_gear_inline_style .= 'height: ' . esc_attr( $water_sports_gear_background_height ) . 'px; ';
    $water_sports_gear_inline_style .= 'background-size: cover; ';
    $water_sports_gear_inline_style .= 'background-position: center center; ';

    // Add the unique class if the background image is set
    $water_sports_gear_classes[] = 'has-background-image';
}

$water_sports_gear_classes = implode( ' ', $water_sports_gear_classes );
$water_sports_gear_heading = get_theme_mod( 'water_sports_gear_page_header_heading_tag', 'h1' );
$water_sports_gear_heading = apply_filters( 'water_sports_gear_page_header_heading', $water_sports_gear_heading );

?>

<?php do_action( 'water_sports_gear_before_page_header' ); ?>

<header class="<?php echo esc_attr( $water_sports_gear_classes ); ?>" style="<?php echo esc_attr( $water_sports_gear_inline_style ); ?> background-color: <?php echo esc_attr($water_sports_gear_PAGE_TITLE_background_color); ?>;">

    <?php do_action( 'water_sports_gear_before_page_header_inner' ); ?>

    <div class="asterthemes-wrapper page-header-inner">

        <?php if ( water_sports_gear_has_page_header() ) : ?>

            <<?php echo esc_attr( $water_sports_gear_heading ); ?> class="page-header-title">
                <?php echo wp_kses_post( water_sports_gear_get_page_title() ); ?>
            </<?php echo esc_attr( $water_sports_gear_heading ); ?>>

        <?php endif; ?>

        <?php if ( function_exists( 'water_sports_gear_breadcrumb' ) ) : ?>
            <?php water_sports_gear_breadcrumb(); ?>
        <?php endif; ?>

    </div><!-- .page-header-inner -->

    <?php do_action( 'water_sports_gear_after_page_header_inner' ); ?>

</header><!-- .page-header -->

<?php do_action( 'water_sports_gear_after_page_header' ); ?>