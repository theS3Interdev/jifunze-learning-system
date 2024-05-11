"use client";

import { usePathname, useRouter } from "next/navigation";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type SidebarItemProps = {
	icon: LucideIcon;
	label: string;
	href: string;
};

export const SideBarItems = ({ icon: Icon, label, href }: SidebarItemProps) => {
	const pathname = usePathname();

	const router = useRouter();

	const isActive = (pathname === "/" && href === "/") || pathname === href || pathname?.startsWith(`${href}/`);

	const onClick = () => {
		router.push(href);
	};

	return (
		<button
			onClick={onClick}
			type="button"
			className={cn(
				"flex items-center gap-x-2 pl-6 text-sm font-[500] text-slate-500 transition-all hover:bg-sky-300/20 hover:text-sky-600",
				isActive && "bg-sky-200/20 text-sky-700 hover:bg-sky-200/20 hover:text-sky-700",
			)}
		>
			<div className="flex items-center gap-x-2 py-4">
				<Icon size={22} className={cn("text-slate-500", isActive && "text-sky-700")} />
				{label}
			</div>

			<div className={cn("ml-auto h-full border-2 border-primary opacity-0 transition-all", isActive && "opacity-100")} />
		</button>
	);
};
