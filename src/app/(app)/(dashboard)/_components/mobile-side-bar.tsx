import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { SideBar } from "./side-bar";

export const MobileSideBar = () => {
	return (
		<Sheet>
			<SheetTrigger className="pr-4 transition hover:opacity-75 md:hidden">
				<Menu />
			</SheetTrigger>

			<SheetContent side="left" className="bg-white p-0">
				<SideBar />
			</SheetContent>
		</Sheet>
	);
};
