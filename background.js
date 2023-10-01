chrome.webRequest.onHeadersReceived.addListener(
  (details)=>{
    if(details.url == "https://open.spotifycdn.com/cdn/build/web-player/web-player.34af1eea.js"){
      let resultingUrl = 'javascript:'
      return { redirectUrl: resultingUrl }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking", "responseHeaders"]
);
