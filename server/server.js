// const express = require('express');
// const app = express();
// const server = require('http').Server(app);
// const io = require('socket.io')(server);
// const path = require('path');

// app.use('/static', express.static('public'));

// app.get('/**', (req, res) => {
//     return res.sendfile(path.join(__dirname + '/public/index.html'));
// });

// io.on('connection', socket => {
//     socket.on('join-room', (roomId, userId) => {
//         socket.join(roomId);
//         socket.to(roomId).broadcast.emit('user-connected', userId);

//         socket.on('disconnect', () => {
//             socket.to(roomId).broadcast.emit('user-disconnected', userId);
//         })
//     });
// })

// server.listen(3000);
var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
    host: "192.168.1.11",
    port: 9000,
    path: '/peerjs',
    ssl: {
        key: fs.readFileSync('./../certificates/key.pem', 'utf8'),
        cert: fs.readFileSync('./../certificates/cert.pem', 'utf8')
    }
});