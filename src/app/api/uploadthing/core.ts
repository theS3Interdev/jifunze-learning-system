import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

import { isInstructor } from "@/lib/isInstructor";

const f = createUploadthing();

const handleAuth = () => {
	const { userId } = auth();

	const isAuthorized = isInstructor(userId);

	if (!userId || !isAuthorized) throw new UploadThingError("Unauthorized access.");

	return { userId };
};

export const ourFileRouter = {
	courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
		.middleware(() => handleAuth())
		.onUploadComplete((info) => console.log("Upload info: ", info)),
	courseAttachment: f(["audio", "image", "pdf", "text"])
		.middleware(() => handleAuth())
		.onUploadComplete((info) => console.log("Upload info: ", info)),
	chapterVideo: f({ video: { maxFileSize: "1GB", maxFileCount: 1 } })
		.middleware(() => handleAuth())
		.onUploadComplete((info) => console.log("Upload info: ", info)),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
