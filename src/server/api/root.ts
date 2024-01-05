import { postRouter } from "crud/server/api/routers/post";
import { createTRPCRouter } from "crud/server/api/trpc";
import { postapi } from "./routers/postapi";
import { getapi } from "./routers/getapi";
import { updateapi } from "./routers/updateapi.";
import { deletetapi } from "./routers/deleteapi";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  postapi: postapi,
  getapi: getapi,
  updateapi: updateapi,
  deleteapi: deletetapi,
});

// export type definition of API
export type AppRouter = typeof appRouter;
