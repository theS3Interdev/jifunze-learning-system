"use client";

import { usePathname, useRouter } from "next/navigation";
import { CheckCircle, Lock, PlayCircle } from "lucide-react";

import { cn } from "@/lib/utils";

type CourseSidebarItemProps = {
	label: string;
	id: string;
	isCompleted: boolean;
	courseId: string;
	isLocked: boolean;
};

export const CourseSideBarItem = ({ label, id, isCompleted, courseId, isLocked }: CourseSidebarItemProps) => {
	const pathname = usePathname();

	const router = useRouter();

	const Icon = isLocked ? Lock : isCompleted ? CheckCircle : PlayCircle;

	const isActive = pathname?.includes(id);

	const onClick = () => {
		router.push(`/courses/${courseId}/chapters/${id}`);
	};

	return (
		<button
			onClick={onClick}
			type="button"
			className={cn(
				"flex items-center gap-x-2 pl-6 text-sm font-[500] text-slate-500 transition-all hover:bg-sky-300/20 hover:text-sky-600",
				isActive && "bg-slate-200/20 text-sky-700 hover:bg-sky-200/20 hover:text-sky-700",
				isCompleted && "text-sky-700 hover:text-sky-700",
				isCompleted && isActive && "bg-sky-200/20",
			)}
		>
			<div className="flex items-center gap-x-2 py-4">
				<Icon size={22} className={cn("text-slate-500", isActive && "text-sky-700", isCompleted && "text-sky-700")} />
				{label}
			</div>

			<div
				className={cn(
					"ml-auto h-full border-2 border-primary opacity-0 transition-all",
					isActive && "opacity-100",
					isCompleted && "border-sky-700",
				)}
			/>
		</button>
	);
};
