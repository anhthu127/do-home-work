import connection from "./mysql-connection";
import mysql from "mysql";

export const executeQuery = async <T>(
  sqlString: string,
  params: string | T[] = []
): Promise<any> => {
  return new Promise((resolve, reject) => {
    connection.query(sqlString, [params], (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

export const executeWithTransaction = <T>(
  sqlString: string,
  params: string | T[] = []
) => {
  connection.beginTransaction(async (err) => {
    if (err) return connection.rollback();
    try {
      const result = await executeQuery(sqlString, params);
      if (result) {
        connection.commit();
      }
    } catch (error) {
      connection.rollback();
    }
  });
};

export const printQuery = (sqlString: string, params) => {
  return console.log(mysql.format(sqlString, params));
};
