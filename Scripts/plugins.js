// plugins.js - CSP-friendly version
var Tawk_API = Tawk_API || {};
var Tawk_LoadStart = new Date();

// Function to load Tawk.to with error handling
function loadTawkTo() {
    try {
        var s1 = document.createElement("script");
        var s0 = document.getElementsByTagName("script")[0];
        
        s1.async = true;
        s1.src = 'https://embed.tawk.to/685fddb6b431d41910941002/1iur7k50t';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', 'anonymous');
        
        // Add error handling
        s1.onerror = function() {
            console.warn('Tawk.to widget failed to load due to CSP restrictions');
            // You could show a fallback contact form here
            showFallbackContact();
        };
        
        s1.onload = function() {
            console.log('Tawk.to widget loaded successfully');
        };
        
        s0.parentNode.insertBefore(s1, s0);
        
    } catch (error) {
        console.error('Error loading Tawk.to:', error);
        showFallbackContact();
    }
}

// Fallback contact method
function showFallbackContact() {
    // Create a simple contact button as fallback
    var fallbackBtn = document.createElement('div');
    fallbackBtn.id = 'fallback-contact';
    fallbackBtn.innerHTML = 'Contact Us';
    fallbackBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #007bff;
        color: white;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        z-index: 9999;
        font-family: Arial, sans-serif;
        font-size: 14px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    fallbackBtn.onclick = function() {
        // Redirect to contact page or show modal
        window.location.href = 'mailto:support@yourcompany.com';
        // Or: window.open('contact.html', '_blank');
    };
    
    document.body.appendChild(fallbackBtn);
}

// Load when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadTawkTo);
} else {
    loadTawkTo();
}
