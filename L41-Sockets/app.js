const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const http = require('http');
const { Server } = require('socket.io');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.render('index');
})

let eventsOn = false;

let users = new Map();

io.on('connection', (socket) => {

    socket.on('join', ({ name }) => {
        users.set(socket, name);
        socket.emit('welcome', {
            message: "Welcome to the chat",
            activeUsers: users.size
        })
    })
    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
        users.delete(socket);
    });
});

// app.listen kia toh nhi chlega
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});