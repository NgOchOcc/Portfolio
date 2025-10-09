/* ==========================================================================
   MODULE - SCROLL ANIMATIONS
   Initializes AOS and GSAP animations
   ========================================================================== */

export function initAnimations() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // GSAP Animations (if needed)
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Add GSAP animations here if needed
        // Example:
        // gsap.from('.section-title', {
        //     scrollTrigger: '.section-title',
        //     y: 50,
        //     opacity: 0,
        //     duration: 1
        // });
    }
}
