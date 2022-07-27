import {Link} from "react-router-dom";
import {LogoSvg} from "./logo-svg";
import "./logo.scss";

export const Logo = () => {
	return <Link to="/" className="logo">
		<LogoSvg />
	</Link>
}