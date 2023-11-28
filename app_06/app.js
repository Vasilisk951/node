const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3500;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image;svg+xml',
  '.wav': 'audio/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

function staticFile(res, filePath, ext) {
  res.setHeader("Content-Type", mimeTypes[ext]);
  fs.readFile('./public' + filePath, (error, data) => {
    if (error) {
      res.statusCode = 404;
      res.end();
    }
    res.end(data);
  })
};


http.createServer(function (req, res) {
  const url = req.url;

  switch (url) {
    case '/':
      res.write('<h1>Main Page</h1>');
      res.end();
      break;
    case '/contact':
      staticFile(res, '/contact.html', '.html');
      break;
    default:
      const extName = String(path.extname(url)).toLocaleLowerCase();
      if (mimeTypes[extName]) {
        staticFile(res, url, extName);
      } else {
        res.statusCode = 404;
        res.end();
      }
  }

}).listen(PORT);