const http = require('http');

// GET request with http module
const options = {
  hostname: 'localhost',
  port: 8124,
  path: '/',
  method: 'GET',
};

const req = http.request(options, res => {
  console.log(`StatusCode: ${res.statusCode}`);
  
  res.setEncoding('utf-8');
  res.on('data', d => {
    console.log('Data:', d);
  });

});

req.on('error', err => {
  console.log('Error:', err);
});

req.end(); // It won't make the get request without it, it will go to the rest
          // and then will suspend


// POST request with http module
const data = JSON.stringify({
  todo: 'By the milk'
});

const postOptions = {
  hostname: 'localhost',
  port: 8124,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Lenght': data.length
  },
};

const postReq = http.request(postOptions, res => {
  console.log('Statuscode:', res.statusCode);

  res.setEncoding('utf-8');
  res.on('data', d => {
    console.log(d);
  });
});

postReq.on('error', err => {
  console.log(err);
});

postReq.write(data);

postReq.end();