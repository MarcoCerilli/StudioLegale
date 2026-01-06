<?php

/**
 * Active Callbacks
 *
 * @package water_sports_gear
 */

// Theme Options.
function water_sports_gear_is_pagination_enabled( $water_sports_gear_control ) {
	return ( $water_sports_gear_control->manager->get_setting( 'water_sports_gear_enable_pagination' )->value() );
}
function water_sports_gear_is_breadcrumb_enabled( $water_sports_gear_control ) {
	return ( $water_sports_gear_control->manager->get_setting( 'water_sports_gear_enable_breadcrumb' )->value() );
}
function water_sports_gear_is_layout_enabled( $water_sports_gear_control ) {
	return ( $water_sports_gear_control->manager->get_setting( 'water_sports_gear_website_layout' )->value() );
}
function water_sports_gear_is_pagetitle_bcakground_image_enabled( $water_sports_gear_control ) {
	return ( $water_sports_gear_control->manager->get_setting( 'water_sports_gear_page_header_style' )->value() );
}
function water_sports_gear_is_preloader_style( $water_sports_gear_control ) {
	return ( $water_sports_gear_control->manager->get_setting( 'water_sports_gear_enable_preloader' )->value() );
}

// Header Options.
function water_sports_gear_is_topbar_enabled( $water_sports_gear_control ) {
	return ( $water_sports_gear_control->manager->get_Setting( 'water_sports_gear_enable_topbar' )->value() );
}
// Banner Slider Section.
function water_sports_gear_is_banner_slider_section_enabled( $water_sports_gear_control ) {
	return ( $water_sports_gear_control->manager->get_setting( 'water_sports_gear_enable_banner_section' )->value() );
}
function water_sports_gear_is_banner_slider_section_and_content_type_post_enabled( $water_sports_gear_control ) {
	$water_sports_gear_content_type = $water_sports_gear_control->manager->get_setting( 'water_sports_gear_banner_slider_content_type' )->value();
	return ( water_sports_gear_is_banner_slider_section_enabled( $water_sports_gear_control ) && ( 'post' === $water_sports_gear_content_type ) );
}
function water_sports_gear_is_banner_slider_section_and_content_type_page_enabled( $water_sports_gear_control ) {
	$water_sports_gear_content_type = $water_sports_gear_control->manager->get_setting( 'water_sports_gear_banner_slider_content_type' )->value();
	return ( water_sports_gear_is_banner_slider_section_enabled( $water_sports_gear_control ) && ( 'page' === $water_sports_gear_content_type ) );
}
//Choose Us Section.
function water_sports_gear_is_service_section_enabled( $water_sports_gear_control ) {
	return ( $water_sports_gear_control->manager->get_setting( 'water_sports_gear_enable_service_section' )->value() );
}
function water_sports_gear_is_service_section_and_content_type_post_enabled( $water_sports_gear_control ) {
	$water_sports_gear_content_type = $water_sports_gear_control->manager->get_setting( 'water_sports_gear_service_content_type' )->value();
	return ( water_sports_gear_is_service_section_enabled( $water_sports_gear_control ) && ( 'post' === $water_sports_gear_content_type ) );
}
function water_sports_gear_is_service_section_and_content_type_page_enabled( $water_sports_gear_control ) {
	$water_sports_gear_content_type = $water_sports_gear_control->manager->get_setting( 'water_sports_gear_service_content_type' )->value();
	return ( water_sports_gear_is_service_section_enabled( $water_sports_gear_control ) && ( 'page' === $water_sports_gear_content_type ) );
}