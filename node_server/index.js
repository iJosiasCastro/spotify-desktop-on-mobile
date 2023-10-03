const http = require("http");
const axios = require("axios");
const url = require("url");

const { getRandom } = require("random-useragent");

const urlRegex =
  /^https:\/\/open\.spotifycdn\.com\/cdn\/build\/web-player\/web-player\.[a-f0-9]+\.js$/;

http
  .createServer(async function(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const queryParameters = parsedUrl.query;

    const urlToFetch = queryParameters.url;

    console.log("Request URL:", req.url);
    console.log("Query Parameters:", queryParameters);

    if (urlRegex.test(urlToFetch)) {
      const config = {
        method: "get",
        url: urlToFetch,
        headers: {
          Accept: "*/*",
          Connection: "keep-alive",
          "User-Agent": getRandom(),
        },
      };

      try {
        const response = await axios(config);
        let text = response.data.replace(
          'case 0:case 180:e=window.screen.width;break;default:e=window.screen.height',
          'case 0:case 180:e=500;break;default:e=500'
        );

        res.write(text);
        res.end();
      } catch (error) {
        console.error("Axios error:", error);
        res.write("An error occurred while fetching the data.");
        res.end();
      }
    } else {
      res.write("The URL does not match the specified pattern.");
      res.end();
    }
  })
  .listen(8080);
