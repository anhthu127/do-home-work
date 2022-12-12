import { RequestHandler } from "express";
import connection from "../database";

export const addClass = async (req, res, next) => {
  const { name } = req.body;
  connection.query(
    "INSERT INTO classes (name) VALUES (?) ",
    [name],
    (err, data, fields) => {
      if (err) return res.json(err);
      res.status(200).json({
        status: "success",
        data: data,
      });
    }
  );
};

export const addBulkStudent: RequestHandler = async (req, res, next) => {
  const { students, classId } = req.body;
  const sqlQuery = "INSERT INTO  students (name, classId) VALUES ?";
  const values = [];
  for (const student of students) {
    values.push([student, classId]);
  }
  if (values.length > 0) {
    connection.query(sqlQuery, [values], (err, data) => {
      if (err) return res.json(err);
      res.status(200).json({
        status: "success",
        data: data,
      });
    });
  } else {
    res.json({ message: "Student data is required" });
  }
};

export const getStudentList: RequestHandler = async (req, res) => {
  const sqlQuery =
    "SELECT  s.name, s.id , s.classId FROM school.students as s LEFT JOIN (select count(stu.id) as sum ,stu.classId as classId from school.students  as stu group by stu.classId ) counter On counter.classId= s.classId order by counter.sum desc;";
  connection.query(sqlQuery, (err, data) => {
    if (err) return res.json(err);
    res.status(200).json({
      status: "success",
      data: data,
    });
  });
};

export const getClassList: RequestHandler = async (req, res) => {
  const sqlQuery =
    "select c.*, (select count(*) from students as s where c.id = s.classId) as count from classes as c order by count desc";
  connection.query(sqlQuery, (err, data) => {
    if (err) return res.json(err);
    res.status(200).json({
      status: "success",
      data: data,
    });
  });
};
