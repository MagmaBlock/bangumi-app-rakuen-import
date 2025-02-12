import { db } from "./database";
import type { Topic } from "./type";

export async function insertTopic(topic: Topic) {
  await db.execute(
    `INSERT INTO \`topic\` 
        (\`id\`, \`title\`, \`message\`, \`userId\`, \`userName\`, \`avatar\`, \`group\`, \`groupHref\`, \`groupThumb\`, \`time\`) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          \`title\` = VALUES(\`title\`),
          \`message\` = VALUES(\`message\`),
          \`userId\` = VALUES(\`userId\`),
          \`userName\` = VALUES(\`userName\`),
          \`avatar\` = VALUES(\`avatar\`),
          \`group\` = VALUES(\`group\`),
          \`groupHref\` = VALUES(\`groupHref\`),
          \`groupThumb\` = VALUES(\`groupThumb\`),
          \`time\` = VALUES(\`time\`);`,
    [
      topic.id,
      topic.title,
      topic.message,
      topic.userId,
      topic.userName,
      topic.avatar,
      topic.group,
      topic.groupHref,
      topic.groupThumb,
      topic.time,
    ]
  );
}
