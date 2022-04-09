const http = require("http");
const port = 3000;
const cheerio = require("cheerio");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const request = require("request");

  request(
    "https://clarity.microsoft.com/projects/view/ajpoyyhqau/dashboard?date=Last%203%20days",
    function (error, response, body) {
      console.error("error:", error);
      const cheer = cheerio.load(body);
      cheer.html();
    }
  );
});

server.listen(port, () => {
  console.log(`Server running at PORT:${port}/`);
});
