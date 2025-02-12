# bangumi-app-rakuen-import

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.43. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

应该有两个环境变量，可以写在 `.env` 文件：

- `DATABASE_URL` `mysql://user:password@host:port/database`
- `BANGUMI_RAKUEN_PATH` 是 BangumiRakuen 仓库的根路径，程序会读取 /data/topic
