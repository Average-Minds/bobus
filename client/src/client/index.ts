let clientSendPercent = null;

const initClient = (progressStore) => {

    const client = new WebSocket('ws://localhost:9000');

    client.onopen = () => {
        console.log('Подключился');
    };

    client.onmessage = (message: { action: string, data: number }) => {
        console.log('Message: %s', message.data);
        const obj = JSON.parse(message.data);
        if (obj.action === 'GET_PERCENT') {
            progressStore.setProgress(obj.data);
        }
    };

    clientSendPercent = (value: number) => {
        client.send(JSON.stringify({
            action: 'SET_PERCENT',
            data: value.toString()
        }));
    }
}

export { initClient, clientSendPercent };