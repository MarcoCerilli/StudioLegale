<?php

/**
 * Render homepage sections.
 */
function water_sports_gear_homepage_sections() {
	$homepage_sections = array_keys( water_sports_gear_get_homepage_sections() );

	foreach ( $homepage_sections as $water_sports_gear_section ) {
		require get_template_directory() . '/sections/' . $water_sports_gear_section . '.php';
	}
}