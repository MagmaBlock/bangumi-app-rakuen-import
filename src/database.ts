import mysql from "mysql2";
import { DATABASE_URL } from "./env";

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

export const db = mysql.createPool(DATABASE_URL).promise();

export async function testDatabaseConnection() {
  console.log("正在进行数据库连接测试");
  const testQuery = await db.execute(`SELECT 1`);
  console.log("数据库连接测试：", testQuery);
}
