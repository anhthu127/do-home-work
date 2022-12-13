import mysql from "mysql";
import { DB_CONFIG } from "../constants/constant";
// TODO:
// - thêm phần seed data

const connection = mysql.createConnection(DB_CONFIG);

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

export default connection;
