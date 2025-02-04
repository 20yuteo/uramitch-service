/* eslint-disable import/no-unresolved */
import { serve } from "@hono/node-server";
// import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
// import { createRequestHandler } from "@remix-run/express";
// import * as build from "../../build/server/index.js";
// import { ServerBuild } from "@remix-run/node";

const app = new Hono();

// Remixハンドラーの設定
// const remixHandler = createRequestHandler({
//   build: build as unknown as ServerBuild,
//   mode: process.env.NODE_ENV
// });

// 静的ファイルの配信
// app.use("/*", serveStatic({ root: "./build/client" }));

// ヘルスチェックエンドポイント
app.get("/api/v1/health", (c) => {
  return c.json({ status: "ok" });
});

// Remixアプリケーションのハンドリング
// app.use("*", async (c) => {
//   const response = await remixHandler(
//     c.req.raw as never,
//     c.req.raw.signal as never,
//     c.env as never
//   );
//   return response;
// });

serve(app, (info) => {
  console.log(`App listening on http://localhost:${info.port}`);
});