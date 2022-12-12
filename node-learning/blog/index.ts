// const app = require("express");
import express from "express";
import router from "./app/router";
import socketIo, { Server } from "socket.io";
import * as http from "http";
import routers from "./app/router";
import { errorHandler } from "./app/middleware/request-handler";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(cors());

for (const router of routers) {
  app.use("/api", router);
}

app.listen("9000", () => {
  console.log("server on 9000");
});
