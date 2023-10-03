document.addEventListener('DOMContentLoaded', function() {
  
    const urlRegex = /^https:\/\/open\.spotifycdn\.com\/cdn\/build\/web-player\/web-player\.[a-f0-9]+\.js$/;
    const scriptElements = document.querySelectorAll('script');
    
    for (const scriptElement of scriptElements) {
      const src = scriptElement.getAttribute('src');
      if (src && urlRegex.test(src)) {
        
        let src = 'https://spotify-desktop-on-mobile-api--josiascastro200.repl.co/?url=' + scriptElement.src;
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        (document.head || document.documentElement).appendChild(script);


        break;
      }
    }
});