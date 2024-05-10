import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

/* export routes for next.js app router */
export const { GET, POST } = createRouteHandler({
	router: ourFileRouter,
});
