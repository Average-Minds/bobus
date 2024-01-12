import { createServer } from 'https';
import { readFileSync } from 'fs';
import { WebSocketServer } from 'ws';
import { MESSAGE_TYPES } from '../common/constants.mjs';

const isDev = process.env.IS_LOCAL_DEVELOPMENT;
const PORT = 8080;
const clients = new Set();

let section = 0;
let server = null;

if (!isDev) {
    server = createServer({
        cert: readFileSync('./certificates/cert.pem'),
        key: readFileSync('./certificates/key.pem')
    });
}

const wss = new WebSocketServer(isDev ? { port: PORT } : { server });

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

wss.on('connection', onConnect);

if (isDev) {
    console.log(`Локальный сервер запущен на ${PORT} порту`);
} else {
    server.listen(PORT, () => {
        console.log(`Сервер запущен на ${PORT} порту`);
    });
}
