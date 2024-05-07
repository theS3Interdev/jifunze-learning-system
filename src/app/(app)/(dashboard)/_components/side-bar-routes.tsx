"use client";

import { usePathname } from "next/navigation";
import { BarChart, Compass, Layout, List } from "lucide-react";

import { SideBarItems } from "./side-bar-items";

const guestRoutes = [
	{
		icon: Compass,
		label: "Course Gallery",
		href: "/search",
	},
	{
		icon: Layout,
		label: "My Courses",
		href: "/student",
	},
];

const instructorRoutes = [
	{
		icon: List,
		label: "Courses",
		href: "/instructor/courses",
	},
	{
		icon: BarChart,
		label: "Course Analytics",
		href: "/instructor/analytics",
	},
];

export const SideBarRoutes = () => {
	const pathname = usePathname();

	const isInstructorPage = pathname?.includes("/instructor");

	const routes = isInstructorPage ? instructorRoutes : guestRoutes;

	return (
		<div className="flex w-full flex-col">
			{routes.map((route) => (
				<SideBarItems
					key={route.href}
					icon={route.icon}
					label={route.label}
					href={route.href}
				/>
			))}
		</div>
	);
};
