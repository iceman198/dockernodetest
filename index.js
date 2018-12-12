// This test was based off the instructions found here:
//    https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

// Docker build:
//    $docker build -t iceman198/node-test-app .
//      -t <username>/<imagename>: tag your image with the given name
//    this command will build the image and store it in your local docker

// Run this:
//    $docker run --name sean-test -p 8888:8888 -d iceman198/node-test-app
//      --name : gives the container a specific name rather than an auto-generated name
//      -p ####:####  : forward a port...first is host, 2nd is the app port
//      -d <username>/<imagename> : run "detached"
//    this command will launch the image in a docker container in 'detached' mode

'use strict';

const express = require('express');

// Constants
const PORT = 8888;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('This is my nodejs express app running in docker!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);