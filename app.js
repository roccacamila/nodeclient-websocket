import StompJs from 'stompjs';
import SockJS from 'sockjs-client';

var stompClient = null;
var socket = new SockJS('http://core.deliver.ar/websocket');
    
stompClient = StompJs.over(socket);
stompClient.connect({}, function (frame) {
    console.log('Connected: ' + frame);
    stompClient.subscribe('/topic/user', function (user) {
            processMessage(JSON.parse(user.body));
        });
    stompClient.send("/app/cliente"); //cambiar cliente por el modulo que corresponda
    });

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}


function processMessage(message) {
    console.log(message);
}

