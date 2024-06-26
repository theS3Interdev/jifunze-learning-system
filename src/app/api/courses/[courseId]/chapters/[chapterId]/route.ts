import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import Mux from "@mux/mux-node";

import { db } from "@/lib/data/db";

const { video } = new Mux({
	tokenId: process.env.MUX_TOKEN_ID!,
	tokenSecret: process.env.MUX_TOKEN_SECRET_KEY!,
});

export async function PATCH(req: Request, { params }: { params: { courseId: string; chapterId: string } }) {
	try {
		const { userId } = auth();

		const { isPublished, ...values } = await req.json();

		if (!userId) {
			return new NextResponse("Unauthorized access.", { status: 401 });
		}

		const ownCourse = await db.course.findUnique({
			where: {
				id: params.courseId,
				userId,
			},
		});

		if (!ownCourse) {
			return new NextResponse("Unauthorized access.", { status: 401 });
		}

		const chapter = await db.chapter.update({
			where: {
				id: params.chapterId,
				courseId: params.courseId,
			},
			data: {
				...values,
			},
		});

		if (values.videoUrl) {
			const existingMuxData = await db.muxData.findFirst({
				where: {
					chapterId: params.chapterId,
				},
			});

			if (values.videoUrl) {
				const existingMuxData = await db.muxData.findFirst({
					where: {
						chapterId: params.chapterId,
					},
				});

				if (existingMuxData) {
					await video.assets.delete(existingMuxData.assetId);

					await db.muxData.delete({
						where: {
							id: existingMuxData.id,
						},
					});
				}
			}

			const asset = await video.assets.create({
				input: [{ url: values.videoUrl }],
				playback_policy: ["public"],
				max_resolution_tier: "1080p",
				encoding_tier: "baseline",
			});

			await db.muxData.create({
				data: {
					chapterId: params.chapterId,
					assetId: asset.id,
					playbackId: asset.playback_ids?.[0]?.id,
				},
			});
		}

		return NextResponse.json(chapter);
	} catch (error) {
		console.log("[PATCH_CHAPTER]", error);
		return new NextResponse("Internal server error.", { status: 500 });
	}
}

export async function DELETE(req: Request, { params }: { params: { courseId: string; chapterId: string } }) {
	try {
		const { userId } = auth();

		if (!userId) {
			return new NextResponse("Unauthorized access.", { status: 401 });
		}

		const ownCourse = await db.course.findUnique({
			where: {
				id: params.courseId,
				userId,
			},
		});

		if (!ownCourse) {
			return new NextResponse("Unauthorized access.", { status: 401 });
		}

		const chapter = await db.chapter.findUnique({
			where: {
				id: params.chapterId,
				courseId: params.courseId,
			},
		});

		if (!chapter) {
			return new NextResponse("Chapter not found.", { status: 404 });
		}

		if (chapter.videoUrl) {
			const existingMuxData = await db.muxData.findFirst({
				where: {
					chapterId: params.chapterId,
				},
			});

			if (existingMuxData) {
				await video.assets.delete(existingMuxData.assetId);

				await db.muxData.delete({
					where: {
						id: existingMuxData.id,
					},
				});
			}
		}

		const deletedChapter = await db.chapter.delete({
			where: {
				id: params.chapterId,
			},
		});

		const publishedChaptersInCourse = await db.chapter.findMany({
			where: {
				courseId: params.courseId,
				isPublished: true,
			},
		});

		if (!publishedChaptersInCourse.length) {
			await db.course.update({
				where: {
					id: params.courseId,
				},
				data: {
					isPublished: false,
				},
			});
		}

		return NextResponse.json(deletedChapter);
	} catch (error) {
		console.log("[DELETE_CHAPTER]", error);
		return new NextResponse("Internal server error.", { status: 500 });
	}
}
