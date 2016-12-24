/*
	Websocketserver:
		Class: WebSocketServer(options, [callback])
		Events:
			connection
			error
			headers
			listening
		Attribs:
			clients
		Methods:
			close()

		Class: WebSocket(address, [protocols], [options])
		Events:
			close
			error
			message
			open
			ping
			pong
			unexpected-response


*/

var port = process.env.PORT || 8181;

var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: port });


wss.on('connection', function(ws) {
    //console.log('client connected');
    ws.on('message', function(message) {
        ws.send("Got from you: " + message);
    });

    ws.on('close',function(){
    	//var end_time = (new Date()).getTime() / 1000;
    	//console.log("Time took is: " + (end_time - client_count['start']) + " seconds");
    })
});
