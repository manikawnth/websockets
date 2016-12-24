var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')
var stime;
var etime;
var i = 0;
var MAX = 1000;
var resp_count = 0;
client.on('connect', function() {
    client.subscribe('presence')
    for (i = 0; i < MAX; i++) {
        if (i == 0) {
            stime = (new Date()).getTime() / 1000;
        }
        client.publish('presence', 'Hello mqtt')
    }
})

client.on('message', function(topic, message) {
    // message is Buffer
    resp_count++;
    if (resp_count == MAX) {
        etime = (new Date()).getTime() / 1000;
        console.log("Total time took is: " + (etime - stime) + " seconds");
        client.end()
    }
    //console.log(message.toString())

})
