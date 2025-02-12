import fs from "node:fs/promises";
import path from "path";
import { topicSchema } from "./type";

export async function readTopicFile(filePath: string) {
  const file = await fs.readFile(filePath);
  const json = JSON.parse(file.toString());
  if (!json?.id) {
    json.id = Number.parseInt(path.basename(filePath, ".json"));
  }
  return topicSchema.parse(json);
}
