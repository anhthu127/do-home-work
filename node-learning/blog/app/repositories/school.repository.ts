import { executeQuery, printQuery } from "../database/sql-func";
import { Account } from "../models/school";
// TODO:
// thêm transaction
// định nghĩa DTO (định nghĩa theo bảng DB)
// them models hehe (là kiểu của giá trị trả về cho FE)
// express js error handle

export const addClassRepo = async (className: string) => {
  const sqlQuery = "INSERT INTO classes (name) VALUES (?) ";
  return await executeQuery(sqlQuery, className);
};

export const addBulkStudentRepo = async (
  students: { classId: string; name: string }[]
) => {
  const sqlQuery = "INSERT INTO  students (name, classId) VALUES ?";
  return await executeQuery(sqlQuery, students);
};

export const getClassListRepo = async () => {
  const startTransaction = "START TRANSACTION";
  const sqlQuery =
    "select c.*, (select count(*) from students as s where c.id = s.classId) as count from classes as c order by count desc";
  return await executeQuery(sqlQuery);
};

export const getStudentListRepo = async () => {
  const sqlQuery =
    "SELECT  s.name, s.id , s.classId FROM school.students as s LEFT JOIN (select count(stu.id) as sum ,stu.classId as classId from school.students  as stu group by stu.classId ) counter On counter.classId= s.classId order by counter.sum desc;";
  return await executeQuery(sqlQuery);
};

export const createAccountRepo = async (accounts: Account) => {
  const sqlQuery =
    "INSERT INTO `accounts` (name, dob, username, role, email) VALUES (?) ";
  return await executeQuery(sqlQuery, Object.values(accounts));
};

export const createParentRepo = async (parents) => {
  const sqlQuery =
    "INSERT INTO parents (name, dob, accountId, studentId) VALUES (?) ";
  return await executeQuery(sqlQuery, parents);
};

export const createStudentRepo = async (student) => {
  const sqlQuery =
    "INSERT INTO students (name, dob, classId, accountId) VALUES (?) ";
  return await executeQuery(sqlQuery, student);
};

export const getAccountByUserName = async (username, email) => {
  const sqlQuery = "select * from accounts where username = ? or email = ?";
  return await executeQuery(sqlQuery, [username, email]);
};
