const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-full">
			<main className="h-full pt-[80px] md:pl-56">{children}</main>
		</div>
	);
};

export default DashboardLayout;
