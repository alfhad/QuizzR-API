const http = require('http');
const fs = require("fs");
const path = require("path");

function send404(response){
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write('Error 404: Resource not found.');
  response.end();
}

const mimeLookup = {
  '.js': 'application/javascript',
  '.html': 'text/html'
};

const server = http.createServer((req, res) => {
  if(req.method == 'GET'){

    let fileurl;
    if(req.url == '/'){
      fileurl = 'index.html';
    }else{
      fileurl = req.url;
    }
    let filepath = path.resolve('./' + fileurl);

    let fileExt = path.extname(filepath);
    let mimeType = mimeLookup[fileExt];

    if(!mimeType) {
      send404(res);
      return;
    }

    fs.exists(filepath, (exists) => {
      if(!exists){
        send404(res);
        return;
      }

      res.writeHead(200, {'Content-Type': mimeType});
      fs.createReadStream(filepath).pipe(res);

    });

  }
}).listen(3000);
console.log("Server running at port 3000");
