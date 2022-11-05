const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html');
const status = fs.readFileSync('status.html');
const about = fs.readFileSync('about.html');

const server = http.createServer((req, res) => {
  console.log(req.url);
  url = req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(url == '/'){
    res.end(home);
  }
  else if(url == '/status'){
    res.end(status);
  }
  else if(url == '/about'){
    res.end(about);
  }
  else{
    res.end('404 Not Found!')
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});