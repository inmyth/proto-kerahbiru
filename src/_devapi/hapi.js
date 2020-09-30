const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    return;
  } else if (req.url === '/workers') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    const r = [
      {
        name: "Martin",
        title : "Welder",
        location: "Bandung"
      },
      {
        name: "Budi",
        title : "HVAC",
        location: "Jakarta"
      },
      {
        name: "Cahyadi",
        title : "Forklift",
        location: "Surabaya"
      },
      {
        name: "Utama",
        title : "Crane",
        location: "Semarang"
      },
      {
        name: "AB",
        title : "Welder",
        location: "Bandung"
      },
      {
        name: "BC",
        title : "HVAC",
        location: "Jakarta"
      },
      {
        name: "DE",
        title : "Forklift",
        location: "Surabaya"
      },
      {
        name: "EF",
        title : "Crane",
        location: "Semarang"
      },
      {
        name: "FG",
        title : "Welder",
        location: "Bandung"
      },
      {
        name: "HI",
        title : "HVAC",
        location: "Jakarta"
      },
      {
        name: "IJ",
        title : "Forklift",
        location: "Surabaya"
      },
      {
        name: "JK",
        title : "Crane",
        location: "Semarang"
      },
    ]


    res.end(JSON.stringify(r));
    return;
  }
  else {
    res.end('Hello World');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});