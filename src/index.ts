import { Elysia } from "elysia";
import { appConfig } from "./config/app.config";

const app = new Elysia()
  .use(import("./modules/users").then((mod) => mod.user))
  .listen(appConfig.port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
