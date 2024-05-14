import { RtMessageDTO } from "@fluyappgo/commons";

import { io } from 'socket.io-client'

const SocketApi = (url: string) => {

    const token = `Bearer ${localStorage.getItem('token')}`;
    const socket = io(url,
        {
            auth: { token },
            path: "/socket/socket.io",
            transports: ["websocket"]

        })


    function message(onMessageReceived: any) {
        socket.on('message', onMessageReceived)
    }

    function unregisterHandler() {
        socket.off('message');
        socket.off('counter');
        socket.off('done');
        socket.disconnect();
    }

    socket.on('error', function () {
        //location.reload()
    })


    socket.on('connect_error', function () {
        //location.reload();
    })

    socket.on('reconnect', function () {
        //location.reload()
        console.log('reconnect fired!');
    });

    function join(data: RtMessageDTO, cb: any) {
        socket.emit('subscribe', data, cb)
    }

    function done(onMessageReceived: any) {
        socket.on('done', onMessageReceived)
    }

    function counter(onMessageReceived: any) {
        socket.on('counter', onMessageReceived)
    }

    function leave(data: RtMessageDTO, cb: any) {
        socket.emit('unsubscribe', data, cb)
    }

    function getAvailableUsers(counter: any) {
        socket.on('counter', counter)
    }

    function disconnect(customFunc: any) {
        socket.on("disconnect", customFunc);
    }


    return {
        join,
        done,
        leave,
        message,
        counter,
        getAvailableUsers,
        unregisterHandler,
        disconnect
    }
}

export { SocketApi };