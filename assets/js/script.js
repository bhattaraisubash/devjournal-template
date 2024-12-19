jQuery(document).ready(function ($) {
    // Create the back to top button
    var backToTopBtn = $('#backToTop');

    // Show or hide the button when scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            backToTopBtn.fadeIn();
        } else {
            backToTopBtn.fadeOut();
        }
    });

    // Scroll to the top when the button is clicked
    backToTopBtn.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
});
