import { Montserrat as FontSans } from "next/font/google";

import type { Metadata } from "next";

import { cn } from "@/lib/utils";

import "@/app/styles/globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: {
		default: "Next.JS Tailwind CSS Starter Template",
		template: "%s | Superior Software Solutions",
	},
	description: "Starter template for Next.JS projects using Tailwind CSS.",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={cn("font-sans antialiased", fontSans.variable)}>{children}</body>
		</html>
	);
};

export default RootLayout;