let clientSendSection = (value: number) => {};

const initClient = (progressStore) => {

    const client = new WebSocket('ws://localhost:9000');

    client.onopen = () => {
        console.log('Подключился');
    };

    client.onmessage = (message: { action: string, data: number }) => {
        console.log('Message: %s', message.data);
        const obj = JSON.parse(message.data);
        if (obj.action === 'GET_SECTION') {
            progressStore.setSection(parseInt(obj.data));
        }
    };

    clientSendSection = (value: number) => {
        client.send(JSON.stringify({
            action: 'SET_SECTION',
            data: value.toString()
        }));
    }
}

export { initClient, clientSendSection };