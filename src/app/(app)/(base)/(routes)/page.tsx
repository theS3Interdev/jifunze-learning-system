import Link from "next/link";
import { BarChartIcon, BookIcon, PencilIcon, UsersIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = async () => {
	return (
		<div className="flex min-h-[100dvh] flex-col">
			<header className="flex h-14 items-center px-4 lg:px-6">
				<Link className="flex items-center justify-center" href="#">
					<BookIcon className="h-6 w-6" />
					<span className="sr-only">Jifunze Learning System</span>
				</Link>

				<nav className="ml-auto flex gap-4 sm:gap-6">
					<Link
						className="text-sm font-medium underline-offset-4 hover:underline"
						href="#"
					>
						Features
					</Link>
					<Link
						className="text-sm font-medium underline-offset-4 hover:underline"
						href="#"
					>
						Pricing
					</Link>
					<Link
						className="text-sm font-medium underline-offset-4 hover:underline"
						href="#"
					>
						About
					</Link>
					<Link
						className="text-sm font-medium underline-offset-4 hover:underline"
						href="#"
					>
						Contact
					</Link>
				</nav>
			</header>

			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
							<div className="space-y-4">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Empower Your Learning Experience
								</h1>
								<p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
									Our learning management system provides a comprehensive platform to
									create, manage, and deliver engaging online courses.
								</p>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Link
										className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
										href="/instructor/courses"
									>
										Instructor
									</Link>
									<Link
										className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
										href="/student"
									>
										Student
									</Link>
								</div>
							</div>
							<picture>
								<img
									alt="Hero"
									className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
									height="310"
									src="https://placehold.co/600x400"
									width="550"
								/>
							</picture>
						</div>
					</div>
				</section>

				<section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
									Key Features
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Unlock the Power of Online Learning
								</h2>
								<p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Our learning management system provides a comprehensive set of tools to
									create, manage, and deliver engaging online courses.
								</p>
							</div>
						</div>

						<div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
							<div className="grid gap-1">
								<PencilIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
								<h3 className="text-xl font-bold">Course Creation</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Easily create and customize courses with a user-friendly interface.
								</p>
							</div>

							<div className="grid gap-1">
								<UsersIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
								<h3 className="text-xl font-bold">Student Management</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Manage your students, track their progress, and provide personalized
									feedback.
								</p>
							</div>

							<div className="grid gap-1">
								<BarChartIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
								<h3 className="text-xl font-bold">Analytics</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Gain insights into your courses and students with powerful analytics
									tools.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
								Course Creation
							</div>
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
								Effortless Course Building
							</h2>
							<p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Our intuitive course builder allows you to create engaging and interactive
								online courses with ease.
							</p>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link
									className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
									href="#"
								>
									Create a Course
								</Link>
								<Link
									className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
									href="#"
								>
									Learn More
								</Link>
							</div>
						</div>
						<picture>
							<img
								alt="Course Creation"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
								height="310"
								src="https://placehold.co/600x400"
								width="550"
							/>
						</picture>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
						<picture>
							<img
								alt="Student Management"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
								height="310"
								src="https://placehold.co/600x400"
								width="550"
							/>
						</picture>
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
								Student Management
							</div>
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
								Empower Your Students
							</h2>
							<p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Our student management tools help you track progress, provide feedback,
								and engage your learners.
							</p>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link
									className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
									href="#"
								>
									Manage Students
								</Link>
								<Link
									className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
									href="#"
								>
									Learn More
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
								Analytics
							</div>
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
								Gain Valuable Insights
							</h2>
							<p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Our powerful analytics tools provide you with the data you need to
								optimize your courses and improve student outcomes.
							</p>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link
									className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
									href="#"
								>
									Explore Analytics
								</Link>
								<Link
									className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
									href="#"
								>
									Learn More
								</Link>
							</div>
						</div>
						<picture>
							<img
								alt="Analytics"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
								height="310"
								src="https://placehold.co/600x400"
								width="550"
							/>
						</picture>
					</div>
				</section>

				<section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
					<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
						<div className="space-y-3">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
								Ready to Transform Your Learning Experience?
							</h2>
							<p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Sign up today and start creating engaging online courses that empower your
								students.
							</p>
						</div>
						<div className="mx-auto w-full max-w-sm space-y-2">
							<form className="flex space-x-2">
								<Input
									className="max-w-lg flex-1"
									placeholder="Enter your email"
									type="email"
								/>
								<Button type="submit">Get Started</Button>
							</form>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								Sign up to start your free trial.
								<Link className="underline underline-offset-2" href="#">
									Terms & Conditions
								</Link>
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default HomePage;
