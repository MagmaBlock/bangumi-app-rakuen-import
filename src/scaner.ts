import fs from "node:fs/promises";
import path from "path";

export async function scanTopicFiles(basePath: string) {
  const files = new Set<string>();

  const shortIdList = await fs.readdir(path.join(basePath, "data", "topic"));
  for (const shortId of shortIdList) {
    const topicPath = path.join(basePath, "data", "topic", shortId);
    const topicList = await fs.readdir(topicPath);
    for (const topic of topicList) {
      const filePath = path.join(topicPath, topic);
      files.add(filePath);
    }
  }

  return files;
}
