import { MESSAGE_TYPES } from '../../../common/constants';

let clientSendSection: (value: number) => void;

const initClient = (progressStore: unknown) => {

    const client = new WebSocket('ws://localhost:9000');

    client.onopen = () => {
        console.log('Подключился');
    };

    client.onmessage = (message: { action: string, data: string }) => {
        console.log('Message: %s', message.data);
        const obj = JSON.parse(message.data);
        if (obj.action === MESSAGE_TYPES.GET_SECTION) {
            progressStore.setMasterSection(parseInt(obj.data));
        }
    };

    clientSendSection = (value: number) => {
        client.send(JSON.stringify({
            action: MESSAGE_TYPES.SET_SECTION,
            data: value.toString()
        }));
    }
}

export { initClient, clientSendSection };