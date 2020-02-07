const extModule = require("./extModule");
const http = require('http');

// console.log(extModule);

var quotes = extModule.quotes;
// console.log(quotes[0]);


function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


// console.log(num);


http.createServer((req, res) => {
  res.writeHead(200, {"Content-type": "text/plain"});
  let num = getRandomArbitrary(0,quotes.length);
  res.write(quotes[num].toString());
  res.end();
}).listen(3000toString());