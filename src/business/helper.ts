export function sendMessage(socket: WebSocket | null, action: string, data: object) {
    if (socket === null) {
        return
    }
    socket.send(JSON.stringify({action, data}))
}