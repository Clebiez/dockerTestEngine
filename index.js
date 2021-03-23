var Docker = require('dockerode');
var docker = new Docker({socketPath: '//./pipe/docker_engine'});

console.log('STARTED');

// console.log(docker);
// docker.listContainers(function (err, containers) {
//     console.log(containers);
// });

// const container = docker.getContainer('conduit_api_1');

// container.stats((err, data) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(data);
// });

const http = require('http');

const options = {
  socketPath: '//./pipe/docker_engine',
  path: '/v1.40/containers/conduit_api_1/stats',
  method: 'GET',
};

const callback = res => {
  res.setEncoding('utf8');
  res.on('data', data => console.log(data));
  res.on('error', data => console.error(data));
};

const clientRequest = http.request(options, callback);
clientRequest.end();