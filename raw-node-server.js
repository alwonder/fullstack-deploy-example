const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.html)
  if (req.url === '/test' && req.method === 'GET') {
    res.writeHead(200, { "content-type": 'text/plain' });
    res.end('Hello')
  } else {
    res.writeHead(404);
    res.end('Not found')
  }
})

server.listen(3000);
