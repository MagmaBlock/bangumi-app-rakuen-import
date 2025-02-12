import { z } from "zod";

export const topicSchema = z.object({
  id: z.number(),
  avatar: z.string(),
  floor: z.string(),
  group: z.string(),
  groupHref: z.string(),
  groupThumb: z.string(),
  message: z.string(),
  time: z.string(),
  title: z.string(),
  userId: z.string(),
  userName: z.string(),
  userSign: z.string(),
});

export type Topic = z.infer<typeof topicSchema>;
