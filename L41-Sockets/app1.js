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

io.on('connection', (socket) => {

    socket.emit('welcome', {
        message: "Welcome to our chat app"
    })

    socket.on('send-msg', (msg) => {
        console.log(msg);
    })

    if (!eventsOn) {
        setInterval(() => {
            io.emit('price', {
                price: Math.floor(Math.random() * 10 + 1)
            })
        }, 1000);
        eventsOn = true;
    }
    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// app.listen kia toh nhi chlega
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});