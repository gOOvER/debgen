/**
 * Modern UI Enhancements for debgen
 * Adds modern interactions, animations, and user experience improvements
 */

class ModernUI {
    constructor() {
        this.init();
    }

    init() {
        this.setupLoadingAnimations();
        this.setupCopyToClipboard();
        this.setupFormValidation();
        this.setupThemeToggle();
        this.setupAnimations();
        this.setupNotifications();
        this.setupFormEnhancements();
    }

    /**
     * Setup loading animations and button states
     */
    setupLoadingAnimations() {
        const generateBtn = document.querySelector('.btn-generate');
        if (!generateBtn) return;

        generateBtn.addEventListener('click', () => {
            const buttonText = generateBtn.querySelector('.button-text');
            const loading = generateBtn.querySelector('.loading');
            
            if (buttonText && loading) {
                generateBtn.disabled = true;
                generateBtn.classList.add('loading-state');
                buttonText.textContent = 'Generating...';
                loading.classList.remove('hidden');

                // Reset after 2 seconds (or when generation completes)
                setTimeout(() => {
                    this.resetGenerateButton();
                }, 2000);
            }
        });
    }

    resetGenerateButton() {
        const generateBtn = document.querySelector('.btn-generate');
        const buttonText = generateBtn?.querySelector('.button-text');
        const loading = generateBtn?.querySelector('.loading');
        
        if (generateBtn && buttonText && loading) {
            generateBtn.disabled = false;
            generateBtn.classList.remove('loading-state');
            buttonText.textContent = 'Generate Sources List';
            loading.classList.add('hidden');
        }
    }

    /**
     * Enhanced copy to clipboard functionality
     */
    setupCopyToClipboard() {
        const copyButton = document.getElementById('copy-button');
        const textarea = document.getElementById('output-textarea');
        
        if (!copyButton || !textarea) return;

        copyButton.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(textarea.value);
                this.showNotification('✅ Copied to clipboard!', 'success');
                
                // Temporary button state change
                const originalText = copyButton.querySelector('.copy-text').textContent;
                copyButton.querySelector('.copy-text').textContent = 'Copied!';
                copyButton.classList.add('copied');
                
                setTimeout(() => {
                    copyButton.querySelector('.copy-text').textContent = originalText;
                    copyButton.classList.remove('copied');
                }, 2000);
                
            } catch (err) {
                // Fallback for older browsers
                textarea.select();
                document.execCommand('copy');
                this.showNotification('📋 Copied to clipboard!', 'success');
            }
        });
    }

    /**
     * Form validation and user feedback
     */
    setupFormValidation() {
        const mirrorSelect = document.getElementById('mirror-select');
        const releasesSelect = document.getElementById('releases-select');
        const generateBtn = document.querySelector('.btn-generate');

        const validateForm = () => {
            const isMirrorSelected = mirrorSelect.value !== 'none';
            const isReleaseSelected = releasesSelect.value !== 'none';
            
            if (generateBtn) {
                generateBtn.disabled = !(isMirrorSelected && isReleaseSelected);
                
                if (!isMirrorSelected || !isReleaseSelected) {
                    generateBtn.title = 'Please select a mirror and release first';
                } else {
                    generateBtn.title = 'Generate sources.list';
                }
            }
        };

        if (mirrorSelect && releasesSelect) {
            mirrorSelect.addEventListener('change', validateForm);
            releasesSelect.addEventListener('change', validateForm);
            validateForm(); // Initial validation
        }
    }

    /**
     * Theme toggle functionality (if needed in future)
     */
    setupThemeToggle() {
        // Theme preferences detection
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Listen for system theme changes
        prefersDark.addEventListener('change', (e) => {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        });
        
        // Set initial theme
        document.documentElement.setAttribute(
            'data-theme', 
            prefersDark.matches ? 'dark' : 'light'
        );
    }

    /**
     * Smooth animations and transitions
     */
    setupAnimations() {
        // Fade in output section when content is generated
        const outputSection = document.querySelector('.output-section');
        if (outputSection) {
            // Initially hide output section
            outputSection.style.opacity = '0';
            outputSection.style.transform = 'translateY(20px)';
            
            // Show with animation when textarea gets content
            const textarea = document.getElementById('output-textarea');
            if (textarea) {
                const observer = new MutationObserver(() => {
                    if (textarea.value.trim()) {
                        outputSection.style.transition = 'all 0.5s ease';
                        outputSection.style.opacity = '1';
                        outputSection.style.transform = 'translateY(0)';
                    }
                });
                
                observer.observe(textarea, { 
                    attributes: true, 
                    attributeFilter: ['value'] 
                });
                
                // Also listen for input events
                textarea.addEventListener('input', () => {
                    if (textarea.value.trim()) {
                        outputSection.style.transition = 'all 0.5s ease';
                        outputSection.style.opacity = '1';
                        outputSection.style.transform = 'translateY(0)';
                    }
                });
            }
        }

        // Smooth scrolling to output when generated
        this.setupSmoothScroll();
    }

    setupSmoothScroll() {
        const generateBtn = document.querySelector('.btn-generate');
        const outputSection = document.querySelector('.output-section');
        
        if (generateBtn && outputSection) {
            generateBtn.addEventListener('click', () => {
                setTimeout(() => {
                    outputSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 500);
            });
        }
    }

    /**
     * Notification system
     */
    setupNotifications() {
        // Create notification container if it doesn't exist
        if (!document.getElementById('notification-container')) {
            const container = document.createElement('div');
            container.id = 'notification-container';
            container.className = 'notification-container';
            document.body.appendChild(container);
        }
    }

    showNotification(message, type = 'info', duration = 3000) {
        const container = document.getElementById('notification-container');
        if (!container) return;

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        container.appendChild(notification);

        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 100);

        // Remove after duration
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => container.removeChild(notification), 300);
        }, duration);
    }

    /**
     * Enhanced form interactions
     */
    setupFormEnhancements() {
        // Format selector auto-update based on Ubuntu version
        const releasesSelect = document.getElementById('releases-select');
        const formatSelect = document.getElementById('format-select');
        
        if (releasesSelect && formatSelect) {
            releasesSelect.addEventListener('change', () => {
                const selectedRelease = releasesSelect.value;
                const ubuntu24Plus = ['noble', 'oracular']; // Ubuntu 24.04+
                
                if (ubuntu24Plus.includes(selectedRelease)) {
                    formatSelect.value = 'deb822';
                    this.showNotification('💡 Modern .sources format recommended for Ubuntu 24.04+', 'info');
                } else if (selectedRelease.startsWith('ubuntu') || 
                          ['mantic', 'lunar', 'jammy', 'focal'].includes(selectedRelease)) {
                    formatSelect.value = 'legacy';
                }
            });
        }

        // Enhanced select interactions
        this.enhanceSelectElements();
    }

    enhanceSelectElements() {
        const selects = document.querySelectorAll('.form-select');
        
        selects.forEach(select => {
            select.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            select.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
            });
            
            select.addEventListener('change', function() {
                this.parentElement.classList.add('has-value');
                
                // Add ripple effect
                const ripple = document.createElement('div');
                ripple.className = 'ripple';
                this.parentElement.appendChild(ripple);
                
                setTimeout(() => {
                    if (this.parentElement.contains(ripple)) {
                        this.parentElement.removeChild(ripple);
                    }
                }, 600);
            });
        });
    }

    /**
     * Accessibility enhancements
     */
    setupAccessibility() {
        // Skip link for keyboard navigation
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Enhanced keyboard navigation
        this.setupKeyboardNavigation();
    }

    setupKeyboardNavigation() {
        // Ctrl+Enter to generate
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                const generateBtn = document.querySelector('.btn-generate');
                if (generateBtn && !generateBtn.disabled) {
                    generateBtn.click();
                }
            }
            
            // Ctrl+C to copy (when textarea is focused)
            if (e.ctrlKey && e.key === 'c') {
                const textarea = document.getElementById('output-textarea');
                if (textarea && document.activeElement === textarea) {
                    const copyBtn = document.getElementById('copy-button');
                    if (copyBtn) copyBtn.click();
                }
            }
        });
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ModernUI());
} else {
    new ModernUI();
}

// Export for potential use in other scripts
window.ModernUI = ModernUI;