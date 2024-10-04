// loader.js

(function() {
    console.log('Loader script is executing');
  
    const config = window.ChatbotConfig || {};
  
    // Function to load a script
    function loadScript(src, callback) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = callback;
      script.onerror = function(error) {
        console.error('Error loading script:', src, error);
      };
      document.head.appendChild(script);
    }
  
    // Load the chatbot script
    function loadChatbot() {
      console.log('Loading chatbot script');
      loadScript('https://cdn.jsdelivr.net/gh/moaad99/AI-Chatbot@v1.0.3/dist/chatbot-widget.js', function() {
        console.log('Chatbot script loaded');
  
        if (window.ChatbotWidget && typeof window.ChatbotWidget === 'function') {
          console.log('Initializing chatbot with config:', config);
          window.ChatbotWidget(config);
        } else {
          console.error('ChatbotWidget failed to load or is not a function.');
        }
      });
    }
  
    // Start loading the chatbot
    loadChatbot();
  })();
  