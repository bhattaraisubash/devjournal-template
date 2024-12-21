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


    // code copy button
    $('.code-block').prepend('<button class="copy-btn"><i class="fa fa-copy"></i> Copy</button>');
    $(".copy-btn").on("click", function () {
        // Find the <code> element in the same container
        const codeText = $(this).siblings("pre").find("code").text().trim();

        // Copy text to clipboard
        navigator.clipboard.writeText(codeText).then(() => {
            // Show success feedback
            const button = $(this);
            button.text("Copied!");
            setTimeout(() => {
                button.text("Copy");
            }, 1500);
        }).catch((err) => {
            console.error("Failed to copy text: ", err);
            const button = $(this);
            button.text("Error");
            setTimeout(() => {
                button.text("Copy");
            }, 1500);
        });
    });
});
