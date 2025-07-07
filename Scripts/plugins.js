// plugins.js - Simple version with fallback
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

(function(){
    try {
        var s1 = document.createElement("script");
        var s0 = document.getElementsByTagName("script")[0];
        
        s1.async = true;
        s1.src = 'https://embed.tawk.to/685fddb6b431d41910941002/1iur7k50t';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        
        // If Tawk.to fails to load, show simple contact button
        s1.onerror = function() {
            console.warn('Tawk.to widget blocked by CSP');
            
            // Create simple contact button
            var btn = document.createElement('div');
            btn.innerHTML = '💬 Contact';
            btn.style.cssText = `
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
                transition: all 0.3s ease;
            `;
            
            btn.onclick = function() {
                window.open('mailto:support@theassettrack.com?subject=Website Contact', '_blank');
            };
            
            btn.onmouseenter = function() {
                btn.style.background = '#0056b3';
                btn.style.transform = 'scale(1.05)';
            };
            
            btn.onmouseleave = function() {
                btn.style.background = '#007bff';
                btn.style.transform = 'scale(1)';
            };
            
            document.body.appendChild(btn);
        };
        
        s0.parentNode.insertBefore(s1, s0);
        
    } catch (error) {
        console.error('Error loading contact widget:', error);
    }
})();
