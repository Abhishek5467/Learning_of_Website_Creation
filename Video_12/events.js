import * as events from 'events';

let eventEmitter = new events.EventEmitter();

let connectHandler = function connected(){
    console.log("connection successful.");
    eventEmitter.emit('data_recieved');
}

eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_recieved', function(){
    console.log("data recieved successfully.");
});

eventEmitter.emit('connection');
console.log("Program Ended.");