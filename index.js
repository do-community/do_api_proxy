// libs
const connect  = require('connect')
const http     = require('http')
const process  = require ('process')
const proxy    = require('http-proxy-middleware');

// local vars
const apiUrl   = 'https://api.digitalocean.com';
const apiToken = process.env.DOTOKEN;
const headers  = {"Content-Type": "application/json", "Authorization": "Bearer " + apiToken};

// define the connect app
let app = connect();

// define http-proxy-middleware
let DOProxy = proxy({
  target: apiUrl,
  changeOrigin: true,
  headers: headers,
  logLevel: 'debug'
})


// define the route and map the proxy
app.use('/', DOProxy)

// fire up the server
http.createServer(app).listen(3000)

console.log('Server istening on port 3000')
