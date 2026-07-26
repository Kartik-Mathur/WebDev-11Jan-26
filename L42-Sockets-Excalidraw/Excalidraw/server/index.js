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

  socket.on("update:elements", (payload) => {
    const elements = payload.elements;
    console.log(elements);
    if (elements.length <= 0) return;
    io.emit("new:elements", {
      newElements: elements
    });
  });



  socket.on("disconnect", () => {
    console.log(`Disconnected: ${socket.id}`);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
