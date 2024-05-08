import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { CircleDollarSign, File, LayoutDashboard, ListChecks } from "lucide-react";

import { db } from "@/lib/data/db";

import { Banner } from "@/components/banner";
import { IconBadge } from "@/components/icon-badge";

const CoursePage = async ({ params }: { params: { courseId: string } }) => {
	return <div>Course Page</div>;
};

export default CoursePage;
