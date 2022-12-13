// const app = require("express");
import express from "express";
import router from "./app/routers/index.router";
import socketIo, { Server } from "socket.io";
import * as http from "http";
import routers from "./app/routers/index.router";
import { errorHandler } from "./app/middlewares/request-handler.middleware";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

for (const router of routers) {
  app.use("/api", router);
}

app.use(errorHandler);
const port = process.env.SERVER_PORT || 9000;
app.listen(port, () => {
  console.log("server on 9000");
});
