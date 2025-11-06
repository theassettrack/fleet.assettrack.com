/**
 * Third-Party Analytics and Support Plugins
 * Last Updated: 2025-07-25
 */

/* ========================================
   GOOGLE ANALYTICS
   ======================================== */
(function() {
    const GA_ID = 'G-GCFEH135QK';
    
    // Initialize dataLayer and gtag function before script loads
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
        window.dataLayer.push(arguments);
    };
    
    // Configure Google Analytics
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    
    // Create and append the script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    
    // Error handling
    script.onerror = function() {
        console.error('Failed to load Google Analytics script');
    };
    
    const head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(script);
})();


/* ========================================
   UMAMI ANALYTICS
   ======================================== */
(function() {
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://cloud.umami.is/script.js';
    script.setAttribute('data-website-id', '3e200ede-61ef-4066-8c59-492be143c85e');

    // Error handling
    script.onerror = function() {
        console.error('Failed to load Umami Analytics script');
    };

    const head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(script);
})();


/* ========================================
   TAWK.TO LIVE CHAT
   ======================================== */

// Initialize Tawk.to API
var Tawk_API = Tawk_API || {};
var Tawk_LoadStart = new Date();

// Load Tawk.to script
(function() {
    const script = document.createElement('script');
    const firstScript = document.getElementsByTagName('script')[0];
    
    script.async = true;
    script.src = 'https://embed.tawk.to/685fddb6b431d41910941002/1iur7k50t';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    firstScript.parentNode.insertBefore(script, firstScript);
})();

// Tawk.to Widget Customization - Draggable functionality
Tawk_API.onLoad = function() {
    const tawkWidget = document.querySelector('iframe[title="tawk.to-widget"]');
    
    if (!tawkWidget) {
        console.error('Tawk.to widget not found.');
        return;
    }
    
    // Dragging state variables
    let isDragging = false;
    let initialX;
    let initialY;
    let currentXOffset = 20;
    let currentYOffset = 20;
    
    // Handle mousedown event - start dragging
    tawkWidget.addEventListener('mousedown', (e) => {
        isDragging = true;
        initialX = e.clientX;
        initialY = e.clientY;
        tawkWidget.style.pointerEvents = 'none';
    });
    
    // Handle mousemove event - drag the widget
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        e.preventDefault();
        
        const deltaX = e.clientX - initialX;
        const deltaY = e.clientY - initialY;
        const newXOffset = currentXOffset + deltaX;
        const newYOffset = currentYOffset + deltaY;
        
        // Update widget position using Tawk API
        Tawk_API.customStyle = {
            visibility: {
                desktop: {
                    xOffset: newXOffset,
                    yOffset: newYOffset,
                    position: 'bl'
                },
                mobile: {
                    xOffset: newXOffset,
                    yOffset: newYOffset,
                    position: 'bl'
                }
            }
        };
    });
    
    // Handle mouseup event - stop dragging
    document.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        
        isDragging = false;
        tawkWidget.style.pointerEvents = 'auto';
        
        // Update current position
        currentXOffset += (e.clientX - initialX);
        currentYOffset += (e.clientY - initialY);
    });
};
