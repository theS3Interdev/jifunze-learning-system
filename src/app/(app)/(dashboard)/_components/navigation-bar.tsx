import { NavigationBarRoutes } from "@/components/navigation-bar-routes";
import { MobileSideBar } from "./mobile-side-bar";

export const NavigationBar = () => {
	return (
		<div className="flex h-full items-center border-b bg-white p-4 shadow-sm">
			<MobileSideBar />

			<NavigationBarRoutes />
		</div>
	);
};
