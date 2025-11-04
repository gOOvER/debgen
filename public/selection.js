/**
 * Selection Page JavaScript
 * Handles the distribution selection interface
 */

class DistributionSelector {
    constructor() {
        this.init();
    }

    init() {
        this.setupCardInteractions();
        this.setupKeyboardNavigation();
        this.setupAnimations();
    }

    /**
     * Setup card hover and click interactions
     */
    setupCardInteractions() {
        const cards = document.querySelectorAll('.distribution-card');
        
        cards.forEach(card => {
            // Hover effects
            card.addEventListener('mouseenter', () => {
                card.classList.add('hovered');
                this.animateCard(card, 'hover');
            });

            card.addEventListener('mouseleave', () => {
                card.classList.remove('hovered');
                this.animateCard(card, 'leave');
            });

            // Click effects
            card.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleCardSelection(card);
            });

            // Focus handling for accessibility
            card.addEventListener('focus', () => {
                card.classList.add('focused');
            });

            card.addEventListener('blur', () => {
                card.classList.remove('focused');
            });
        });
    }

    /**
     * Handle card selection with animation
     */
    handleCardSelection(card) {
        // Add selection animation
        card.classList.add('selected');
        
        // Get the target URL
        const targetUrl = card.getAttribute('onclick')?.match(/window\.location\.href='([^']+)'/)?.[1];
        
        if (targetUrl) {
            // Add loading state
            const button = card.querySelector('.btn-select');
            if (button) {
                button.innerHTML = '<span>Loading...</span><span class="loading-spinner"></span>';
            }
            
            // Navigate after animation
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300);
        }
    }

    /**
     * Card animation effects
     */
    animateCard(card, type) {
        const logo = card.querySelector('.distro-logo');
        
        if (type === 'hover') {
            logo.style.transform = 'scale(1.1) rotate(5deg)';
        } else {
            logo.style.transform = 'scale(1) rotate(0deg)';
        }
    }

    /**
     * Keyboard navigation support
     */
    setupKeyboardNavigation() {
        const cards = document.querySelectorAll('.distribution-card');
        
        // Make cards focusable
        cards.forEach((card, index) => {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `Select ${card.querySelector('.card-title').textContent}`);
            
            // Enter/Space key handling
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleCardSelection(card);
                }
                
                // Arrow key navigation
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const nextIndex = e.key === 'ArrowRight' ? 
                        (index + 1) % cards.length : 
                        (index - 1 + cards.length) % cards.length;
                    cards[nextIndex].focus();
                }
            });
        });
    }

    /**
     * Setup entrance animations
     */
    setupAnimations() {
        // Animate cards on page load
        const cards = document.querySelectorAll('.distribution-card');
        const features = document.querySelectorAll('.feature-item');
        
        // Stagger card animations
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 200 + (index * 150));
        });

        // Animate feature items when they come into view
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, observerOptions);

        features.forEach(feature => {
            feature.style.opacity = '0';
            feature.style.transform = 'translateY(20px)';
            feature.style.transition = 'all 0.5s ease';
            observer.observe(feature);
        });
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new DistributionSelector());
} else {
    new DistributionSelector();
}