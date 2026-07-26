import express from "express";
import { createServer } from "node:http";
import { randomUUID } from "node:crypto";
import cors from "cors";
import { Server } from "socket.io";

const PORT = process.env.PORT || 3001;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

const app = express();
app.use(cors({ origin: CLIENT_URL }));

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: CLIENT_URL,
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log(`Connected: ${socket.id}`);

  socket.on("chat:message", (payload) => {
    const username = String(payload?.username || "Anonymous").trim();
    const text = String(payload?.text || "").trim();

    if (!text) return;

    io.emit("chat:message", {
      id: randomUUID(),
      username: username || "Anonymous",
      text,
      sentAt: new Date().toISOString()
    });
  });

  socket.on("disconnect", () => {
    console.log(`Disconnected: ${socket.id}`);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
