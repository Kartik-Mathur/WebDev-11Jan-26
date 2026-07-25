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
let allChats = [];

io.on('connection', (socket) => {

    socket.on('join', ({ name }) => {
        console.log("User name received", name);
        users.set(socket, name);
        socket.emit('welcome', {
            message: "Welcome to the chat",
            activeUsers: users.size,
            allChats
        })

        io.emit('update-user-count', {
            activeUsers: users.size
        })
    })


    socket.on('chat-message', ({ message }) => {
        console.log("Name" ,users.get(socket));
        allChats.push({
            user: users.get(socket),
            message
        })

        socket.broadcast.emit('chat-received', {
            message,
            user: users.get(socket)
        })
    })
    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
        users.delete(socket);
        io.emit('update-user-count', {
            activeUsers: users.size
        })
    });
});

// app.listen kia toh nhi chlega
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});