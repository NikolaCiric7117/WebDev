const http = require("http");

const host = "localhost";
const port = "3000";

const server = http.createServer((req, res) => {
  console.log("request made");
  res.write("hello server");
});

server.listen(port, host, () => {
  console.log("listenig for request on port 3000")
});