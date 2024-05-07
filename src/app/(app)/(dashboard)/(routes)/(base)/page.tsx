import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const HomePage = async () => {
	return (
		<div>
			<SignedIn>
				<UserButton afterSignOutUrl="/" />
			</SignedIn>
			<SignedOut>
				<SignInButton />
			</SignedOut>
		</div>
	);
};

export default HomePage;
