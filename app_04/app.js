const http = require('http');
const fs = require('fs');

const PORT = 3500;

http.createServer(function (req, res) {
  const url = req.url;

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  switch (url) {
    case '/':
      res.write('<h1>Main</h1>');
      break;
    case '/contact':
      let file = fs.readFileSync('contact.html', { encoding: 'utf8', flag: 'r' });
      res.write(file);
      break;
    default:
      res.write('<h1>404</h1>');
  }
  res.end();
}).listen(PORT);