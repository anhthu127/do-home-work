import express from "express";
import routers from "./app/routers/index.router";
import { errorHandler } from "./app/middlewares/request-handler.middleware";
import cors from "cors";

// sau khi kêst thúc request thì ghi vào file (không dùng thư viện nữa)
// TODO: sign in || out
// user role: student || parent
// api: parents get childrents (add role)
// upload file, socket,
// viết code và code test bằng postman

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
  console.log(`server on ${port}`);
});
