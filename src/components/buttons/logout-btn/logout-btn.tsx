import { useAppDispatch } from "../../../hooks/use-app";
import { logout } from "../../../store/user/user.slice";

export const LogoutBtn = () => {
	const dispatch = useAppDispatch();
	return (
		<button className="btn" onClick={() => dispatch(logout())}>
			Logout
		</button>
	);
};
