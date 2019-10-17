<?php
/**
 * WordPress Plugin Boilerplate
 *
 * @package boilerplate_slug
 *
 * Plugin Name: WordPress Plugin Boilerplate
 * Description: Quick and easy plugin development
 * Version: 1.0.0
 * Author: Josias Ribi
 * Author URI: https://josias.me
 */

/**
 * Register gutenberg blocks
 *
 * @return void
 */
function boilerplate_slug_gb_blocks() {
	$blocks_path = 'assets/blocks.bundle.js';
	$blocks_ver  = date( 'ymd-Gis', filemtime( plugin_dir_path( __FILE__ ) . $blocks_path ) );
	wp_enqueue_script(
		'boilerplate-slug-gb-blocks',
		plugin_dir_url( __FILE__ ) . $blocks_path,
		[ 'wp-blocks', 'wp-components', 'wp-editor' ],
		$blocks_ver,
		true
	);
}

add_action( 'enqueue_block_editor_assets', 'boilerplate_slug_gb_blocks' );
