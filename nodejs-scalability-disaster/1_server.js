const http = require('http');
const url = require('url');

const server = http.createServer(function(req, res) {

  const queryObj = url.parse(req.url, true).query;
  const num = queryObj['n'];
  if (num) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    const n = Number(num);
    const fibo = fibonacci(n); // blocks the execution thread, makes the server unresponsive
    res.end(`Fibonacci(${n}) = ${fibo}`);

  } else {
    res.statusCode = 404;
    res.end('Error: No number provided!');
  }
  
});


server.listen(3000, () => {
  console.log('Server is running on port 3000');
});


const fibonacci = function(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n-1) + fibonacci(n-2);
};