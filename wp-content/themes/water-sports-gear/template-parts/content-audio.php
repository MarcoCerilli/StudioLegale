<?php

/**
 * Template part for displaying Audio Format
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package water_sports_gear
 */

?>
<?php $water_sports_gear_readmore = get_theme_mod( 'water_sports_gear_readmore_button_text','Read More');?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="mag-post-single">
        <?php
			// Get the post ID
			$water_sports_gear_post_id = get_the_ID();

			// Check if there are audio embedded in the post content
			$water_sports_gear_post = get_post($water_sports_gear_post_id);
			$water_sports_gear_content = do_shortcode(apply_filters('the_content', $water_sports_gear_post->post_content));
			$water_sports_gear_embeds = get_media_embedded_in_content($water_sports_gear_content);

			if (!empty($water_sports_gear_embeds)) {
			    // Loop through embedded media and display only audio
			    foreach ($water_sports_gear_embeds as $water_sports_gear_embed) {
			        // Check if the embed code contains an audio tag or specific audio providers like SoundCloud
			        if (strpos($water_sports_gear_embed, 'audio') !== false || strpos($water_sports_gear_embed, 'soundcloud') !== false) {
			            ?>
			            <div class="custom-embedded-audio">
			                <div class="media-container">
			                    <?php echo $water_sports_gear_embed; ?>
			                </div>
			                <div class="media-comments">
			                    <?php
			                    // Add your comments section here
			                    comments_template(); // This will include the default WordPress comments template
			                    ?>
			                </div>
			            </div>
			            <?php
			        }
			    }
			}
		?>
		<div class="mag-post-detail">
			<div class="mag-post-category">
				<?php water_sports_gear_categories_list(); ?>
			</div>
			<?php
			if ( is_singular() ) :
				the_title( '<h1 class="entry-title mag-post-title">', '</h1>' );
			else :
				if ( get_theme_mod( 'water_sports_gear_post_hide_post_heading', true ) ) { 
					the_title( '<h2 class="entry-title mag-post-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
			    }
			endif;
			?>
			<div class="mag-post-meta">
				<?php
				water_sports_gear_posted_on();
				water_sports_gear_posted_by();
				water_sports_gear_posted_comments();
				water_sports_gear_posted_time();
				?>
			</div>
			<?php if ( get_theme_mod( 'water_sports_gear_post_hide_post_content', true ) ) { ?>
				<div class="mag-post-excerpt">
					<?php the_excerpt(); ?>
				</div>
		    <?php } ?>
			<?php if ( get_theme_mod( 'water_sports_gear_post_readmore_button', true ) === true ) : ?>
				<div class="mag-post-read-more">
					<a href="<?php the_permalink(); ?>" class="read-more-button">
						<?php if ( ! empty( $water_sports_gear_readmore ) ) { ?> <?php echo esc_html( $water_sports_gear_readmore ); ?> <?php } ?>
						<i class="<?php echo esc_attr( get_theme_mod( 'water_sports_gear_readmore_btn_icon', 'fas fa-chevron-right' ) ); ?>"></i>
					</a>
				</div>
			<?php endif; ?>
		</div>
	</div>

</article><!-- #post-<?php the_ID(); ?> -->