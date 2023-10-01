if (window.location.href.startsWith("https://open.spotify.com")){
  var script = document.createElement("script");
  fetch(chrome.extension.getURL("web-player.js")).then((res) => {
    if (res.ok) {
      res.text().then((txt) => {
        script.appendChild(document.createTextNode(txt));
        (document.head || document.documentElement).appendChild(script);
      });
    }
  });
}
