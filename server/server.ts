import { WebSocketServer } from 'ws';
import { MESSAGE_TYPES } from '../common/constants';

const clients = new Set();
let section = 0;

const server = new WebSocketServer({ port: 9000 });

const onConnect = (client) => {
    client.on('error', console.error);

    clients.add(client);
    console.log('Пользователь подключился', clients.size);

    client.send(JSON.stringify({ action: MESSAGE_TYPES.GET_SECTION, data: section }));

    client.on('close', () => {
        const closeResult = clients.delete(client);
        console.log('Пользователь отключился', closeResult, clients.size);
    });

    client.on('message', (message) => {
        try {
            const jsonMessage = JSON.parse(message);
            switch (jsonMessage.action) {
                case MESSAGE_TYPES.SET_SECTION:
                  section = jsonMessage.data;
                  clients.forEach(function(client) {
                    client.send(JSON.stringify({ action: MESSAGE_TYPES.GET_SECTION, data: section }));
                  });
                    break;
                default:
                    console.log('Неизвестная команда');
                    break;
            }
        } catch (error) {
            console.log('Ошибка', error);
        }
    });
}

server.on('connection', onConnect);

console.log('Сервер запущен на 9000 порту');