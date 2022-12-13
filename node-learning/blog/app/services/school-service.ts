import { executeQuery, executeQueryWParam } from "../database/db-func";

export const addClassService = async (params: string) => {
  const sqlQuery = "INSERT INTO classes (name) VALUES (?) ";
  return await executeQueryWParam(sqlQuery, params);
};
export const addBulkStudentService = async (params: string[]) => {
  const sqlQuery = "INSERT INTO  students (name, classId) VALUES ?";
  return await executeQueryWParam(sqlQuery, params);
};

export const getClassListService = async () => {
  const sqlQuery =
    "select c.*, (select count(*) from students as s where c.id = s.classId) as count from classes as c order by count desc";
  return await executeQuery(sqlQuery);
};
export const getStudentListService = async () => {
  const sqlQuery =
    "SELECT  s.name, s.id , s.classId FROM school.students as s LEFT JOIN (select count(stu.id) as sum ,stu.classId as classId from school.students  as stu group by stu.classId ) counter On counter.classId= s.classId order by counter.sum desc;";
  return await executeQuery(sqlQuery);
};
