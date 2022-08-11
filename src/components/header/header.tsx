import { Logo } from "../logo/logo";

export const Header = () => {
	return (
		<header className="container mx-auto flex items-center justify-between p-10">
			<Logo />
		</header>
	);
};
