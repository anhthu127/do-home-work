import { DB_CONFIG } from "../constants/constant";
import mysql from "mysql";

const connection = mysql.createConnection(DB_CONFIG);

const createClasses =
  "CREATE TABLE `classes` (id INT(8)  NOT NULL AUTO_INCREMENT, name VARCHAR(255), max INT(8) , startTime DateTime, endTime DateTime, PRIMARY KEY (id))";
const createStudents =
  "CREATE TABLE `students` (id INT(8)  NOT NULL AUTO_INCREMENT, name VARCHAR(255), dob DateTime, classId INT(8), accountId INT(8), PRIMARY KEY (id), FOREIGN KEY (classId) REFERENCES classes(id), FOREIGN KEY (accountId) REFERENCES accounts(id))";
const createParents =
  "CREATE TABLE `parents` (id INT(8)  NOT NULL AUTO_INCREMENT , name VARCHAR(255),  dob DateTime, studentId INT(8), accountId INT(8), PRIMARY KEY (id), FOREIGN KEY (studentId) REFERENCES students(id), FOREIGN KEY (accountId) REFERENCES accounts(id))";
const createAccounts =
  "CREATE TABLE `accounts` (id INT(8) NOT NULL AUTO_INCREMENT, name VARCHAR(180) NOT NULL , username VARCHAR(180) NOT NULL UNIQUE, email VARCHAR(180) NOT NULL UNIQUE,  dob VARCHAR(180), role VARCHAR(180), PRIMARY KEY (id))";

const queries = [createAccounts, createClasses, createStudents, createParents];

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  const dbName = process.env.MYSQL_DATABASE || "school";
  console.log(dbName);

  connection.query(`CREATE DATABASE ${dbName} `, async function (err, result) {
    if (err) {
      console.log("create table error:    ", err);
    }
    console.log("Database demo-1 created");

    connection.query(`USE ${dbName}`);
    connection.query(
      "DROP TABLE IF EXISTS `classes`, `students`, `parents`, `accounts`"
    );
    for (const query of queries) {
      await createTable(query);
    }
  });
});

const createTable = async (query) => {
  connection.query(query, function (err, result) {
    if (err) {
      console.log("Create table error", err);
    }
    console.log("Table parents created", result);
  });
};
