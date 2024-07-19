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
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'C:\xampp\htdocs\blog.cannabis\wp-content\plugins\wp-super-cache/' );
define( 'DB_NAME', 'blog.cannabis' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

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
define( 'AUTH_KEY',         'wdxd@6}3Hsl-?]P,za@G|vAumECKpxt7ef=$lv.%oM-16K+E@FjMwl@r{d(A!~;n' );
define( 'SECURE_AUTH_KEY',  'r,pt</RDV@ zEE#v{)V0lT2tq*ni;Si[a/vi#E/6hm7,>Y:ssLg2{huu;UiIMUgX' );
define( 'LOGGED_IN_KEY',    'XPs1eO;DD_iUrqS<_:#yx}K.xM]J4JCu@[/$0.K^bd$u{bFc|8ognmP[0M8;qbew' );
define( 'NONCE_KEY',        'UMrTi0b:?pQ3{cDc9e{Xe0v`ZEYr:g2Df]~w#6K&Qs.#nT^!i(2^1,YLt9h|G#*:' );
define( 'AUTH_SALT',        ':eNS4>C3OZ$+K-TM HJk 9u+2a/ i$ @JVq-|U4H=P3e(Iwj+&v|.fp.,7oL d.Q' );
define( 'SECURE_AUTH_SALT', '-1E=Z^pJ*|8a<h_+gpU4u8rYWwc:=L#,LgxnX4DeD]Rv0Vd#Z$0Z1xC}r#V&ZDqd' );
define( 'LOGGED_IN_SALT',   '6[b6Hid[H</0YB.[@Fq?f?N<fUjX{_lS^0B|d1|_]&6v-`KHQnodE>mX|Da/:N#1' );
define( 'NONCE_SALT',       'fcI%x!:$2{..4+xOM^6?2n>XjV.w2$f8.qG(;0r9z<0KE+`(x%iyz1LcwK%iueGP' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
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
