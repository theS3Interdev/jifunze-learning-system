import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { Chapter, Course, UserProgress } from "@prisma/client";

import { db } from "@/lib/data/db";

import { CourseProgress } from "@/components/course-progress";

import { CourseSideBarItem } from "./course-side-bar-item";

type CourseSidebarProps = {
	course: Course & {
		chapters: (Chapter & {
			userProgress: UserProgress[] | null;
		})[];
	};
	progressCount: number;
};

export const CourseSideBar = async ({ course, progressCount }: CourseSidebarProps) => {
	const { userId } = auth();

	if (!userId) {
		return redirect("/search");
	}

	const purchase = await db.purchase.findUnique({
		where: {
			userId_courseId: {
				userId,
				courseId: course.id,
			},
		},
	});

	return (
		<div className="flex h-full flex-col overflow-y-auto border-r shadow-sm">
			<div className="flex flex-col border-b p-7">
				<h1 className="font-semibold">{course.title}</h1>

				{purchase && (
					<div className="mt-10">
						<CourseProgress variant="success" value={progressCount} />
					</div>
				)}
			</div>

			<div className="flex w-full flex-col">
				{course.chapters.map((chapter) => (
					<CourseSideBarItem
						key={chapter.id}
						id={chapter.id}
						label={chapter.title}
						isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
						courseId={course.id}
						isLocked={!chapter.isFree && !purchase}
					/>
				))}
			</div>
		</div>
	);
};
