import { executeQuery } from "../database/sql-func";

export const getAccountByUsernameRepo = (username: string) => {
  const sqlQuery = " select * from `accounts` where username = ?";
  return executeQuery(sqlQuery, username);
};
