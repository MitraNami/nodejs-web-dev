const http = require('http');

const server = http.createServer(function(req, res) {
  // routing:
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');

  } else if (req.method === 'POST' && req.url === '/') {
    res.statusCode = 200;

    req.setEncoding('utf-8');
    req.on('data', d => {
      res.setHeader('Content-Type', 'text/plain');
      res.end(`Information Recieved: ${d}`);
    });
    
  }
  
});


server.listen(8124, () => {
  console.log('Server running at http://127.0.0.1:8124');
});

