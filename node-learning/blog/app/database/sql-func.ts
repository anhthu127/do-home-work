import connection from "./mysql-connection";
// TODO: gộp 2 quểy lại thành 1

export const executeQuery = (sqlString: string) => {
  return new Promise((resolve, reject) => {
    connection.query(sqlString, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

export const executeQueryWParam = async <T>(
  sqlString: string,
  params: string | T[]
): Promise<any> => {
  return new Promise((resolve, reject) => {
    connection.query(sqlString, [params], (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};
