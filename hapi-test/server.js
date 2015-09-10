var Hapi = require('hapi');
var Request = require('request');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
            var read = Request.get('https://google.com');
            read.on('response', function (response) {
              reply(response);
            });
        }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
            reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
        }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
