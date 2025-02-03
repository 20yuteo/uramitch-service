/* eslint-disable import/no-unresolved */
import { createRequestHandler } from "@remix-run/express";
import { ServerBuild } from "@remix-run/node";
import express from "express";

import * as build from "../build/server/index.js";

const app = express();
app.use(express.static("build/client"));

const remixHandler = createRequestHandler({ build: build as unknown as ServerBuild });

app.get("/api/v1/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.all("*", remixHandler);

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});