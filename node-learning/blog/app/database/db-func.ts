import connection from "../database";

export const executeQuery = (sqlString: string) => {
  return new Promise((resolve, reject) => {
    connection.query(sqlString, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

export const executeQueryWParam = async (
  sqlString: string,
  params: string | string[]
): Promise<any> => {
  return new Promise((resolve, reject) => {
    connection.query(sqlString, [params], (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};
