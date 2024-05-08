import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/data/db";
import { isInstructor } from "@/lib/isInstructor";

export async function POST(req: Request) {
	try {
		const { userId } = auth();

		const { title } = await req.json();

		if (!userId || !isInstructor(userId)) {
			return new NextResponse("Unauthorized access.", { status: 401 });
		}

		const course = await db.course.create({
			data: {
				userId,
				title,
			},
		});

		return NextResponse.json(course);
	} catch (error) {
		console.log("[CREATE_COURSE]", error);
		return new NextResponse("Internal server error.", { status: 500 });
	}
}
