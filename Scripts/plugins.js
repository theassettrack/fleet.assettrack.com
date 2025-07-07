var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/685fddb6b431d41910941002/1iur7k50t';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

// Ensure the Tawk_API is ready
Tawk_API.onLoad = function() {
    // Get the Tawk.to widget iframe
    // Note: The selector might change; you may need to inspect the element to find the correct ID or class.
    const tawkWidget = document.querySelector('iframe[title="tawk.to-widget"]');

    if (!tawkWidget) {
        console.error('Tawk.to widget not found.');
        return;
    }

    let isDragging = false;
    let initialX;
    let initialY;
    let currentXOffset = 20; // Your initial X offset
    let currentYOffset = 20; // Your initial Y offset

    tawkWidget.addEventListener('mousedown', (e) => {
        isDragging = true;
        initialX = e.clientX;
        initialY = e.clientY;
        // Make the iframe ignore pointer events while dragging to prevent it from capturing the mouse
        tawkWidget.style.pointerEvents = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) {
            return;
        }

        e.preventDefault();

        const deltaX = e.clientX - initialX;
        const deltaY = e.clientY - initialY;

        // Update the offsets based on how far the mouse has moved
        const newXOffset = currentXOffset + deltaX;
        const newYOffset = currentYOffset + deltaY;

        // Use the Tawk_API to move the widget
        Tawk_API.customStyle = {
            visibility: {
                desktop: {
                    xOffset: newXOffset,
                    yOffset: newYOffset,
                    position: 'bl' // Ensure position is set
                },
                mobile: {
                    xOffset: newXOffset,
                    yOffset: newYOffset,
                    position: 'bl' // Ensure position is set
                }
            }
        };
    });

    document.addEventListener('mouseup', (e) => {
        if (!isDragging) {
            return;
        }

        isDragging = false;
        // Re-enable pointer events on the iframe
        tawkWidget.style.pointerEvents = 'auto';

        // Update the current offsets to the final dragged position
        currentXOffset += (e.clientX - initialX);
        currentYOffset += (e.clientY - initialY);
    });
};
