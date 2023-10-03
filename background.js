(function () {
  chrome.webRequest.onHeadersReceived.addListener(
    (details)=>{
      const urlPattern = /^https:\/\/open\.spotifycdn\.com\/cdn\/build\/web-player\/web-player\.[a-f0-9]+\.js$/;
      if (urlPattern.test(details.url)) {
        let resultingUrl = 'javascript:';
        return { redirectUrl: resultingUrl };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking", "responseHeaders"]
  );
})();
