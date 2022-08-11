import { Link } from "react-router-dom";
import { LogoSvg } from "./logo-svg";

export const Logo = () => {
	return (
		<Link to="/" className="leading-none">
			<LogoSvg />
		</Link>
	);
};
