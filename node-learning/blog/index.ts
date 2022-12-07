// const app = require("express");
import * as express from "express";
import router from "./app/router";
import socketIo, { Server } from "socket.io";
import * as http from "http";

const app = express.default();
app.use("/api", router);
const httpServer = http.createServer(app);
const io = new Server();
io.on("connection", (socket) => {
  socket.emit("noArg");
  socket.emit("basicEmit", 1, "2", Buffer.from([3]));
  socket.emit("withAck", "4", (e) => {
    console.log(e);
  });
});

app.listen("9000", () => {
  console.log("server on 9000");
});
