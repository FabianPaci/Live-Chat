const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const PORT = 8000 || process.env.PORT;
const io = socketio(server);

// listen for messages

// connections and disconnections
io.on("connection", (socket) => {
  socket.on("chatMessage", (msg) => {
    io.emit("message", msg);
  });
  socket.emit("message", "welcome to live chat!");

  socket.broadcast.emit("message", "user has joined the chat");

  socket.on("disconnect", () => {
    io.emit("user has disconnected");
  });
});

app.use(express.static(path.join(__dirname, "public")));

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = io;
