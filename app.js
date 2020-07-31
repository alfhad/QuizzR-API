const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
    var s = "<h1>Sitaaron Ke Aage Jahaan Aur Bhi Hain.</h1><h1>Abhi Ishq Ke Imtihaan Aur Bhi Hain</h1>"
  res.end(s);
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
