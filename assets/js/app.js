/* ==========================================================================
   PORTFOLIO - MAIN APPLICATION
   Modular JavaScript Architecture
   ========================================================================== */

import { initNavigation } from './modules/navigation.js';
import { initTypingEffect } from './modules/typing.js';
import { initParticles } from './modules/particles.js';
import { initAnimations } from './modules/animations.js';
import { initFormHandler } from './modules/form.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized');

    // Initialize modules
    initNavigation();
    initTypingEffect();
    initParticles();
    initAnimations();
    initFormHandler();
});
