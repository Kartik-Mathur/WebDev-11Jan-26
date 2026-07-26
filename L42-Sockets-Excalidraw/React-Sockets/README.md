# React + Node Socket.IO Chat

A minimal real-time chat application built with:

- React and Vite
- Node.js and Express
- Socket.IO

## Requirements

Use Node.js 18 or newer.

## Run the server

```bash
cd server
npm install
npm run dev
```

The server runs at `http://localhost:3001`.

## Run the client

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Open the Vite URL, normally `http://localhost:5173`.

## Test Socket.IO

Open the client in two browser tabs. Enter different names and send a message. Both tabs should receive each message instantly.

## Event flow

1. React emits a `chat:message` event.
2. The Node server receives it.
3. The server broadcasts the event with `io.emit()`.
4. Every connected React client updates its messages list.
