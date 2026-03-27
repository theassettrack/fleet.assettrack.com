/**
 * Third-Party Analytics and Support Plugins
 * Last Updated: 2026-03-27
 */

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
