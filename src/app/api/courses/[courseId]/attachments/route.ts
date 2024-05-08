import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/data/db";

export async function POST(req: Request, { params }: { params: { courseId: string } }) {
	try {
		const { userId } = auth();

		const uploadResult = await req.json();

		if (!userId) {
			return new NextResponse("Unauthorized access.", { status: 401 });
		}

		const courseOwner = await db.course.findUnique({
			where: {
				id: params.courseId,
				userId: userId,
			},
		});

		if (!courseOwner) {
			return new NextResponse("Unauthorized access.", { status: 401 });
		}

		const attachment = await db.attachment.create({
			data: {
				url: uploadResult.url.fileUrl,
				name: uploadResult.url.name,
				courseId: params.courseId,
			},
		});

		return NextResponse.json(attachment);
	} catch (error) {
		console.log("[CREATE_ATTACHMENT]", error);
		return new NextResponse("Internal server error.", { status: 500 });
	}
}
