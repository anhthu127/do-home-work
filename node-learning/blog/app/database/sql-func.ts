import connection from "./mysql-connection";

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
