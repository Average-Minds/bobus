import WebSocket, { WebSocketServer } from 'ws';

const clients = [];
let section = 0;

const server = new WebSocketServer({ port: 9000 });

const onConnect = (client) => {
    client.on('error', console.error);

    console.log('Новый пользователь');
    clients.push(client);

    client.send(JSON.stringify({ action: 'GET_SECTION', data: section }));

    client.on('close', () => {
        console.log('Пользователь отключился');
        // TODO: Удалить пользователя из clients!!!
    });

    client.on('message', (message) => {
        console.log(message);
        try {
            const jsonMessage = JSON.parse(message);
            switch (jsonMessage.action) {
                case 'SET_SECTION':
                  section = jsonMessage.data;
                  clients.forEach(function(client) {
                    client.send(JSON.stringify({ action: 'GET_SECTION', data: section }));
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