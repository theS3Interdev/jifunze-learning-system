"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, useAuth } from "@clerk/nextjs";
import { LogIn, LogOut } from "lucide-react";

import { isInstructor } from "@/lib/isInstructor";

import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/search-input";

export const NavigationBarRoutes = () => {
	const { userId } = useAuth();

	const pathname = usePathname();

	const isInstructorPage = pathname?.startsWith("/instructor");

	const isCoursePage = pathname?.includes("/courses");

	const isSearchPage = pathname === "/search";

	return (
		<>
			{isSearchPage && (
				<div className="hidden md:block">
					<SearchInput />
				</div>
			)}

			<div className="ml-auto flex gap-x-2">
				{isInstructorPage || isCoursePage ? (
					<Link href="/search">
						<Button size="sm" variant="ghost">
							<LogOut className="mr-2 h-4 w-4" />
							Exit Instructor Mode
						</Button>
					</Link>
				) : isInstructor(userId) ? (
					<Link href="/instructor/courses">
						<Button size="sm" variant="ghost">
							<LogIn className="mr-2 h-4 w-4" />
							Enter Instructor mode
						</Button>
					</Link>
				) : null}

				<UserButton afterSignOutUrl="/" />
			</div>
		</>
	);
};
