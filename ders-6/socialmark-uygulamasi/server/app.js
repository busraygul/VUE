const socketio = require("socket.io");
const express = require("express");
const http = require("http");
const app = express();

const PORT = process.env.PORT || 2025;
const server = http.createServer(app)

const io = socketio(server, {
    cors : {
        origin: "*",
        methods: ["GET", "POST", "OPTIONS"],
    },
});

server.listen(PORT, () => {

    io.on("connection", socket => {
        console.log("AAAAAA");
        console.log(socket.id);
        socket.join("123")
        //! Karşılama mesajı
        //io.in(roomID.emit())
        socket.emit("WELCOME_MESSAGE", `hoşgeldin ${socket.id}...`);
        socket.on("NEW_BOOKMARK_EVENT", (bookmark) => {
            console.log("New Bookmark Geldi", bookmark);
            // io.emit("NEW_BOOKMARK_ADDED")
            // ! Gönderen hariç herkese bookmark bilgisini gönder
            socket.broadcast.emit("NEW_BOOKMARK_ADDED", bookmark)
        });
    });
})
