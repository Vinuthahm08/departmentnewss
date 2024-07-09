document.addEventListener("DOMContentLoaded", function() {
    const footerAddress = document.getElementById('footer-address');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkScroll() {
        if (isElementInViewport(footerAddress)) {
            footerAddress.style.animation = "slideInFromLeft 1s forwards";
            footerAddress.style.opacity = 1;
            window.removeEventListener('scroll', checkScroll);
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check if it's already in view
});
