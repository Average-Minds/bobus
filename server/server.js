"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var constants_1 = require("../common/constants");
var clients = new Set();
var section = 0;
var server = new ws_1.WebSocketServer({ port: 9000 });
var onConnect = function (client) {
    client.on('error', console.error);
    clients.add(client);
    console.log('Пользователь подключился', clients.size);
    client.send(JSON.stringify({ action: constants_1.MESSAGE_TYPES.GET_SECTION, data: section }));
    client.on('close', function () {
        var closeResult = clients.delete(client);
        console.log('Пользователь отключился', closeResult, clients.size);
    });
    client.on('message', function (message) {
        try {
            var jsonMessage = JSON.parse(message);
            switch (jsonMessage.action) {
                case constants_1.MESSAGE_TYPES.SET_SECTION:
                    section = jsonMessage.data;
                    clients.forEach(function (client) {
                        client.send(JSON.stringify({ action: constants_1.MESSAGE_TYPES.GET_SECTION, data: section }));
                    });
                    break;
                default:
                    console.log('Неизвестная команда');
                    break;
            }
        }
        catch (error) {
            console.log('Ошибка', error);
        }
    });
};
server.on('connection', onConnect);
console.log('Сервер запущен на 9000 порту');
