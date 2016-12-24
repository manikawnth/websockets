var WebSocket = require('ws');

var ws = new WebSocket('ws://localhost:8181');

var stime;
var etime;

var MAX = 10000;
var resp_count = 0;

ws.on('open', function open() {
    stime = (new Date()).getTime() / 1000;
    for (var i = 0; i < MAX; i++) {
        ws.send('something');
    }
});

ws.on('message', function(data, flags) {
	resp_count ++;
	if(resp_count == MAX){
		etime = (new Date()).getTime() / 1000;
		console.log ("Total time took is: " + (etime-stime) + " seconds");
		ws.close();
	}
})
