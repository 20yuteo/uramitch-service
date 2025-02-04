/* eslint-disable import/no-unresolved */
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

const app = new Hono();

// 静的ファイルの配信
app.use("/*", serveStatic({ root: "./build/client" }));

// ヘルスチェックエンドポイント
app.get("/api/v1/health", (c) => {
  return c.json({ status: "ok" });
});

serve(app, (info) => {
  console.log(`App listening on http://localhost:${info.port}`);
});