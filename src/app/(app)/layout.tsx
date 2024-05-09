import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { ConfettiProvider } from "@/lib/providers/confetti-provider";

import { Toaster } from "@/components/ui/toaster";

import "@/app/styles/globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Jifunze Learning System",
	description:
		"Jifunze: Expand your knowledge without breaking the bank.  Affordable, high-quality online courses on the skills you need.",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<ClerkProvider
			appearance={{
				variables: { colorPrimary: "#0369a1" },
			}}
		>
			<html lang="en">
				<body className={cn("font-sans antialiased", fontSans.variable)}>
					{children}
					<Toaster />
					<ConfettiProvider />
				</body>
			</html>
		</ClerkProvider>
	);
};

export default RootLayout;
