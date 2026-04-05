if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.error(`
  ❌ 禁止使用 npm/yarn！
  请使用 pnpm 安装依赖：
  npm install -g pnpm
  pnpm install
  `);
  process.exit(1);
}
