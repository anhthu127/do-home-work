import mysql from "mysql";

console.log("Suggest: Tables and Columns should be cammelCase!");
const dbConfig = {
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "school",
  port: 3306,
};
// const createClass =
//   "CREATE TABLE `classes` (id INT(8)  NOT NULL AUTO_INCREMENT, name VARCHAR(255) , PRIMARY KEY (id))";
// const createStudents =
//   "CREATE TABLE `students` (id INT(8)  NOT NULL AUTO_INCREMENT, name VARCHAR(255), age INT(8), classId INT(8),PRIMARY KEY (id), FOREIGN KEY (classId) REFERENCES classes(id))";
// const createParents =
//   " CREATE TABLE `parents` (id INT(8)  NOT NULL AUTO_INCREMENT , name VARCHAR(255), studentId INT(8), PRIMARY KEY (id), FOREIGN KEY (studentId) REFERENCES students(id))";
// const queries = [createClass, createStudents, createParents];
const connection = mysql.createConnection(dbConfig);
// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
//   const dbName = `school`;
//   connection.query(`CREATE DATABASE ${dbName} `, async function (err, result) {
//     if (err) {
//       console.log("create table error:    ", err);
//     }
//     console.log("Database demo-1 created");

//     connection.query(`USE ${dbName}`);
//     connection.query("DROP TABLE IF EXISTS `classes`, `students`, `parents`");
//     await createTable(createClass);
//     await createTable(createStudents);
//     await createTable(createParents);
//   });
// });

// const createTable = async (query) => {
//   connection.query(query, function (err, result) {
//     if (err) {
//       console.log("Create table error", err);
//     }
//     console.log("Table parents created", result);
//   });
// };

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

export default connection;
