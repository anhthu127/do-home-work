export const DB_CONFIG = {
  host: process.env.MYSQL_HOST || "127.0.0.1",
  user: process.env.MYSQL_USER || "root",
  password: process.env.PASSWORD || "root",
  database: process.env.MYSQL_DATABASE || "school",
  port: Number(process.env.MYSQL_PORT) || 3306,
};
