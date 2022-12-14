import { executeQuery } from "../database/sql-func";
// TODO:
// thêm transaction
// định nghĩa DTO (định nghĩa theo bảng DB)
// them models hehe (là kiểu của giá trị trả về cho FE)
// express js error handle

export const addClassRepo= async (className: string) => {
  const sqlQuery = "INSERT INTO classes (name) VALUES (?) ";
  return await executeQuery(sqlQuery, className);
};

export const addBulkStudentRepo= async (
  students: { classId: string; name: string }[]
) => {
  const sqlQuery = "INSERT INTO  students (name, classId) VALUES ?";
  return await executeQuery(sqlQuery, students);
};

export const getClassListRepo = async () => {
  const sqlQuery =
    "select c.*, (select count(*) from students as s where c.id = s.classId) as count from classes as c order by count desc";
  return await executeQuery(sqlQuery);
};

export const getStudentListRepo= async () => {
  const sqlQuery =
    "SELECT  s.name, s.id , s.classId FROM school.students as s LEFT JOIN (select count(stu.id) as sum ,stu.classId as classId from school.students  as stu group by stu.classId ) counter On counter.classId= s.classId order by counter.sum desc;";
  return await executeQuery(sqlQuery);
};
