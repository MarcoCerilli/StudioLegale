<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'avvocato_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost:8889' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'FbJ#:s(A=a372lfbu,>.lV]rS&21p-k>~vUAgjG:2.u%3@ex)UKi~9{uOox)5vu@' );
define( 'SECURE_AUTH_KEY',  '^%hRFA@?qHUm1;ZgC?!.{%NW73S.{kMx<|ZG/_93.` ksU[82n=veFW5(fvc<JC#' );
define( 'LOGGED_IN_KEY',    'K{#eh0JDSL1q{c3m}(l/qq,ml%e[e!|b.fH$~B!+CVay}g|,!%V;E{X^(AOqB5zn' );
define( 'NONCE_KEY',        '-j-Nd16<}Q#>0XsD*fG>LXIX-Vd.)k*{sJKxys<%?2XQ81Hb`kI~aC0_8TYFc3rt' );
define( 'AUTH_SALT',        'L*^R&^&v0{c( yrRrjO]#(7a-tgi>f>lqk$R#2P;BNLZ?<[Podn#)J*.}=>MNI$m' );
define( 'SECURE_AUTH_SALT', 'e?W/ef?VdNRH(A+wNL+FiW=/cC^Tf*CIu/0EC!?Nv6]~vEU~hTEb.sM(3Dm^y#9f' );
define( 'LOGGED_IN_SALT',   '4@*<L0$rO?bT!`K5btG=nP6RpHH;1kzsCnNU}0er;jSm ss#=#M$5j!Yx/}b/?!Q' );
define( 'NONCE_SALT',       '%W(k7*,ed)i kBT&W:3M~u`c/3aa2Xl2OPTnA:$}(BU/(zynE!A6nKb)3g+QR9#x' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
