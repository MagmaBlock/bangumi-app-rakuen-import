import "dotenv/config";
import pLimit from "p-limit";
import { testDatabaseConnection } from "./src/database";
import { BANGUMI_RAKUEN_PATH } from "./src/env";
import { insertTopic } from "./src/insert";
import { readTopicFile } from "./src/reader";
import { scanTopicFiles } from "./src/scaner";

async function main() {
  await testDatabaseConnection();

  if (!BANGUMI_RAKUEN_PATH) {
    throw new Error("BANGUMI_RAKUEN_PATH is not defined");
  }
  const filePaths = await scanTopicFiles(BANGUMI_RAKUEN_PATH);
  console.log(`扫描到 ${filePaths.size} 个文件`);

  // 并发
  const limit = pLimit(32);
  const taskPool = Array.from(filePaths).map((filePath) =>
    limit(async () => {
      const topic = await readTopicFile(filePath);
      await insertTopic(topic);
      console.log(`Topic ${topic.id} 已更新到数据库`);
    })
  );

  await Promise.all(taskPool);
  console.log("完成");
}

main().catch((err) => {
  console.error(err);
});
