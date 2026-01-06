<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the "wrapper" div and all content after.
 *
 * @package Neve
 * @since   1.0.0
 */

/**
 * Executes actions before main tag is closed.
 *
 * @since 1.0.4
 */
do_action('neve_before_primary_end'); ?>

</main><!--/.neve-main-->

<?php

/**
 * Executes actions after main tag is closed.
 *
 * @since 1.0.4
 */
do_action('neve_after_primary');

/**
 * Filters the content parts.
 *
 * @since 1.0.9
 *
 * @param bool   $status Whether the component should be displayed or not.
 * @param string $context The context name.
 */
if (apply_filters('neve_filter_toggle_content_parts', true, 'footer') === true) {

	/**
	 * Executes actions before the footer was rendered.
	 *
	 * @since 1.0.0
	 */
	do_action('neve_before_footer_hook');

	/**
	 * Executes the rendering function for the footer.
	 *
	 * @since 1.0.0
	 */
	do_action('neve_do_footer');

	/**
	 * Executes actions after the footer was rendered.
	 *
	 * @since 1.0.0
	 */
	do_action('neve_after_footer_hook');
}
?>

</div><!--/.wrapper-->
<?php

wp_footer();

/**
 * Executes actions before the body tag is closed.
 *
 * @since 2.11
 */
do_action('neve_body_end_before');

?>
<!-- Icone flottanti di contatto -->
<div class="contact-floating-icons">
	<!-- WhatsApp -->
	<a href="https://wa.me/393291246316" target="_blank" class="contact-icon whatsapp" aria-label="Contatta su WhatsApp" title="Contatta su WhatsApp">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="white">
			<path d="M16 0C7.164 0 0 7.164 0 16c0 2.837.74 5.518 2.15 7.9L0 32l8.3-2.15C10.482 31.26 13.164 32 16 32c8.837 0 16-7.164 16-16S24.837 0 16 0zm0 29.6c-2.544 0-5.042-.715-7.2-2.066l-.512-.309-4.912 1.272 1.285-4.731-.333-.541C3.425 21.309 2.4 18.707 2.4 16 2.4 8.929 8.929 2.4 16 2.4S29.6 8.929 29.6 16 23.071 29.6 16 29.6zm8.133-9.067c-.444-.222-2.626-1.296-3.033-1.441-.407-.148-.703-.222-.999.222s-1.145 1.441-1.403 1.74c-.259.296-.518.333-.963.111-.444-.222-1.878-.693-3.576-2.211-1.321-1.179-2.213-2.63-2.475-3.074-.259-.444-.037-.685.185-.907.189-.189.444-.481.666-.741.222-.259.296-.444.444-.741.148-.296.074-.555-.037-.778-.111-.222-.999-2.407-1.37-3.292-.37-.889-.74-.777-1.001-.777s-.555-.037-.852-.037c-.296 0-.778.111-1.185.555-.407.444-1.556 1.519-1.556 3.7s1.594 4.296 1.814 4.592c.222.296 3.133 4.8 7.629 6.73 1.065.444 1.896.711 2.541.908 1.067.333 2.037.296 2.803.178.855-.126 2.626-1.074 2.999-2.107.37-1.037.37-1.926.259-2.107-.111-.185-.407-.296-.851-.518z" />
		</svg>
	</a>

	<!-- Email -->
	<a href="mailto:avvocato@email.it" class="contact-icon email" aria-label="Contatta via email" title="Contatta via email">
		✉️
	</a>
</div>

<style>
	.contact-floating-icons {
		position: fixed;
		top: 60px;
		right: 20px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		z-index: 9999;
	}

	.contact-icon {
		width: 56px;
		height: 56px;
		background-color: #007bff;
		color: white;
		font-size: 26px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		border-radius: 50%;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
		transition: background-color 0.3s ease, transform 0.3s ease;
	}

	.contact-icon:hover {
		transform: scale(1.1);
	}

	.contact-icon.whatsapp {
		background-color: #25D366;
	}

	.contact-icon.whatsapp:hover {
		background-color: #128C4C;
	}

	.contact-icon.email {
		background-color: #007bff;
	}

	.contact-icon.email:hover {
		background-color: #0056b3;
	}

	.contact-icon svg {
		width: 30px;
		height: 30px;
	}
</style>



</body>

</html>