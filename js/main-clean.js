// ===== Main JavaScript Functions (Clean Version) =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Main.js loaded successfully (Clean Version)');

    // Initialize all functions
    initDarkMode();
    initSmoothScroll();
    initBackToTop();
    initNavbar();
    initGallery();
    initSocialLinks();
    initIconCompatibility();
});

// ===== Dark Mode Functionality =====
function initDarkMode() {
    console.log('Initializing dark mode...');

    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    console.log('Saved theme:', savedTheme);

    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateDarkModeIcon(savedTheme);
        console.log('Applied saved theme:', savedTheme);
    }

    // Check system preference
    if (!savedTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const systemTheme = prefersDark ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', systemTheme);
        updateDarkModeIcon(systemTheme);
        console.log('Applied system theme:', systemTheme);
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateDarkModeIcon(newTheme);

            console.log('Theme changed from', currentTheme, 'to', newTheme);

            // Trigger a custom event for theme change
            const event = new CustomEvent('themeChanged', {
                detail: { theme: newTheme }
            });
            document.dispatchEvent(event);
        });
    } else {
        console.error('Dark mode toggle button not found!');
    }
}

// Update dark mode icon
function updateDarkModeIcon(theme) {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
        console.log('Icon updated for theme:', theme);
    }
}

// ===== Enhanced Smooth Scroll Functionality =====
function initSmoothScroll() {
    console.log('Initializing enhanced smooth scroll...');

    // Global variables for tracking
    let lastClickTime = 0;
    const clickDelay = 300;
    let scrollInProgress = false;

    // Enhanced link finder
    function findAllNavigationLinks() {
        const selectors = [
            'a[href^="#"]',
            '.btn[href^="#"]',
            'button[onclick*="scroll"]',
            '[data-scroll-to]'
        ];

        let allLinks = [];
        selectors.forEach(selector => {
            const links = document.querySelectorAll(selector);
            allLinks = allLinks.concat(Array.from(links));
        });

        const uniqueLinks = [...new Set(allLinks)];
        console.log(`Found ${uniqueLinks.length} navigation links using enhanced detection`);
        return uniqueLinks;
    }

    // Bind events to all navigation links
    function bindNavigationEvents() {
        const navLinks = findAllNavigationLinks();

        navLinks.forEach((link, index) => {
            const href = link.getAttribute('href') || link.getAttribute('data-scroll-to') || '';
            const text = (link.textContent || link.innerText || '').trim();
            console.log(`Binding Link ${index + 1}:`, href, text || '(no text)');

            // Clone and replace to remove existing events
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);

            // Add enhanced click handler
            newLink.addEventListener('click', handleSmoothScroll);
            newLink.addEventListener('touchstart', handleSmoothScroll);
        });

        return navLinks.length;
    }

    // Enhanced smooth scroll handler
    function handleSmoothScroll(e) {
        e.preventDefault();
        e.stopPropagation();

        // Debounce
        const currentTime = Date.now();
        if (currentTime - lastClickTime < clickDelay) {
            console.log('Click throttled, please wait...');
            return false;
        }
        lastClickTime = currentTime;

        // Prevent multiple simultaneous scrolls
        if (scrollInProgress) {
            console.log('Scroll already in progress...');
            return false;
        }

        const link = this;
        const targetId = link.getAttribute('href') ||
                        link.getAttribute('data-scroll-to') || '';

        console.log('Link clicked:', targetId, link.textContent.trim());

        if (!targetId || targetId === '#' || targetId.trim() === '') {
            console.log('No valid target found, skipping scroll');
            return false;
        }

        const cleanTargetId = targetId.startsWith('#') ? targetId : '#' + targetId;
        const targetElement = findTargetElement(cleanTargetId);

        if (targetElement) {
            scrollToElement(targetElement, cleanTargetId);
        } else {
            console.error('Target element not found for:', cleanTargetId);
            showScrollError(cleanTargetId);
        }

        return false;
    }

    // Find target element with multiple strategies
    function findTargetElement(targetId) {
        // Strategy 1: Direct ID match
        let targetElement = document.querySelector(targetId);

        // Strategy 2: Partial ID match
        if (!targetElement) {
            const idWithoutHash = targetId.replace('#', '');
            const candidates = document.querySelectorAll(`[id*="${idWithoutHash}"]`);
            if (candidates.length > 0) {
                targetElement = candidates[0];
                console.log('Found element using partial ID match:', targetElement);
            }
        }

        // Strategy 3: Name attribute match
        if (!targetElement) {
            const nameMatch = document.querySelector(`[name="${targetId.replace('#', '')}"]`);
            if (nameMatch) {
                targetElement = nameMatch;
                console.log('Found element using name attribute:', targetElement);
            }
        }

        // Strategy 4: Text content match
        if (!targetElement) {
            const targetText = targetId.replace('#', '').toLowerCase();
            const textCandidates = document.querySelectorAll('section, div');
            for (const candidate of textCandidates) {
                const text = (candidate.textContent || candidate.innerText || '').toLowerCase();
                if (text.includes(targetText)) {
                    targetElement = candidate;
                    console.log('Found element using text match:', targetElement);
                    break;
                }
            }
        }

        return targetElement;
    }

    // Enhanced scroll to element
    function scrollToElement(targetElement, targetId) {
        scrollInProgress = true;

        try {
            const navbar = document.querySelector('.navbar, .navigation, header');
            let navbarHeight = 70; // Default fallback

            if (navbar) {
                navbarHeight = navbar.offsetHeight || 70;
            }

            const targetPosition = targetElement.offsetTop - navbarHeight - 20;

            console.log('Scrolling to:', {
                target: targetId,
                position: targetPosition,
                navbarHeight: navbarHeight
            });

            // Use native smooth scroll if available
            if ('scrollBehavior' in document.documentElement.style) {
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                setTimeout(() => {
                    updateActiveNavLink(targetId);
                    scrollInProgress = false;
                    console.log('Smooth scroll completed to:', targetId);
                }, 1000);
            } else {
                // Fallback animation
                animateScroll(window.pageYOffset, targetPosition, 800, () => {
                    updateActiveNavLink(targetId);
                    scrollInProgress = false;
                    console.log('Animated scroll completed to:', targetId);
                });
            }

        } catch (error) {
            console.error('Error during scroll:', error);
            targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });
            scrollInProgress = false;
        }
    }

    // Animation fallback
    function animateScroll(startPosition, targetPosition, duration, callback) {
        const startTime = performance.now();
        const distance = targetPosition - startPosition;

        function animation(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            const currentPosition = startPosition + (distance * easeProgress);
            window.scrollTo(0, currentPosition);

            if (progress < 1) {
                requestAnimationFrame(animation);
            } else if (callback) {
                callback();
            }
        }

        requestAnimationFrame(animation);
    }

    // Show scroll error
    function showScrollError(targetId) {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = `Cannot find section: ${targetId}`;
        errorDiv.style.cssText = `
            position: fixed; top: 80px; right: 20px; background: #dc3545;
            color: white; padding: 10px 15px; border-radius: 5px;
            font-size: 14px; z-index: 10000; max-width: 250px;
        `;

        document.body.appendChild(errorDiv);

        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 3000);
    }

    // Update active navigation link
    function updateActiveNavLink(targetId) {
        try {
            const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === targetId) {
                    link.classList.add('active');
                }
            });
        } catch (error) {
            console.error('Error updating active nav link:', error);
        }
    }

    // Initial binding
    const boundLinks = bindNavigationEvents();
    console.log(`Successfully bound events to ${boundLinks} navigation links`);

    // Re-bind after dynamic content loads
    const observer = new MutationObserver(() => {
        setTimeout(bindNavigationEvents, 100);
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    return {
        rebind: bindNavigationEvents,
        scrollInProgress: () => scrollInProgress
    };
}

// ===== Update Active Navigation Link =====
function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// ===== Update Active Nav Link On Scroll =====
function updateActiveNavLinkOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70;
    const scrollPosition = window.pageYOffset + navbarHeight + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            updateActiveNavLink(`#${sectionId}`);
        }
    });
}

// ===== Scroll Event Listener =====
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        updateActiveNavLinkOnScroll();
    }, 100);
});

// ===== Back to Top Button =====
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== Navbar Functionality =====
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// ===== Gallery Functionality =====
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                if (img) {
                    const modal = document.createElement('div');
                    modal.className = 'gallery-modal';
                    modal.innerHTML = `
                        <div class="gallery-modal-content">
                            <span class="gallery-close">&times;</span>
                            <img src="${img.src}" alt="${img.alt}">
                        </div>
                    `;
                    document.body.appendChild(modal);

                    modal.addEventListener('click', function() {
                        this.remove();
                    });
                }
            });
        });
    }
}

// ===== Social Links Functionality =====
function initSocialLinks() {
    console.log('Initializing social links...');

    const socialLinks = document.querySelectorAll('.social-link, .social-link-large');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const platform = this.getAttribute('title') || this.querySelector('span')?.textContent || 'unknown';
            console.log('Social link clicked:', platform);
            trackSocialLinkClick(platform);
        });
    });
}

// Track social link clicks
function trackSocialLinkClick(platform) {
    console.log(`Social media link clicked: ${platform}`);
}

// Show WeChat QR Code
function showWeChatQR() {
    console.log('Showing WeChat QR code...');

    const modal = document.createElement('div');
    modal.className = 'wechat-modal-overlay';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.8); display: flex;
        justify-content: center; align-items: center; z-index: 9999;
        opacity: 0; transition: opacity 0.3s ease;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white; padding: 2rem; border-radius: 15px;
        text-align: center; max-width: 300px;
        transform: scale(0.8); transition: transform 0.3s ease;
    `;

    modalContent.innerHTML = `
        <h3 class="mb-3">Scan WeChat QR Code</h3>
        <div class="qr-code-placeholder mb-3" style="
            width: 200px; height: 200px; background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%, #f0f0f0);
            background-size: 20px 20px; background-position: 0 0, 10px 10px;
            border: 2px solid #ddd; border-radius: 10px;
            display: flex; align-items: center; justify-content: center;
            margin: 0 auto; color: #666; font-size: 14px;
        ">
            <div>
                <i class="fab fa-weixin fa-3x mb-2" style="color: #07c160;"></i>
                <p class="mb-0">Add WeChat</p>
                <small>Your WeChat ID</small>
            </div>
        </div>
        <p class="text-muted mb-0">Scan this QR code to add me on WeChat</p>
        <button class="btn btn-primary mt-3" onclick="this.closest('.wechat-modal-overlay').remove()">Close</button>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.opacity = '0';
            modalContent.style.transform = 'scale(0.8)';
            setTimeout(() => modal.remove(), 300);
        }
    });

    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            modal.style.opacity = '0';
            modalContent.style.transform = 'scale(0.8)';
            setTimeout(() => {
                modal.remove();
                document.removeEventListener('keydown', handleEscape);
            }, 300);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Make showWeChatQR available globally
window.showWeChatQR = showWeChatQR;

// ===== Icon Compatibility Check =====
function initIconCompatibility() {
    console.log('Initializing icon compatibility check...');
    checkFontAwesomeLoading();
    validateSocialIcons();
    addIconFallbacks();
}

function checkFontAwesomeLoading() {
    const testElement = document.createElement('i');
    testElement.className = 'fas fa-test';
    document.body.appendChild(testElement);

    const computedStyle = window.getComputedStyle(testElement);
    const isFontAwesomeLoaded = computedStyle.fontFamily.includes('Font Awesome') ||
                                  computedStyle.fontFamily.includes('FontAwesome');

    document.body.removeChild(testElement);

    if (!isFontAwesomeLoaded) {
        console.warn('Font Awesome not properly loaded');
        addFontAwesomeFallback();
    } else {
        console.log('Font Awesome loaded successfully');
    }
}

function validateSocialIcons() {
    const iconMappings = {
        'fa-github': {
            testClass: 'fab fa-github',
            fallback: 'GitHub',
            alternatives: ['fab fa-git-alt', 'fas fa-code-branch']
        },
        'fa-graduation-cap': {
            testClass: 'fas fa-graduation-cap',
            fallback: 'Scholar',
            alternatives: ['fas fa-user-graduate', 'fas fa-university']
        },
        'fa-researchgate': {
            testClass: 'fab fa-researchgate',
            fallback: 'RG',
            alternatives: ['fas fa-flask', 'fas fa-microscope']
        },
        'fa-weixin': {
            testClass: 'fab fa-weixin',
            fallback: 'WeChat',
            alternatives: ['fas fa-comment', 'fas fa-comments']
        }
    };

    Object.keys(iconMappings).forEach(iconKey => {
        const iconConfig = iconMappings[iconKey];
        const elements = document.querySelectorAll(`.${iconKey}`);

        if (elements.length > 0) {
            const isValid = validateIcon(iconConfig.testClass);
            if (!isValid) {
                console.warn(`Icon ${iconKey} not found, adding fallback`);
                replaceIconsWithFallback(elements, iconConfig);
            } else {
                console.log(`Icon ${iconKey} is valid`);
            }
        }
    });
}

function validateIcon(iconClass) {
    const testElement = document.createElement('i');
    testElement.className = iconClass;
    document.body.appendChild(testElement);

    const computedStyle = window.getComputedStyle(testElement);
    const isVisible = computedStyle.fontFamily.includes('Font Awesome') ||
                     computedStyle.fontFamily.includes('FontAwesome');

    document.body.removeChild(testElement);
    return isVisible;
}

function replaceIconsWithFallback(elements, config) {
    elements.forEach(element => {
        const parent = element.parentElement;
        const title = parent.getAttribute('title') || config.fallback;

        for (const alternative of config.alternatives) {
            if (validateIcon(alternative)) {
                element.className = alternative;
                console.log(`Replaced with alternative: ${alternative}`);
                return;
            }
        }

        element.style.display = 'none';

        const textSpan = document.createElement('span');
        textSpan.textContent = config.fallback;
        textSpan.className = 'icon-fallback';
        textSpan.setAttribute('title', title);

        parent.insertBefore(textSpan, element);
        console.log(`Replaced with text fallback: ${config.fallback}`);
    });
}

function addFontAwesomeFallback() {
    const fallbackLink = document.createElement('link');
    fallbackLink.rel = 'stylesheet';
    fallbackLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    fallbackLink.crossOrigin = 'anonymous';

    document.head.appendChild(fallbackLink);

    console.log('Added Font Awesome fallback CDN');

    setTimeout(() => {
        checkFontAwesomeLoading();
        validateSocialIcons();
    }, 2000);
}

function addIconFallbacks() {
    const allIcons = document.querySelectorAll('.fab, .fas, .far');
    let missingIcons = 0;

    allIcons.forEach(icon => {
        const computedStyle = window.getComputedStyle(icon);
        const isIconVisible = computedStyle.fontFamily.includes('Font Awesome') ||
                             computedStyle.fontFamily.includes('FontAwesome');

        if (!isIconVisible) {
            missingIcons++;
            const parent = icon.parentElement;
            const title = parent.getAttribute('title') || 'Icon';

            icon.style.display = 'none';

            const textSpan = document.createElement('span');
            textSpan.textContent = title.charAt(0).toUpperCase();
            textSpan.className = 'icon-fallback';
            textSpan.setAttribute('title', title);

            parent.insertBefore(textSpan, icon);
        }
    });

    if (missingIcons > 0) {
        console.log(`Added fallbacks for ${missingIcons} missing icons`);
    }
}

// Export for global access
window.initIconCompatibility = initIconCompatibility;

// ===== Debug Functions =====
function debugDarkMode() {
    console.group('Dark Mode Debug Info');
    console.log('Current theme:', document.documentElement.getAttribute('data-theme'));
    console.log('Saved theme:', localStorage.getItem('theme'));
    console.log('Dark mode toggle button:', document.getElementById('darkModeToggle'));
    console.log('CSS variables applied:', getComputedStyle(document.documentElement).getPropertyValue('--bg-dark'));
    console.groupEnd();
}

// Make debug function available globally for testing
window.debugDarkMode = debugDarkMode;

// Initialize debug on page load (remove in production)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    setTimeout(debugDarkMode, 2000);
}