const userAgent = process.env.npm_config_user_agent || '';
const execPath = process.env.npm_execpath || '';

const isPnpm =
  /(^|\s)pnpm\//.test(userAgent) || /[\\/]pnpm(?:\.c?js)?$/.test(execPath);

if (!isPnpm) {
  console.error(`
禁止使用 npm/yarn 安装依赖。

请使用 pnpm：
  corepack enable
  pnpm install

当前项目要求：pnpm@10.33.0
  `);
  process.exit(1);
}
