const http = require('http');
const fs = require('fs');

const PORT = 3500;

http.createServer(function (req, res) {
  const url = req.url;

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  switch (url) {
    case '/':
      res.write('<h1>Main</h1>');
      res.end();
      break;
    case '/contact':
      let file = fs.readFileSync('./public/contact.html', { encoding: 'utf8', flag: 'r' });
      res.write(file);
      res.end();
      break;
    default:
      if (url.includes('/images')) {
        fs.readFile('./public' + url, {}, function (error, data) {
          if (error) {

          }
          console.log('--------- get --------');
          res.setHeader("Content-Type", "image/jpeg");
          res.write(data);
          res.end();
        });
      } else {
        res.write('<h1>404</h1>');
        res.end();
      }
  }
}).listen(PORT);